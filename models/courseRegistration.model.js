const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');
const Student = require('./student.model');
const Course = require('./course.model');

const CourseRegistration = sequelize.define('CourseRegistration', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: 'id'
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    }
}, {
    timestamps: true,
})

Student.hasMany(CourseRegistration, { foreignKey: 'student_id' });
CourseRegistration.belongsTo(Student, { foreignKey: 'student_id' });

Course.hasMany(CourseRegistration, { foreignKey: 'course_id' });
CourseRegistration.belongsTo(Course, { foreignKey: 'course_id' });

module.exports = CourseRegistration;