const mongoose = require('mongoose');

const Postschema= new mongoose.Mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true
  },
  desc:{
  type:String,
  required:true,
},
photo:{
  type:String,
  required:true,
},
categories:{
  type:Array,
  required:false,
},
},
{timestamps:true}
)

module.exports= mongoose.Mongoose.module("Post", Postschema)