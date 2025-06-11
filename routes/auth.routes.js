const express = require('express');
const { signup, login } = require('../controllers/auth.controller');
const { verifyToken, checkRole } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/signup', signup);

router.post('/signup/admin', verifyToken, checkRole('admin'), signup);

router.post('/login', login);

module.exports = router;
