const Admission = require('../models/admission.model');

const createAdmission = async (admissionData) => {
    try {
        const admission = await Admission.create(admissionData);
        return admission;
    } catch(error) {
        console.error('Error creating admission', error);
        throw error;
    }
}

const updateAdmissionStatus = async (admissionId, status) => {
    try {
        const admission = await Admission.findByPk(admissionId);
        if (!admission) {
            throw new Error('Admission not found');
        }
        admission.status = status;
        await admission.save();
        return admission;
    } catch(error) {
        console.error('Error updating admission status: ', error);
        throw error;
    }
}

module.exports = {
    createAdmission,
    updateAdmissionStatus
}