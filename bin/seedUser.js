const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 25;

require('dotenv').config();

mongoose.connect(process.env.DB_HOST);

const User = require('../models/user');

var salt = bcrypt.genSaltSync(saltRounds);
var passHash = bcrypt.hashSync(process.env.password, salt);

var masterUser = {
	username:       process.env.username,
    password:       passHash,
    email:          process.env.email,
    fullname:       process.env.fullname,
    image:          'upload/user.jpg',
    isAdmin:        true,
    numOfHolidays:  24,
    isValidated:    true,
};

User.create(masterUser, (err, docs) => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});