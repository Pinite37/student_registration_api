const courseServices = require('../services/course.service');


const create = async (req, res) => {
    const { name, description, credits, degree_id,  university_id, program_id } = req.body;

    try {
        const course = await courseServices.createCourse({
            name,
            description,
            credits,
            degree_id,
            university_id,
        });


        await courseServices.associateCourseToProgram(course.id, program_id);


        res.status(201).json(course);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}


module.exports= {
    create,
}