const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController')

router.post('/', reservaController.postReserva)

router.patch('/vagas/:id', reservaController.mudarVagasReserva)
router.patch('/vagas/', reservaController.mudarVagasReserva)

router.patch('/validar/:id', reservaController.validarReserva)
router.patch('/validar/', reservaController.validarReserva)

router.patch('/confirmar/:codigo', reservaController.validarReserva)
router.patch('/confirmar/', reservaController.validarReserva)

router.delete('/:id', reservaController.deleteReserva)
router.delete('/', reservaController.deleteReserva)

router.get('/:id', reservaController.getReserva)
router.get('/', reservaController.getReserva)


module.exports = router;