var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    username:       String,
    password:       String,
    email:          String,
    fullname:       String,
    image:          String,
    isAdmin:        Boolean,
    numOfHolidays:  Number,
    isValidated:    Boolean,
    group:          { type: Schema.Types.ObjectId, ref: 'Group' },
    holidays: 	    [{ type: Schema.Types.ObjectId, ref: 'Holiday' }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;