const express = require('express');
const router = express.Router();
const { auth } = require('../controllers/authController');

// Single endpoint for both login and registration
router.post('/auth', auth);

module.exports = router;
