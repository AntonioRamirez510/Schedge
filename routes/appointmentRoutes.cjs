const express = require('express');
const prisma = require('../prisma-client.cjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware for verifying JWT
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Create an appointment
router.post('/', verifyToken, async (req, res) => {
  const { date, description } = req.body;

  const appointment = await prisma.appointment.create({
    data: {
      date: new Date(date),
      description,
      userId: req.user.id,
    },
  });

  res.json(appointment);
});

// Get all appointments for the logged-in user
router.get('/', verifyToken, async (req, res) => {
  const appointments = await prisma.appointment.findMany({
    where: { userId: req.user.id },
  });

  res.json(appointments);
});

module.exports = router;
