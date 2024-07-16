const express = require('express');
const router = express.Router();
const { addProgram, updateProgram, deleteProgram } = require('../controllers/program.controller');
const { authenticate, isAdmin } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validations.middleware');

router.post('/', authenticate, isAdmin, addProgram);
router.post('/:id', authenticate, isAdmin, updateProgram);
router.delete('/:id', authenticate, isAdmin, deleteProgram);


module.exports = router;