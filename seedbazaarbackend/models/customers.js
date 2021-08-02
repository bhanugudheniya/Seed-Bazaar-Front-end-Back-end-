var mongoose=require('mongoose');
const jwt = require('jsonwebtoken');

var customer=mongoose.Schema({
    firstname:String,
    lastname:String,
    phone:Number,
    email:String,
    password:String,
    cart:Array,         /////////////////productId,quatity,perproductCost(this is after discount)
    comments:Array,
    gender:{ // 0 for male, 1 for female
      type:Number,
      default:0
    },
    address:{
      type:Object,
      default:{
        address1:'',
        address2:'',
        city:'',
        state:'',
        zipCode:0
      }
    },
    dateAdded: { 
      type: Date, 
      default: Date.now() 
  },
  forgotToken:String
});
customer.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  }


module.exports=mongoose.model('Customer',customer);