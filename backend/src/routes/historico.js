const express = require('express')
const router = express.Router()
const h = require('../controllers/historico')

router.get('/pontos/:id', h.get_pontos_todos)
router.get('/pontos_interesse/:id', h.get_pontos_interesse)

module.exports = router