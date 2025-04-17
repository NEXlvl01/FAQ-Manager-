const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routes
app.use('/api/faqs', require('./routes/faqRoutes'));

// Basic route
app.get('/', (req, res) => {
  res.send('FAQ Manager API is running...');
});

module.exports = app;