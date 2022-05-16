const express = require('express');

const Auth = require('../controllers/auth.controller');

const router = express.Router();

router.use('/register', Auth.register);
router.use('/login', Auth.login);
router.use('/validation', Auth.tokenValidation);

module.exports = router;
