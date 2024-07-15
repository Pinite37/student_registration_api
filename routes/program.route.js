const express = require('express');
const router = express.Router();
const { addProgram } = require('../controllers/program.controller');
const { authenticate, isAdmin } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validations.middleware');

router.post('/', authenticate, isAdmin, addProgram);



module.exports = router;