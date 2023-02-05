const express = require('express');
const router = express.Router();
const l = require('../controllers/local')

router.get('/distrito', l.distrito)
router.get('/municipio', l.municipio)
router.get('/freguesia', l.freguesia)


module.exports = router;