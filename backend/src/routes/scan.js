const express = require('express');
const router = express.Router();
const s = require('../controllers/scan')

// * para quando se faz scan fora da app
router.get('/i/:codigo', s.anonymousScan)
router.get('/e/:codigo', s.anonymousScan)
router.get('/', s.anonymousScan)
router.get('/historico', s.historico)

// * para quando o scan é feito dentro da app (e com login)
router.post('/i/:codigo', s.scan_ponto_interesse) // i = interesse
router.post('/e/:codigo', s.scan_evento)          // e = evento

module.exports = router;