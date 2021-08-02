
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// User Schema
const AdminSchema = mongoose.Schema({
    name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  password2:{
    type: String,
    required: true
  },
});
AdminSchema.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  }

const Admin = module.exports = mongoose.model('admin', AdminSchema);

module.exports.createUser = function(newAdmin, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newAdmin.password, salt, function(err, hash) {
	        newAdmin.password = hash;
	        newAdmin.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(email, callback){
	var query = {email: email};
	Admin.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	Admin.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
module.exports.validatePassword = function (password, hash ){
    bcrypt.compare(password, hash , function(err,res){
      if(res){
        //passwords match
        return true;
      }
      else{
        //paswords dont match 
        return false;
      }
    });
  }