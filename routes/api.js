var express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const sendmail = require('sendmail')({ silent: true });

const router = express.Router();

router.post('/login', function (req, res, next) {
    console.log(req.body);
});

module.exports = router;