const express = require('express');
const { register } = require('../controllers/courseRegistration.controller');
const { authenticate, isAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authenticate, register);

module.exports = router