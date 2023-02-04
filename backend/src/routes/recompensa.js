const express = require('express');
const router = express.Router();
const r = require('../controllers/recompensa')

router.get('/', r.get)
router.get('/:id', r.get)
router.post('/', r.post)
router.patch('/:id', r.validar)
router.put('/:id', r.editar)
router.delete('/:id', r.delete)

module.exports = router;