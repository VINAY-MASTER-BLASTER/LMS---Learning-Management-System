const mongoose = require('mongoose')
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
        type:String,
        required:true
    },
    //? User's Role (Student or teacher)
    role:{
        type:String,
        default:'Student'
    }
});
const User = mongoose.model('User',userSchema)
module.exports = User
