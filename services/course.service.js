
const Course = require('../models/course.model')
const CourseProgram = require('../models/couseProgram.model')


const createCourse = async (courseData) => {
    try {
        const course = await Course.create(courseData);
        return course;
    } catch (error) {
        console.error('Error creating course', error);
        throw error;
    }
}


const associateCourseToProgram = async (courseId, programId) => {
    try {
        await CourseProgram.create({
            course_id: courseId,
            program_id: programId,
        })
    } catch(error) {
        console.error('Error asscociating course to program: ', error);
        throw error;
    }
}

module.exports = {
    createCourse,
    associateCourseToProgram,
}