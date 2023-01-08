const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController')

router.post('/', reservaController.postReserva)
router.get('/', reservaController.getReserva)
router.get('/test', reservaController.test_reserva)

module.exports = router;