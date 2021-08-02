var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    name: String,
    productDetails:String,
    additionalDetails:String,
    listPrice:Array,
    minimumOrderPrice:Number,
    handlingFee:Number,
    shippingFee:Number,
    category:Array,
    SKU:String,
    featured:Boolean,
    freeShipping:Boolean,
    reviewAllowed:Boolean,
    needChanges:Boolean,
    active: {
        type: Boolean,
        default: true
    },
    dateAdded: { 
        type: Date, 
        default: Date.now 
    },
    url: String,
    metadata: Array,
    blog:String,
    filePath:String,
    sliderFilePath:Array,
    rating:Number,
});

module.exports = mongoose.model('product', Product);
