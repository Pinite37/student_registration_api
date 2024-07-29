const express = require("express");

const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/student.route");
const universityRoutes = require("./routes/university.route");
const degreeRoutes = require("./routes/degree.route");
const programRoutes = require("./routes/program.route");
const courseRoutes = require("./routes/course.route");
const admissionRoutes = require("./routes/admissions.route");
const courseRegistrationRoutes = require("./routes/courseRegistration.route");

const router = express();

router.use("auth", authRoutes);
router.use("student", userRoutes);
router.use("university", universityRoutes);
router.use("degree", degreeRoutes);
router.use("program", programRoutes);
router.use("course", courseRoutes);
router.use("admission", admissionRoutes);
router.use("registration", courseRegistrationRoutes);

module.exports = router;
