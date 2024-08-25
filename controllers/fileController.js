// controllers/fileController.js
exports.analyseFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
    });
};
