const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Load environment variables
const result = dotenv.config();

if (result.error) {
  console.error("Failed to load .env file:", result.error);
  process.exit(1); // Exit the application if .env is missing or incorrect
}

// Create MySQL connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection to ensure it's working
db.getConnection()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Exit the application if the database connection fails
  });

module.exports = db;
