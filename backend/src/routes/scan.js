const express = require('express');
const router = express.Router();
const scanControllers = require('../controllers/scan')

// * para quando se faz scan fora da app
router.get('/i/:codigo', scanControllers.anonymousScan)
router.get('/e/:codigo', scanControllers.anonymousScan)
router.get('/', scanControllers.anonymousScan)

// * para quando o scan é feito dentro da app (e com login)
router.post('/i/:codigo', scanControllers.scan_ponto_interesse) // i = interesse
router.post('/e/:codigo', scanControllers.scan_evento)          // e = evento

module.exports = router;