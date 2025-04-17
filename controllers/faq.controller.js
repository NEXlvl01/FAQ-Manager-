const Faq = require('../models/faq.model.js');

getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find({});
    
    res.status(200).json({
      success: true,
      count: faqs.length,
      data: faqs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};


addFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;
    
    if (!question || !answer) {
      return res.status(400).json({
        success: false,
        error: 'Please provide both question and answer'
      });
    }
    
    const faq = await Faq.create(req.body);
    
    res.status(201).json({
      success: true,
      data: faq
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

module.exports = {getFaqs,addFaq};