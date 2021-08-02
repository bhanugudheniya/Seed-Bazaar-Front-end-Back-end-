var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Blog = new Schema({
    name: String,
    url: String,
    metadata: Array,
    description: String,
    active: {
        type: Boolean,
        default: true
    },
    dateAdded: { 
        type: Date, 
        default: Date.now() 
    },
    author:String,
    productName:String,
    Blog:String,
    file:String,
});

module.exports = mongoose.model('blog', Blog);
