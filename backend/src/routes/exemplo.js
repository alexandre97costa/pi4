const express = require('express');
const router = express.Router();
const exemploController = require('../controllers/exemploController')

router.get('/', exemploController.list)

module.exports = router;