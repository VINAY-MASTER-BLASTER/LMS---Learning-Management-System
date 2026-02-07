const mongoose = require('mongoose')

//! Define Enrollment Schema 
const EnrollmentSchema = new mongoose.Schema({

    //? Student who is Enrolling 
    //? ObjectID: refers to the User model's _id 
    studentId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required:true
    },

    //? Course the student is Enrolling in 
    //? ObjectID: refers to the Course model's _id 
    courseId:{
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Course',
        required:true
    }
})

///? Created Enrollment module from Schema 
const Enrollment = mongoose.model('Enrollment',EnrollmentSchema)
module.exports = Enrollment