const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();


app.use(express.json());


app.use(cors());


app.use('/api/faqs', require('./routes/faqRoutes'));


app.get('/', (req, res) => {
  res.send('FAQ Manager API is running...'

module.exports = app;