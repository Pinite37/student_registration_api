const express = require('express');
const { createStudent, getStudentsById, updateStudentProfile, deleteStudent } = require('../controllers/student.controller');
const { upload } = require('../middlewares/multer.middleware');
const { check } = require('express-validator');
const { validate } = require('../middlewares/validations.middleware');
const { authenticate } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', [
    upload.single('profile_picture'),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    check('first_name', 'First name is required').notEmpty(), 
    check('last_name', 'Last name is required').notEmpty(), 
    check('phone_number', 'Phone number is required').notEmpty(), 
    check('address', 'Address is required').notEmpty(), 
    check('nationality', 'Nationality is required').notEmpty(), 
    check('birthdate', 'Birthdate must be in DD/MM/YYYY format').isDate({ format: 'DD/MM/YYYY' }), 
    check('sex', 'Sex is required').isIn(['male', 'female']), 
    validate, 
    createStudent 
]);


router.post('/profile', [
    upload.single('profile_picture'),
    validate,
    updateStudentProfile
]);


router.get('/:id', authenticate, getStudentsById);

router.delete('/:id', authenticate, deleteStudent);


module.exports = router;