var mongoose=require('mongoose');
var order=mongoose.Schema({
    customerId:String,
    billingInfo:Object,
    orderStatus:String,
    orderStatusRecord:Array,
    cost:Number,
    cart:Array,
    recieveFlag:Boolean, 
    orderNotes:Array,
    paymentFlag:{
        type:Boolean,
        default:false
    },
    paymentId:String,
    dateAdded: { 
        type: Date, 
        default: Date.now() 
    },
})
module.exports=mongoose.model('Order',order);