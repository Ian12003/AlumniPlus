// server/routes/announcement.js
const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM announcement ORDER BY timestamp DESC LIMIT 1");
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "No announcement found" });
    }
  } catch (err) {
    console.error("Announcement fetch error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
