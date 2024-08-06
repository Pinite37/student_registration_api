const User = require('../models/user.model')
const Student = require('../models/student.model')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../utils/jwt')
const moment = require('moment')
const fs = require('fs')

const path = require('path')


const createStudentProfile = async (data, file) => {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    const formattedDate = moment(data.birthdate, 'DD/MM/YYYY').toISOString();
    const user = await User.create({
        email: data.email,
        password: hashedPassword,
        role: 'student'
    })
    const profilePicture = file ? path.join('uploads', file.filename) : null;
    const student = await Student.create({
        user_id: user.id,
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        address: data.address,
        nationality: data.nationality,
        birthdate: formattedDate,
        sex: data.sex,
        profile_picture: profilePicture
    });


    return { student };
}

const getStudentsById = async (id) => {
    const student = await Student.findByPk(id)
    return student
}

const upadateStudentProfile = async (id, data, file) => {
    const student = await Student.findByPk(id)
    if (file) {
        if (student.profile_picture) {
            fs.unlinkSync(student.profile_picture);
        }
        student.profile_picture = path.join('uploads', file.filename);
    }
    student.first_name = data.first_name
    student.last_name = data.last_name
    student.phone_number = data.phone_number
    student.address = data.address
    student.nationality = data.nationality
    student.birthdate = data.birthdate
    student.sex = data.sex
    await student.save()
    return student
}

const deleteStudent = async (id) => {
    const student = await Student.destroy({
        where: {
            id: id
        }
    })
    return student
}

module.exports = {
    createStudentProfile,
    getStudentsById,
    upadateStudentProfile,
    deleteStudent
}