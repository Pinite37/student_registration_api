const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');
const Course = require('./course.model');
const Program = require('./program.model');

const CourseProgram = sequelize.define('CourseProgram', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },
    program_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Program,
            key: 'id'
        }
    }
}, {
    timestamps: true,
});

Course.hasMany(CourseProgram, { foreignKey: 'course_id' });
CourseProgram.belongsTo(Course, { foreignKey: 'course_id' });

Program.hasMany(CourseProgram, { foreignKey: 'program_id' });
CourseProgram.belongsTo(Program, { foreignKey: 'program_id' });


module.exports = CourseProgram;