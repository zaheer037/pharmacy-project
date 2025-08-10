const express = require('express');
const router = express.Router();
const { auth, login, register } = require('../controllers/authController');

// Single endpoint for both login and registration (legacy)
router.post('/auth', auth);

// Separate endpoints for login and registration
router.post('/login', login);
router.post('/register', register);

module.exports = router;
