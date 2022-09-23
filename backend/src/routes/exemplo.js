const express = require('express');
const router = express.Router();
const exemploController = require('../controllers/exemploController')

router.get('/', exemploController.enviar)

module.exports = router;