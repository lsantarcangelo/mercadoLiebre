const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js')

//Rutas
router.get('/', mainController.home)

router.get('/register.html', mainController.register)

router.get('/login.html', mainController.login)


module.exports = router;