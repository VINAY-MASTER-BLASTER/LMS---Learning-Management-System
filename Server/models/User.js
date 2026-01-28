const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//! Defines User Schema
const userSchema = new mongoose.Schema({

    //? User's Full Name
    name:{
        type:String,
        required:true
    },

    //? User's Email (must be unique)
    email:{
        type:String,
        required:true,
        unique:true
    },

    //? User's Password (Will be hashed befour saving )
    password:{
        type:Number,
        required:true
    },

    //? User's Role (Student or teacher)
    role:{
        type:String,
        required:true,
        default:'Student'
    }
});

module.exports = userSchema