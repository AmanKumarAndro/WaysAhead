const express = require('express');
const { getUsers, getUserDetails } = require('../controllers/userController.js');

const router = express.Router();

router.get('/', getUsers);
router.get('/me', getUserDetails);

module.exports = router; 