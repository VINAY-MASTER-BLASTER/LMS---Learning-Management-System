const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();



//! Register Routes
router.post("/register", async (req, res) => {
  try {
    // ? Get data from request body
    const { name, email, password, role } = req.body;

    // ? Cheak if all require fileds are provided
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ massage: "Please Provide name, email, and password" });
    }

    //     ? Cheak if user already exists 
    // ?   Find the email match inside the database (Using Module)
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({ massage: "User alredy Exists" });
    }

    //? Hashed Password 
    const hashedPassword = await bcrypt.hash(password,10);

    //? Create new user
    const newUser = new User({
      name,
      email,
      password:hashedPassword,
      role: role || "student", //? Defult to student if role not provided
    });
    //? Save User to Database
    //? Password Will be hashed automatically in the pre-save hook
    await newUser.save();

    //? Send Success response
    res.status(201).json({
      massage:"User Register Successfully",
      user : {
        id : newUser._id,
        name: newUser.name,
        email: newUser.email,
        password:newUser.password,
        role: newUser.role,
      }
    })
  } catch (error) {
    console.error("Register Error : ",error)
    res.status(500).json({massage:'Server Error durung Register'})
    
  }
})



//! Login Routes
router.post("/login", async (req,res)=>{
  try{
    //? Get email and password from request body
    const {email,password} = req.body

    //? Cheak if email ana password are provided
    if(!email || !password){
      res.status(400).json({massage:"Please Provied email and password"})
    }

    ///? Find user by email
    const user = await User.findOne({email})


    //? Cheak if user exist
    if(!user){
      res.status(400).json({massage:"Invalid email and password"})
    }

    // ? Compare Provided password with stored hashed password 
    const ispasswordmatch = await bcrypt.compare(password,user.password)

    //? if password doesn't match 
    if(!ispasswordmatch){
      return res.status(400).json({massage:"Invalid email and password"})
    }


    //? Create JWT Token 
    const token = jwt.sign(
      {
        id : uaser.id,
        role : user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn : '1d', //? Token expires in 1 day
      }
      
    )

    
    // ? Send token and user data (without password)
    res.status(200).json({
      massage: "Login Successfully", 
      token,
      user:{
        id: user._id,
        name:user.name,
        email:user.email,
        role:user.role
      }
    })
  }catch(error){
    console.error('Login error : ',error)
    res.status(400).json({massage:"Server error during login"})
  }

})


module.exports = router