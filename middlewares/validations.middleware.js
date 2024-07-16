const validate = (schema) => (req, res, next) => {
    try {

        if(schema ) {
            schema.parse(req.body)
        }else {
            
        }

        next()
    } catch (error) {
        res.status(400).json({ error: error.errors })
    }
}

module.exports = {
    validate
}