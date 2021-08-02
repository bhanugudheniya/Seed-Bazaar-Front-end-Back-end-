var mongoose=require('mongoose');
var review=mongoose.Schema({
    productId:String,
    customerId:String,
    rating:Number,
    title:String,
    review:String,
    active:{
        type:Boolean,
        default:false
    },
    customerName:String
})
module.exports=mongoose.model('review',review);