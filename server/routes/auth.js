const express = require('express');
const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const SECRET_KEY = process.env.JWT_SECRET;
const router = express.Router();


// Token verification middleware
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
}
router.post('/request-alumni-id', verifyToken, async (req, res) => {
  const userEmail = req.user.email;
  const password = req.body.password;

  const sql = 'SELECT * FROM register WHERE email = ? LIMIT 1';

  try {
    const [results] = await db.query(sql, [userEmail]);

    if (results.length === 0) {
      return res.status(400).json({ error: 'Email not found in registered users' });
    }

    const user = results[0];

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // ✅ Check if alumni_id already exists
    if (user.alumni_id) {
      return res.status(200).json({
        message: '✅ You already have an Alumni ID!',
        alumni_id: user.alumni_id
      });
    }

    // ❗ Otherwise generate a new alumni ID
    const alumniId = `ALUM-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

    const updateSql = 'UPDATE register SET alumni_id = ? WHERE email = ?';
    await db.query(updateSql, [alumniId, userEmail]);

    return res.status(200).json({
      message: '✅ Your Alumni ID has been successfully generated!',
      alumni_id: alumniId
    });
  } catch (err) {
    console.error('Error processing alumni request:', err);
    return res.status(500).json({ error: 'Failed to process Alumni ID request' });
  }
});


module.exports = router;
