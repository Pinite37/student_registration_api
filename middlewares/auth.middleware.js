const jwt = require('jsonwebtoken');
const User = require('../models/user.model');


const authenticate = async (req, res, next) => {
    const authReader = req.header('Authorization');
    if (!authReader) {
        return res.status(401).send({ error: 'Impossible' });
    }
    const token = authReader.replace('Bearer ', '');
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ where: { id: decoded.id } });
        if (!user) {
            throw new Error('User not found');
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Unauthorized request!' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send({ error: 'Forbidden' });
    }
    next();
};


module.exports = {
    authenticate,
    isAdmin
}