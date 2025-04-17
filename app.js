const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const faqRouter = require("./routes/faq.routes.js")
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/faq",faqRouter);


app.get('/', (req, res) => {
  res.send('FAQ Manager API is running...');
});

module.exports = app;