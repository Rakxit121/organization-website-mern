const express = require('express');
const { getContent, updateContent } = require('../controllers/contentController');
const { protectAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getContent).put(protectAdmin, updateContent);

module.exports = router;
