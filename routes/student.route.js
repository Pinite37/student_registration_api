const express = require('express');
const { createStudent, getStudentsById, upadateStudentProfile, deleteStudent } = require('../controllers/student.controller');
const { upload } = require('../middlewares/multer.middleware');
const { check } = require('express-validator');
const { validate } = require('../middlewares/validations.middleware');
const { userSchema } = require('../middlewares/schemaZod');
const { authenticate, isAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', [
    upload.single('profile_picture'),
    validate(userSchema),    
    createStudent 
]);



router.post('/:id/profile', [
    upload.single('profile_picture'),
    authenticate,
    check('first_name', 'First name is required').notEmpty(),
    validate(userSchema),
    upadateStudentProfile
])

router.get('/:id', authenticate, getStudentsById);

router.delete('/:id', authenticate, deleteStudent);


module.exports = router;