const express = require('express');

const Health = require('../controllers/healthCheck.controller');

const router = express.Router();

router.use('/check', Health.check);

module.exports = router;
