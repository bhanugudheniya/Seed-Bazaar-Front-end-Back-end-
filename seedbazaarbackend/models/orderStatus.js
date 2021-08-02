var mongoose=require('mongoose');
var orderStatus=mongoose.Schema({
    statusName:String
})
module.exports=mongoose.model('OrderStatus',orderStatus);