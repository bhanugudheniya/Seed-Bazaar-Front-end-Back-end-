var express = require('express');
//pakages
var router = express.Router();
var Newsletter=require('../models/newsletter');





router.post('/newsletterSubscrbe',async (req,res)=>{
    try{
        const newsletter=await Newsletter.findOne({email:req.body.email}).exec();
        if(newsletter)
           res.json({message:"You Have Already Subscribed to our newsletter",success:false})
       const news=  await new Newsletter(req.body).save();
       res.json({message:"You Have Successfully Subscribed to our newsletter",success:true})
        }
   catch(err){
        console.log(err)
    }
});
router.get('/getNewsletter',async (req,res)=>{
    try{
        const news =await Newsletter.find().exec();
        res.json({message:"Newsletters",data:news,success:true})
    }
    catch(err)
        {
            console.log(err)
        }
});
router.post('/deleteNewsletter',async (req,res)=>{
    try{
        const news =await Newsletter.findByIdAndRemove(req.body.id).exec();
        res.json({message:"Entry Removed",success:true})
    }
    catch(err)
        {
            console.log(err)
        }
});
module.exports = router