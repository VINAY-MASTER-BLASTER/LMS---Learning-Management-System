//! Course Module 

const mongoose = require('mongoose')

//? Defining the course Schema 
const courseSchema = new mongoose.Schema({

    //? Course Title 
    title:{
        type:String,
        require:true
    },

    //? Course description
    description:{
        type:String
    },

    //? Teacher who create the course 
    teacherId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

//? Created course module from Schema 
const Course = mongoose.model('course',courseSchema)
module.exports = Course