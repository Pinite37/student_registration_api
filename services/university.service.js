const University = require('../models/university.model');
const path = require('path');

const createUniversity = async (data, file) => {
    const logoPicture = file ? path.join('uploads', file.filename) : null;
    console.log(logoPicture);
    const university = await University.create({ 
        ...data,
        logo: logoPicture,
        admin_id: data.admin_id
    });
    return university;
}

const getAllUniversities = async () => {
    return await University.findAll();
}


const getUniversityById = async (id) => {
    return await University.findByPk(id);
}

module.exports = {
    createUniversity,
    getAllUniversities,
    getUniversityById
}