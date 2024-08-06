
//const { getAll } = require('../controllers/universitys.controller');
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

const getAllCourses = async () => {
    try {
        const courses = await Course.findAll();
        return courses;
    } catch (error) {
        console.error('Error getting all courses', error);
        throw error;
    }
}

const getCourseById = async (courseId) => {
    try {
        const course = await Course.findByPk(courseId);
        return course;
    } catch (error) {
        console.error('Error getting course by id', error);
        throw error;
    }
}


const updateCourse = async (courseId, courseData) => {
    try {
        const course = await Course.update(courseData, {
            where: {
                id: courseId
            }
        });
        return course;
    } catch (error) {
        console.error('Error updating course', error);
        throw error;
    }
}


const deleteCourse = async (courseId) => {
    try {
        const course = await Course.destroy({
            where: {
                id: courseId
            }
        });
        return course;
    } catch (error) {
        console.error('Error deleting course', error);
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