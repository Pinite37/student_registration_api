const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');
const Degree = require('./degree.model');
const University = require('./university.model');

const Program = sequelize.define('Program', {
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
    degree_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Degree,
            key: 'id'
        },
    },
}, {
    timestamps: true,
});

University.hasMany(Program, { foreignKey: 'university_id' });
Program.belongsTo(University, { foreignKey: 'university_id' });

Degree.hasMany(Program, { foreignKey: 'degree_id' });
Program.belongsTo(Degree, { foreignKey: 'degree_id' });

module.exports = Program;