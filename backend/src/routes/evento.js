const express = require('express');
const router = express.Router();

const eventoController = require('../controllers/evento')

router.get('/', eventoController.get)
router.get('/:id', eventoController.get)
router.post('/', eventoController.post)
router.put('/:id', eventoController.editar)
router.delete('/:id', eventoController.delete)

// tipos estão no route/tipos

module.exports = router;