const courseRegistrationService = require('../services/courseRegistration.service');


const register = async (req, res) => {
    const { student_id, course_id } = req.body;
    try {
        const courseRegistration = await courseRegistrationService.registrationForCourse(student_id, course_id);
        res.status(201).json({ courseRegistration });
    } catch (error) {
        console.log('Error for registration: ', error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {
    register
}