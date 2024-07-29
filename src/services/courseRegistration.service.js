const CourseRegistration = require('../models/courseRegistration.model');
const Admission = require('../models/admission.model');

const registrationForCourse = async (studentId, courseId) => {
    try {
        const admission = await Admission.findOne({
            where: {
                student_id: studentId
            }
        });

        if (!admission) {
            throw new Error('Admission not found');
        }

        if(admission.status !== 'Approved') {
            throw new Error('Admission not approved');
        }

        const courseRegistration = await CourseRegistration.create({
            student_id: studentId,
            course_id: courseId
        });
        return courseRegistration;
    } catch(error) {
        console.error('Error registering for course: ', error);
        throw error;
    }
}

module.exports = {
    registrationForCourse
}