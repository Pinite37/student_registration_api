const studentService = require('../services/student.service');

const createStudent = async (req, res) => {
    console.log(req.file);
    try {
        const student = await studentService.createStudentProfile(req.body, req.file);
        res.status(201).json(student);
    } catch (error) {
        //console.log(error);

        res.status(400).json({ message: error.message });
    }
};

const getStudentsById = async (req, res) => {
    try {
        const student = await studentService.getStudentsById(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateStudentProfile = async (req, res) => {
    try {
        const student = await studentService.upadateStudentProfile(req.body, req.file);
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const deleteStudent = async (req, res) => {
    try {
        const student = await studentService.deleteStudent(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



module.exports = {
    createStudent,
    getStudentsById,
    updateStudentProfile,
    deleteStudent
};