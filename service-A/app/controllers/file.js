const service = require('../services/file');

const uploadCSV = async (req, res) => {
    if (req.files && req.files.file) {
        try {
            const file = req.files.file;
        
            if ((file.mimetype !== 'text/csv' && file.mimetype !== 'application/vnd.ms-excel') && file.name.split('.').pop() !== 'csv') {
                res.status(400).send({ status: 400, message: 'Invalid file' });
            }
        
            const result = service.processUploadedFile(file);
            res.status(201).send({ status: 201, message: 'File is being loaded...' });
        } catch (e) {
            res.status(500).send({ status: 500, message: e.message });
        }
    } else {
        res.status(400).send({ status: 400, message: 'File is required' });
    }
}

module.exports = {
    uploadCSV
}