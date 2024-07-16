const {validationResult} = require('express-validator');

const validate = (schema) => (req, res, next) => {
    try {

        console.log(req.body)

        if(schema) {
            schema.parse(req.body)
        }else {
            const errors = validationResult(req);
            console.log(errors)
                if (!errors.isEmpty()) {
                   return res.status(400).json({ errors: errors.array() });
                }
        }

        next()
    } catch (error) {
        res.status(400).json({ error: error.errors })
    }
}

module.exports = {
    validate
}


// const validate = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     next();
// };