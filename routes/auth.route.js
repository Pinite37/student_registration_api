const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const { validate } = require('../middlewares/validations.middleware');
const { check } = require('express-validator');

const router = express.Router();


router.post('/register', [
    check('email', 'Email is required').isEmail(),
    check('password').isLength({ min: 6 }),
    check('role').isIn(['student', 'admin']),
    validate
], register);

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password').exists(),
    validate()
], login);

module.exports = router;