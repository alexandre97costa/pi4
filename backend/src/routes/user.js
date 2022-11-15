const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')

router.post('/', userController.create)
router.post('/login', userController.login)
router.get('/all', userController.list)

module.exports = router;