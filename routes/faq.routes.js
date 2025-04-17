const express = require('express');
const router = express.Router();
const { getFaqs, addFaq } = require('../controllers/faq.controller.js');

router.get("/getfaqs",getFaqs); //Route For Getting The FAQs
router.post("/postfaq",addFaq); //Route For Posting The FAQs

module.exports = router;