const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');


const Degree = sequelize.define('Degree', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.ENUM('Bachelors', 'Masters', 'PhD'),
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Degree;