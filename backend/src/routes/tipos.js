const express = require('express');
const router = express.Router();
const pi = require('../controllers/ponto_interesse')
const e = require('../controllers/evento')
const u = require('../controllers/utilizador')

router.get('/pi', pi.tipos)
router.get('/evento', e.tipos)
router.get('/utilizador', u.tipos)

module.exports = router;