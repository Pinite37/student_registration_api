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
    console.log(formattedDate)
    const user = await User.create({
        email: data.email,
        password: hashedPassword,
        role: 'student'
    })
    const profilePicture = file ? path.join('uploads', file.filename) : null;
    console.log(profilePicture)
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

    const token = generateToken({ id: user._id, role: user.role })

    return { student, token };
}

const getStudentsById = async (id) => {
    const student = await Student.findByPk(id)
    return student
}

const upadateStudentProfile = async (data, file) => {
    const formattedDate = moment(data.birthdate, 'DD/MM/YYYY').toISOString();
    const profilePicture = file ? path.join('uploads', file.filename) : null;
    const student = await Student.update({
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        address: data.address,
        nationality: data.nationality,
        birthdate: formattedDate,
        sex: data.sex,
        profile_picture: profilePicture
    }, {
        where: {
            id: data.id
        }
    })
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