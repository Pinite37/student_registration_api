const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');
const User = require('./user.model');

const Student = sequelize.define('Student', {
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sex : {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false,
    },
    profile_picture: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
});

User.hasOne(Student, { foreignKey: 'user_id' });
Student.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Student;