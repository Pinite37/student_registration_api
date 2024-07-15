const express = require('express');
const dotenv = require('dotenv');
//const cors = require('cors');
const { sequelize } = require('./utils/db');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/student.route');
const universityRoutes = require('./routes/university.route');
const degreeRoutes = require('./routes/degree.route');
const programRoutes = require('./routes/program.route');
const courseRoutes = require('./routes/course.route');
const admissionRoutes = require('./routes/admissions.route');
const courseRegistrationRoutes = require('./routes/courseRegistration.route');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/student', userRoutes);
app.use('/api/university', universityRoutes);
app.use('/api/degree', degreeRoutes);
app.use('/api/program', programRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/admission', admissionRoutes);
app.use('/api/registration', courseRegistrationRoutes);

//app.use(cors());

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log('PostreSQL connected');
    });
}).catch(err => {
    console.log(err);
});