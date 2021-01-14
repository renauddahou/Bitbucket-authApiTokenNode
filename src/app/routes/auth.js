const { Router } = require('express');
const AuthController = require('../controller/AuthController');
const router = Router();

router.post('/getToken', AuthController.getToken);
router.get('/validateToken', AuthController.validateToken);

module.exports = router;