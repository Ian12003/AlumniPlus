// server/routes/pastevents.js
const express = require("express");
const db = require("../db"); // assumes you're using mysql2 with .promise()
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM communities");
    res.json(results);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
