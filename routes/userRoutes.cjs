require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../prisma-client.cjs');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// verify user
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

router.get('/validate-token', (req,res)=>{
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(!token) {
    return res.status(401).json({message: 'Token not provided'});
  }

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({user: decoded });
  } catch(error){
    return res.status(403).json({message: 'Invalid Token'})
  }
})

// Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
try{
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { username, email, password: hashedPassword },
  });

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ token, user: { id: user.id, email: user.email, username: user.username } });
} catch(error) {
    console.error('registration error:', error);
    res.status(500).json({ message: 'Server error' });
}
});

// Login a user
router.post('/login', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const hasToken = authHeader.split(' ')[1];
  if(authHeader && hasToken){
    jwt.verify(hasToken, process.env.JWT_SECRET, (err, decoded) => {
      if(err) {
        return res.status(401).json({message:'Unauthorized'})
      }
      res.json({

      })
    });
  }
  const { email, password } = req.body;
  try{
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ mesage:'Login Successful!', token, user: { id: user.id, email: user.email, username: user.username } });

  } catch(error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = {router, verifyToken};
