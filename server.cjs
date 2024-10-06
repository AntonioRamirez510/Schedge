require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser =require('cookie-parser');
const userRoutes = require('./routes/userRoutes.cjs');
const appointmentRoutes = require('./routes/appointmentRoutes.cjs');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
