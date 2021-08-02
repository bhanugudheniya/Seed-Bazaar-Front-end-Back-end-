var mongoose=require('mongoose');

const homepageBanner=mongoose.Schema({
    image:String,
    active:{
        type:Boolean,
        default:false
    },
    categoryId:String
});

module.exports=mongoose.model('HomepageBannerImage',homepageBanner)
