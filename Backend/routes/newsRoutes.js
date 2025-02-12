const express = require('express');
const { createNews, getNews } = require('../controllers/newsController.js');

const router = express.Router();

router.post('/', createNews);
router.get('/', getNews);

module.exports = router; 