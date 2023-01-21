const express = require('express');
const router = express.Router();
const devController = require('../controllers/dev')

router.post('/users', devController.create_users)
router.get('/login/:tipo', devController.login_tipo)


module.exports = router;