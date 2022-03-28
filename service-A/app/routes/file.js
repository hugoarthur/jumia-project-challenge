const express = require('express');
const router = express.Router();

const controller = require('../controllers/file');

router.route('/upload').post(controller.uploadCSV);

module.exports = router;