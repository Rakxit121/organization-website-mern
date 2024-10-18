const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

// Admin login
const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

// Admin password update
const updatePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.admin.id);

    if (admin && (await admin.matchPassword(currentPassword))) {
        admin.password = newPassword;
        await admin.save();
        res.json({ message: 'Password updated successfully' });
    } else {
        res.status(401).json({ message: 'Current password is incorrect' });
    }
};

module.exports = { loginAdmin, updatePassword };
