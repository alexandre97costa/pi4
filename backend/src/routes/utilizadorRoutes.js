const express = require('express');
const router = express.Router();
const utilizadorController = require('../controllers/utilizadorController.js')

router.post('/', utilizadorController.create)
router.get('/login', utilizadorController.login)
router.post('/bulk', utilizadorController.create_in_bulk)
router.get('/all', utilizadorController.list)
router.get('/tipos', utilizadorController.list_tipos)
router.put('/:id', utilizadorController.update)
router.patch('/:id', utilizadorController.change_tipo_utilizador)

module.exports = router;