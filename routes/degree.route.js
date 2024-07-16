const express = require("express");

const router = express.Router();

const { addDegree, getDegree, getDegreeById, deleteDegree } = require('../controllers/degree.controller');
const { authenticate, isAdmin } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validations.middleware');

router.post('/', authenticate, isAdmin, validate(), addDegree);
router.get('/', authenticate, getDegree);
router.get('/:id', authenticate, getDegreeById);
router.delete('/:id', authenticate, isAdmin, deleteDegree);

module.exports = router