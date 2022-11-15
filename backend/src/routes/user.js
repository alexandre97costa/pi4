const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')

router.get('/login', userController.login)
router.get('/all', userController.all)

module.exports = router;