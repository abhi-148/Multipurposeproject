import jwt from "jsonwebtoken";

const authMiddleware = (

  req,
  res,
  next

) => {

  try {

    /* TOKEN */

    const authHeader =
      req.headers.authorization;

    /* CHECK TOKEN */

    if (!authHeader) {

      return res.status(401).json({

        message:
          "Access Denied No Token",

      });

    }

    /* FORMAT */

    const token =
      authHeader.split(" ")[1];

    /* VERIFY */

    const verified =
      jwt.verify(

        token,

        process.env.JWT_SECRET

      );

    /* SAVE USER */

    req.user = verified;

    next();

  } catch (error) {

    return res.status(401).json({

      message:
        "Invalid Token",

    });

  }

};

export default authMiddleware;