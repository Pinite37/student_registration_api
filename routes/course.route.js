const express = require('express');
const { create } = require('../controllers/course.controller')
const { authenticate, isAdmin } = require('../middlewares/auth.middleware')
const { validate } = require('../middlewares/validations.middleware');

const router = express.Router();

router.post('/', authenticate, isAdmin, validate, create);


module.exports = router;