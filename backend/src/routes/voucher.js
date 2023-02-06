const express = require('express')
const router = express.Router()
const v = require('../controllers/voucher')

router.get('/', v.get)
router.get('/:id', v.get)
router.post('/', v.post)
router.patch('/resgatar/:codigo', v.resgatar)

module.exports = router