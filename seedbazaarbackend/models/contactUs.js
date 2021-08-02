var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactUs = Schema({
    name: String,
    phone:String,
    email:String,
    subject:String,
    message:String

});

module.exports = mongoose.model('contact', ContactUs);
