var mongoose=require('mongoose');

var newsletter=mongoose.Schema({
    email:String
});

module.exports = mongoose.model('Newsletter', newsletter);