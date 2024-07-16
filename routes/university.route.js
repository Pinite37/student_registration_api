const express = require('express');
const { create, getAll, getById, deleteUniversity  } = require('../controllers/universitys.controller');
const { upload } = require('../middlewares/multer.middleware');
const { check } = require('express-validator');
const { validate  } = require('../middlewares/validations.middleware');
const { authenticate, isAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', [
    authenticate,
    upload.single('logo'),
    check('name', 'Name is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('country', 'Country is required').not().isEmpty(),
    validate(),
    create
]);

router.get('/', authenticate, getAll);
router.get('/:id', authenticate, getById);
router.delete('/:id', authenticate, isAdmin, deleteUniversity);


module.exports = router;