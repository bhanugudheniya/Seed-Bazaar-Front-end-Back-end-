var mongoose=require('mongoose');

var Homepage=mongoose.Schema({
    title:String,
    image:String,
    url:String,
    urlFlag:Boolean,
    activeFlag:{
        type:Boolean,
        default:true
    },
    position:Number
})

module.exports = mongoose.model('homepage', Homepage);