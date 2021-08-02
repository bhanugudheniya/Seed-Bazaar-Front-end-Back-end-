
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessContactUs = Schema({
    firstName:String,
    lastName:String,
    phone:String,
    email:String,
    subject:String,
    businessName:String,
    businessType:String,
    message:String,

});

module.exports = mongoose.model('businessContactUs', businessContactUs);
