//! Course Module 

const mongoose = require('mongoose')
const User = require('./User')

const courseSchema = mongoose.Schema({

    //? Course Title 
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    teacher:{
        type:mongoose.Schema.type.ObjectID,
        ref : 'User'
    }
})

const Course = mongoose.model('course',courseSchema)
module.exports = Course