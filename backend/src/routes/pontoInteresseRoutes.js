const express = require('express');
const router = express.Router();
const pontoInteresseController = require('../controllers/pontoInteresseController')

router.get('/', pontoInteresseController.listPontosInteresse)

module.exports = router;