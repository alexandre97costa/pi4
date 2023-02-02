const express = require('express');
const router = express.Router();
const u = require('../controllers/utilizador')

router.post('/login', u.login)

router.get('/', u.get)
router.get('/:id', u.get)
router.post('/', u.post)
router.put('/:id', u.editar)
router.patch('/:id/tipo', u.mudar_tipo)
router.patch('/:id/password', u.mudar_pw)
router.delete('/:id', u.delete)

// tipos estão no route/tipos

module.exports = router;