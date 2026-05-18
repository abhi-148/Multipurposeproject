import express from "express";

import swaggerUi
from "swagger-ui-express";

import swaggerJsdoc
from "swagger-jsdoc";

import helmet from "helmet";

import morgan from "morgan";

import rateLimit
from "express-rate-limit";

import cors from "cors";

import dotenv from "dotenv";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import authMiddleware
from "./middleware/authMiddleware.js";

import db from "./db.js";

/* =========================
   CONFIG
========================= */

dotenv.config();

const app = express();

/* =========================
   SWAGGER CONFIG
========================= */

const options = {

  definition: {

    openapi: "3.0.0",

    info: {

      title:
      "Modena Task Manager API",

      version: "1.0.0",

      description:
      "Full Stack Task Manager Backend APIs",

    },

    servers: [

      {

        url:
        "http://localhost:5000",

      },

    ],

  },

  apis: ["./server.js"],

};

const swaggerSpec =

swaggerJsdoc(options);

/* SWAGGER ROUTE */

app.use(

  "/api-docs",

  swaggerUi.serve,

  swaggerUi.setup(swaggerSpec)

);

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());

/* SECURITY */

app.use(helmet());

/* LOGGER */

app.use(morgan("dev"));

/* RATE LIMIT */

const limiter = rateLimit({

  windowMs:
    15 * 60 * 1000,

  max: 100,

  message:
    "Too many requests from this IP",

});

app.use(limiter);

/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {

  res.send(
    "🚀 Modena Backend Running"
  );

});

/* =========================
   REGISTER API
========================= */
/**
 * @swagger
 * /register:
 *   post:
 *     summary:
 *       Register User
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description:
 *           User Registered Successfully
 */
app.post(

  "/register",

  (req, res) => {

    const {

      name,
      email,
      password,

    } = req.body;

    /* VALIDATION */

    if (

      !name ||
      !email ||
      !password

    ) {

      return res.status(400).json({

        message:
        "All fields are required",

      });

    }

    /* HASH PASSWORD */

    const hashedPassword =

      bcrypt.hashSync(
        password,
        10
      );

    /* STORED PROCEDURE */

    const sql =

      "CALL register_user(?, ?, ?)";

    db.query(

      sql,

      [
        name,
        email,
        hashedPassword,
      ],

      (err, result) => {

        if (err) {

          /* DUPLICATE EMAIL */

          if (
            err.code ===
            "ER_DUP_ENTRY"
          ) {

            return res.status(400).json({

              message:
              "Email already exists",

            });

          }

          console.log(err);

          return res.status(500).json({

            message:
            "Registration Failed",

          });

        }

        res.status(201).json({

          message:
          "User Registered Successfully",

        });

      }

    );

  }

);

/* =========================
   LOGIN API
========================= */
/**
 * @swagger
 * /login:
 *   post:
 *     summary:
 *       Login User
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description:
 *           Login Successful
 */

app.post(

  "/login",

  (req, res) => {

    const {

      email,
      password,

    } = req.body;

    /* VALIDATION */

    if (

      !email ||
      !password

    ) {

      return res.status(400).json({

        message:
        "Email and Password required",

      });

    }

    /* PROCEDURE */

    const sql =

      "CALL login_user(?)";

    db.query(

      sql,

      [email],

      (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({

            message:
            "Login Failed",

          });

        }

        /* USER */

        const user =

          result[0][0];

        if (!user) {

          return res.status(404).json({

            message:
            "User Not Found",

          });

        }

        /* PASSWORD */

        const isMatch =

          bcrypt.compareSync(

            password,

            user.password

          );

        if (!isMatch) {

          return res.status(401).json({

            message:
            "Invalid Password",

          });

        }

        /* JWT TOKEN */

        const token =

          jwt.sign(

            {

              id: user.id,

              email: user.email,

            },

            process.env.JWT_SECRET,

            {

              expiresIn: "7d",

            }

          );

        /* RESPONSE */

        res.status(200).json({

          message:
          "Login Successful",

          token,

          user: {

            id: user.id,

            name: user.name,

            email: user.email,

          },

        });

      }

    );

  }

);

