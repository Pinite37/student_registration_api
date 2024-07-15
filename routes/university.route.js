const express = require('express');
const { create, getAll, getById,  } = require('../controllers/universitys.controller');
const { upload } = require('../middlewares/multer.middleware');
const { check } = require('express-validator');
const { validate  } = require('../middlewares/validations.middleware');
const { authenticate, isAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', [
    authenticate,
    isAdmin,
    upload.single('logo'),
    check('name', 'Name is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('country', 'Country is required').not().isEmpty(),
    validate,
    create
]);

router.get('/', authenticate, isAdmin, getAll);
router.get('/:id', authenticate, isAdmin, getById);


module.exports = router;