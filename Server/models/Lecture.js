const mongoose = require('mongoose')

//! Define Lecture Schema 
const LectuerSchema = new mongoose.Schema({

    // ? Course ID - which course does this lecture beloge to 
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },

    // ? Lecture Title 
    title : {
        type:String,
        required:true
    },

    // ? Video URL 
    videoUrl : {
        type:String,
        required:true
    },

    // ? Order of lecture in course (1st, 2nd, 3rd, etc.)
    order : {
        type: Number,
        default : 1
    }
})

//? Created Lectuer module from Schema 
const Lectuer = mongoose.model('Lectuer',LectuerSchema)
module.exports = Lectuer;