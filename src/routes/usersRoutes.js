const express = require('express');
const userController = require('../controllers/usersController');

const router = express.Router();

router.post('/register', userController.registerController)
router.post('/login', userController.loginController)
router.get('/preferences')
router.put('/preferences')
router.get('/news')

module.exports = router;