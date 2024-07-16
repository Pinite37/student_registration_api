const Program = require('../models/program.model');

const createProgram = async (programData) => {
    try {
        const program = await Program.create(programData);
        return program;
    } catch (error) {
        throw new Error(error);
    }
};

const updateProgram = async (programId, programData) => {
    try {
        const program = await Program.findByIdAndUpdate(programId, programData, { new: true });
        return program;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteProgram = async (programId) => {
    try {
        const program = await Program.findByIdAndDelete(programId);
        return program;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createProgram,
    updateProgram,
    deleteProgram
}