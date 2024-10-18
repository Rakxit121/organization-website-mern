const Content = require('../models/content');

// Get all content
const getContent = async (req, res) => {
    const content = await Content.find({});
    res.json(content);
};

// Update content (Admin only)
const updateContent = async (req, res) => {
    const { section, content, images } = req.body;
    const updatedContent = await Content.findOneAndUpdate({ section }, { content, images }, { new: true });
    res.json(updatedContent);
};

module.exports = { getContent, updateContent };
