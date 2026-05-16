import express from "express";

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
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());

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