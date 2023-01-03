const express = require('express');
const router = express.Router();
const scanControllers = require('../controllers/scanControllers')

// para quando se faz scan fora da app
router.get('/:codigo', scanControllers.anonymousScan)
router.get('/', scanControllers.anonymousScan)

// para quando o scan é feito dentro da app (e com login)
router.post('/:codigo', scanControllers.visitanteScan)

module.exports = router;