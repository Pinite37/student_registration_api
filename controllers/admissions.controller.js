const admissionService = require('../services/admission.service');
const path = require('path');


const create = async (req, res) => {
    const { student_id, university_id, cover_letter, latest_graduation_year, average_score, degree_id } = req.body;

    const id_card = req.file ? req.file.path : null;

    try {
        const admission = await admissionService.createAdmission({
            student_id,
            university_id,
            cover_letter,
            latest_graduation_year,
            average_score,
            degree_id,
            id_card
        });

        res.status(201).json(admission);

    } catch(error) {
        console.error('Error creating admission', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const updateStatus = async (req, res) => {
    const { admissionId } = req.params;
    const { status } = req.body;


    if(!['Approved', 'Rejected'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }

    try {
        const admission = await admissionService.updateAdmissionStatus(admissionId, status);
        res.status(200).json(admission);
    } catch(error) {
        console.error('Error updating admission status', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    create,
    updateStatus
}