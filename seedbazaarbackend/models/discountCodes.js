var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var DiscountCode= new Schema({

    name: String,
    code : String,
    type:String,
    ///////value 1 is percentage off
    ///////value 2 is amount off
    ///////value 3 is set price
    value:String,
    productId:String,
    active: {
        type: Boolean,
        default: true
    },
    validFrom: { 
        type: Date, 
        default: Date.now() 
    },
    validTill:{
        type:Date,
    }
 })

module.exports = mongoose.model('discountCode', DiscountCode);