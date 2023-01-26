const express = require('express')
const router = express.Router()
const h = require('../controllers/historico_pontos')

router.get('/:id', h.get)

module.exports = router