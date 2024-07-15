const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');
const Student = require('./student.model');
const Degree = require('./degree.model');
const University = require('./university.model');


const Admission = sequelize.define('Admission', {
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
    university_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: University,
            key: 'id'
        }
    },
    cover_letter: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    latest_graduation_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    average_score: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    degree_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Degree,
            key: 'id'
        }
    },
    id_card: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    status: {
        type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
        defaultValue: 'Pending',
    }
}, {
    timestamps: true,
})

Student.hasMany(Admission, { foreignKey: 'student_id' });
Admission.belongsTo(Student, { foreignKey: 'student_id' });


University.hasMany(Admission, { foreignKey: 'university_id' });
Admission.belongsTo(University, { foreignKey: 'university_id' });

Degree.hasMany(Admission, { foreignKey: 'degree_id' });
Admission.belongsTo(Degree, { foreignKey: 'degree_id' });

module.exports = Admission;