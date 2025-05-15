const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const JWT_SECRET = process.env.JWT_SECRET;

// Admin login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const [rows] = await db.execute('SELECT * FROM admin WHERE email = ?', [email]);
      if (rows.length === 0) return res.status(400).json({ message: 'User not found' });
  
      const user = rows[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });
  
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, email: user.email, name: user.name });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };
  

router.post('/add', authenticateToken, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [rows] = await db.execute('SELECT * FROM admin WHERE email = ?', [email]);

    if (rows.length > 0) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute('INSERT INTO admin (name, email, password) VALUES (?, ?, ?)', [
      name,
      email,
      hashedPassword,
    ]);

    res.status(201).json({ message: 'Admin added successfully' });
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT id, name, email FROM admin');
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching admins:", err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
