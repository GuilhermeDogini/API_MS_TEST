const express = require('express');
const checkToken = require('../middlewares/checkToken.middleware');
const routesPerson = require('./person.route');
const routesHealth = require('./healthCheck.route');

const router = express.Router();

router.use('/health', routesHealth);
router.use('/person', checkToken, routesPerson);

module.exports = router;
