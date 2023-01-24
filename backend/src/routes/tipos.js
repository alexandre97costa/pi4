const express = require('express');
const router = express.Router();
const pi = require('../controllers/ponto_interesse')
const e = require('../controllers/evento')

router.get('/pi', pi.tipos)
router.get('/evento', e.tipos)

module.exports = router;