const express = require('express');
const router = express.Router();
const r = require('../controllers/reserva')

router.get('/', r.get)
router.get('/:id', r.get)
router.post('/', r.post)

router.patch('/vagas/', r.mudar_vagas)
router.patch('/vagas/:id', r.mudar_vagas)

router.patch('/validar/', r.validar)
router.patch('/validar/:id', r.validar)

router.patch('/confirmar/', r.confirmar)
router.patch('/confirmar/:codigo', r.confirmar)

router.delete('/', r.delete)
router.delete('/:id', r.delete)

module.exports = router;