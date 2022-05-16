const express = require('express');
const checkToken = require('../middlewares/checkToken.middleware');
const routesUser = require('./user.route');
const routesAuth = require('./auth.route');
const routesHealth = require('./healthCheck.route');

const router = express.Router();

router.use('/health', routesHealth);
router.use('/user', checkToken, routesUser);
router.use('/auth', routesAuth);

module.exports = router;
