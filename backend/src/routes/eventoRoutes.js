const express = require('express');
const router = express.Router();

const eventoController = require('../controllers/eventoController')

router.post('/', eventoController.postEvento)

router.get('/', eventoController.getEvento)

router.put('/', eventoController.putEvento)

router.delete('/', eventoController.deleteEvento)

router.get('/tipoEvento', eventoController.getTipoEvento)

module.exports = router;