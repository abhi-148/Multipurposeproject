import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "modena_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed");
    console.error(err.message);
    return;
  }

  console.log("✅ MySQL Connected");
});

export default db;