const express = require('express');
const router = express.Router();
const { getFaqs, addFaq } = require('../controllers/faqController');

router.get("/getfaqs",getFaqs);
router.post("/postfaqs",postFaqs);

module.exports = router;