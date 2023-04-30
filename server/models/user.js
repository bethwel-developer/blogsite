const mongoose = require('mongoose');

const Userschema= new mongoose.Mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
  type:String,
  required:true,
},
profilePic:{
  type:String,
  default:"",
},
},
{timestamps:true}
)

module.exports= mongoose.Mongoose.module("User", Userschema)