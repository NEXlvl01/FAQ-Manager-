const express = require('express');
const router = express.Router();
const { getFaqs, addFaq } = require('../controllers/faq.controller.js');

router.get("/getfaqs",getFaqs);
router.post("/postfaq",addFaq);

module.exports = router;