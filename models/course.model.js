const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');
const University = require('./university.model');


const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description : {
        type: DataTypes.TEXT,
    },
    university_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: University,
            key: 'id'
        }
    },
}, {
    timestamps: true,
});

University.hasMany(Course, { foreignKey: 'university_id' });
Course.belongsTo(University, { foreignKey: 'university_id' });

module.exports = Course;