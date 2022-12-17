const express = require('express');
const router = express.Router();
const pontoInteresseController = require('../controllers/pontoInteresseController')

router.post('/', pontoInteresseController.postPontoInteresse)
router.get('/', pontoInteresseController.getPontoInteresse)
router.put('/', pontoInteresseController.putPontoInteresse)
router.patch('/', pontoInteresseController.patchPontoInteresse)
router.delete('/', pontoInteresseController.deletePontoInteresse)
router.get('/tipoPontosInteresse', pontoInteresseController.getTipoPontoInteresse)

router.get('/test_aval', pontoInteresseController.test_aval)
router.get('/test_img', pontoInteresseController.test_img)
router.get('/test_ppi', pontoInteresseController.test_ppi)

module.exports = router;