const degreeServices = require('../services/degree.service')



const addDegree = async (req, res) => {
   try{ 
    const { name } = req.body;
    const degree = await degreeServices.createDegree({ name });
    res.status(201).json(degree);
   } catch (error) {
    res.status(400).json({ error: error.message });
   }
}

const getDegree = async (req, res) => {
    try{
        const degree = await degreeServices.getAllDegrees();
        res.status(200).json(degree);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getDegreeById = async (req, res) => {
    try{
        const degree = await degreeServices.getDegreeById(req.params.id);
        res.status(200).json(degree);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteDegree = async (req, res) => {
    try {
        const deletedDegree = await degreeServices.deleteDegree(req.params.id);
        res.status(200).json({ message: "Degree deleted successfully", deletedDegree });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    addDegree,
    getDegree,
    getDegreeById,
    deleteDegree
}