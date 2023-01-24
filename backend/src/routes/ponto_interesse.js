const express = require('express');
const router = express.Router();
const pi = require('../controllers/ponto_interesse')

router.get('/', pi.get)
router.get('/:id', pi.get)
router.post('/', pi.post)
router.put('/:id', pi.editar)
router.patch('/:id/agente/:agente_id', pi.mudar_agente)
router.patch('/:id/estado/:novo_estado', pi.mudar_estado)
router.delete('/:id', pi.delete)

// os tipos estao no routes/tipos

router.get('/test_aval', pi.test_aval)
router.get('/test_img', pi.test_img)
router.get('/test_ppi', pi.test_ppi)

module.exports = router;