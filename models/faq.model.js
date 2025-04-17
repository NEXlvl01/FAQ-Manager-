const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema({ //Schema For FAQ
  question: {
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  },
},{timestamps : true});

module.exports = mongoose.model('Faq', FaqSchema);