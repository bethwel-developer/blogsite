const router = require("express").Router();
const User=require("../models/user")

router.post("/register", async (req, res)=>{
  try {
    const newUser = new User({
      username:req.body.username,
      email:req.body.email,
       password:req.body.password,
    })
    const user=await newUser.save();
    res.redirect("/login")
  } catch (error) {
    
  }
})