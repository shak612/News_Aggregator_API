const express = require('express');
const userController = require('../controllers/usersController');
const preferencesController = require('../controllers/preferencesController');
const { verifyToken } = require('../middlewares/verifyToken');
const newsController = require('../controllers/newsController');

const router = express.Router();

router.post('/register', userController.registerController)
router.get('/login', userController.loginController)
router.get('/preferences', verifyToken, preferencesController.getPreferencesController)
router.put('/preferences', verifyToken, preferencesController.putPreferencesController)
router.get('/news', verifyToken, newsController.getNewsController)

module.exports = router;