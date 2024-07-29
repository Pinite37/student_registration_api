const Degree = require("../models/degree.model");

const createDegree = ({ name }) => {
    return Degree.create({ name });
};

const getAllDegrees = async () => {
    return await Degree.findAll();
};

const getDegreeById = async (id) => {
    return await Degree.findByPk(id);
};

const deleteDegree = async (id) => {
    return await Degree.destroy({ where: { id } });
};


module.exports = {
    createDegree,
    getAllDegrees,
    getDegreeById,
    deleteDegree
};