/* =========================
   PROTECTED DASHBOARD
========================= */

app.get(

  "/dashboard-data",

  authMiddleware,

  (req, res) => {

    res.status(200).json({

      message:
      "Protected Dashboard Access",

      user: req.user,

    });

  }

);

/* =========================
   ADD TASK API
========================= */

/**
 * @swagger
 * /add-task:
 *   post:
 *     summary:
 *       Add New Task
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               priority:
 *                 type: string
 *               user_email:
 *                 type: string
 *     responses:
 *       201:
 *         description:
 *           Task Added Successfully
 */

app.post(

  "/add-task",

  authMiddleware,

  (req, res) => {

    const {

      title,
      description,
      status,
      priority,
      user_email,

    } = req.body;

    /* VALIDATION */

    if (

      !title ||
      !description ||
      !status ||
      !priority ||
      !user_email

    ) {

      return res.status(400).json({

        message:
        "All task fields required",

      });

    }

    /* STORED PROCEDURE */

    const sql =

      "CALL add_task(?, ?, ?, ?, ?)";

    db.query(

      sql,

      [

        title,
        description,
        status,
        priority,
        user_email,

      ],

      (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({

            message:
            "Task Creation Failed",

          });

        }

        res.status(201).json({

          message:
          "Task Added Successfully",

        });

      }

    );

  }

);

/* =========================
   GET TASKS API
========================= */

/**
 * @swagger
 * /tasks/{email}:
 *   get:
 *     summary:
 *       Get Tasks by User Email
 *     tags:
 *       - Tasks
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description:
 *           Tasks Retrieved Successfully
 */

app.get(

  "/tasks/:email",

  authMiddleware,

  (req, res) => {

    const email =
      req.params.email;

    const sql =

      `
      SELECT * FROM tasks

      WHERE user_email = ?

      ORDER BY id DESC
      `;

    db.query(

      sql,

      [email],

      (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({

            message:
            "Failed To Fetch Tasks",

          });

        }

        res.status(200).json(

          result

        );

      }

    );

  }

);

/* =========================
   DELETE TASK API
========================= */

/**
 * @swagger
 * /delete-task/{id}:
 *   delete:
 *     summary:
 *       Delete Task
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description:
 *           Task deleted successfully
 */

app.delete(

  "/delete-task/:id",

  authMiddleware,

  (req, res) => {

    const id =
      req.params.id;

    const sql =

      `
      DELETE FROM tasks
      WHERE id = ?
      `;

    db.query(

      sql,

      [id],

      (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({

            message:
            "Delete Failed",

          });

        }

        res.status(200).json({

          message:
          "Task Deleted Successfully",

        });

      }

    );

  }

);

/* =========================
   UPDATE TASK STATUS
========================= */

/**
 * @swagger
 * /update-task/{id}:
 *   put:
 *     summary:
 *       Update Task Status
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description:
 *           Task updated successfully
 */

app.put(

  "/update-task/:id",

  authMiddleware,

  (req, res) => {

    const id =
      req.params.id;

    const {

      status,

    } = req.body;

    const sql =

      `
      UPDATE tasks

      SET status = ?

      WHERE id = ?
      `;

    db.query(

      sql,

      [

        status,
        id,

      ],

      (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({

            message:
            "Update Failed",

          });

        }

        res.status(200).json({

          message:
          "Task Updated Successfully",

        });

      }

    );

  }

);

/* =========================
   EDIT TASK API
========================= */

app.put(

  "/edit-task/:id",

  authMiddleware,

  (req, res) => {

    const id =
      req.params.id;

    const {

      title,
      description,
      status,
      priority,

    } = req.body;

    const sql =

      `
      UPDATE tasks

      SET

      title = ?,
      description = ?,
      status = ?,
      priority = ?

      WHERE id = ?
      `;

    db.query(

      sql,

      [

        title,
        description,
        status,
        priority,
        id,

      ],

      (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({

            message:
            "Task Update Failed",

          });

        }

        res.status(200).json({

          message:
          "Task Updated Successfully",

        });

      }

    );

  }

);

/* =========================
   SERVER
========================= */

const PORT =

  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `🚀 Server running on port ${PORT}`

  );

});