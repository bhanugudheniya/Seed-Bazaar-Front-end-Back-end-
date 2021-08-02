var mongoose=require('mongoose');

const homepageMobileBanner=mongoose.Schema({
    image:String,
    active:{
        type:Boolean,
        default:false
    },
    categoryId:String
});

module.exports=mongoose.model('HomepageMobileBanner',homepageMobileBanner)
