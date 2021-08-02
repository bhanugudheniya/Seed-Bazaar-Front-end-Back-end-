var mongoose=require('mongoose');
const contentPage=mongoose.Schema({
    title:String,
    content:String,
    image:String,
    activeFlag:{
        type:Boolean,
        default:true
    },
    metadata:Array,
    url:String
})

module.exports=mongoose.model('ContentPage',contentPage);