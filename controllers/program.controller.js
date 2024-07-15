const programService = require("../services/program.service");

const addProgram = async (req, res) => {
    const { name, description, university_id, degree_id } = req.body;
    try {
        const program = await programService.createProgram({ name, description, university_id, degree_id });
        res.status(201).json(program);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    addProgram
}; 