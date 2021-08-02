var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Category = new Schema({
    name: String,
    url: String,
    metadata: Array,
    parentCategory: String,
    description: String,
    active: {
        type: Boolean,
        default: true
    },
    dateAdded: { 
        type: Date, 
        default: Date.now() 
    },
});

module.exports = mongoose.model('category', Category);
