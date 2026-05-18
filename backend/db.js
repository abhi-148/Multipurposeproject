import mysql from "mysql2";

import dotenv from "dotenv";

dotenv.config();

/* MYSQL POOL */

const db = mysql.createPool({

  host:
    process.env.DB_HOST,

  user:
    process.env.DB_USER,

  password:
    process.env.DB_PASSWORD,

  database:
    process.env.DB_NAME,

  waitForConnections: true,

  connectionLimit: 10,

  queueLimit: 0,

});

/* TEST CONNECTION */

db.getConnection((err, connection) => {

  if (err) {

    console.log(
      "❌ MySQL Pool Error"
    );

    console.log(err);

  } else {

    console.log(
      "✅ MySQL Pool Connected"
    );

    connection.release();

  }

});

export default db;