// server/routes/upcomingevents.js
const express = require("express");
const db = require("../db"); // assumes you're using mysql2 with .promise()
const router = express.Router();
router.get("/", async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM upcoming_events ORDER BY date ASC");
      res.json(rows);
    } catch (err) {
      console.error("Error fetching upcoming events:", err);
      res.status(500).json({ error: "Database error" });
    }
  });
  module.exports = router;
