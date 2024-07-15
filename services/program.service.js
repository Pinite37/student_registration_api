const Program = require('../models/program.model');

const createProgram = async (programData) => {
    try {
        const program = await Program.create(programData);
        return program;
    } catch (error) {
        throw new Error(error);
    }
};
module.exports = {
    createProgram
}