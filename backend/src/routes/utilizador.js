const express = require('express');
const router = express.Router();
const u = require('../controllers/utilizador')

router.get('/login', u.login)

router.get('/', u.get)
router.get('/:id', u.get)
router.post('/', u.post)
router.put('/:id', u.editar)
router.patch('/:id', u.mudar_tipo)
router.delete('/:id', u.delete)

router.get('/tipos', u.tipos)

module.exports = router;