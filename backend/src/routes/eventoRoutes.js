const express = require('express');
const router = express.Router();

const eventoController = require('../controllers/eventoController')

router.get('/', eventoController.get)
router.get('/:id', eventoController.get)
router.post('/', eventoController.post)
router.put('/:id', eventoController.editar)
router.delete('/:id', eventoController.delete)
router.get('/tipos', eventoController.tipos)

module.exports = router;