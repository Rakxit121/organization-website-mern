const express = require('express');
const { loginAdmin, updatePassword } = require('../controllers/adminController');
const { protectAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/login', loginAdmin);
router.put('/password', protectAdmin, updatePassword);

module.exports = router;
