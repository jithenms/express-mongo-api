var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    firstName: String,
    lastName: String,
    email: String,
    birthday: Date
});

module.exports = mongoose.model('User', userSchema);