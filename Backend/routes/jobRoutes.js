const express = require('express');
const { createJobPosting, getJobPostings } = require('../controllers/jobController.js');

const router = express.Router();

router.post('/', createJobPosting);
router.get('/', getJobPostings);

module.exports = router; 