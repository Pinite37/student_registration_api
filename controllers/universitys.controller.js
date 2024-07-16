const universityService = require('../services/university.service');

const create = async (req, res) => {
    console.log(req.body);
    try {
        const universityData = { ...req.body, admin_id: req.user.id };
        const university = await universityService.createUniversity(universityData, req.file);
        console.log(university);
        res.status(201).json(university);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};


const getAll = async (req, res) => {
    try {
        const universities = await universityService.getAllUniversities();
        res.status(200).json(universities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getById = async (req, res) => {
    try {
        const university = await universityService.getUniversityById(req.params.id);
        if (!university) {
            return res.status(404).json({ message: 'University not found' });
        }
        res.status(200).json(university);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUniversity = async (req, res) => {
    try {
        const university = await universityService.deleteUniversity(req.params.id);
        if (!university) {
            return res.status(404).json({ message: 'University not found' });
        }
        res.status(200).json({ message: 'University deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    create,
    getAll,
    getById,
    deleteUniversity
};