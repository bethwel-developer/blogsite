const mongoose = require('mongoose');

const Postschema= new mongoose.Mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
},
{timestamps:true}
)

module.exports= mongoose.Mongoose.module("Post", Postschema)