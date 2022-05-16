const express = require('express');

const User = require('../controllers/user.controller');

const router = express.Router();

router.use('/:id', User.findOne);

module.exports = router;
