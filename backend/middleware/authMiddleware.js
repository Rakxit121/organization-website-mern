const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const protectAdmin = async (req, res, next) => {
    let token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.admin = await Admin.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'No token' });
    }
};

module.exports = { protectAdmin };
