const express = require("express");
const Course = require("../models/Course");
// const Enrollment = require('../models/Enrollment')
const Authmiddeware = require("../Middleware/Authmiddeware");
const Rolemiddleware = require("../Middleware/Rolemiddleware");

const router = express.Router();

//  ! CREATE COURSE ROUTES

// ? Only teacher can create course
router.post("/create",Authmiddeware,Rolemiddleware("teacher"),async (req, res) => {
    try {
      //? Get Title and descipation from request body
      const { title, description} = req.body;

      //? Cheak if title is provided
      if (!title) {
        return res.status(401).json({ message: "Please provide a course title" });
      }

      console.log("Teacher", req.user.id, "creating course:", title);


      //? Create a new course object
      const newCourse = new Course({
        title,
        description,
        teacherId: req.user.id, //! Set teacher as the current logged-in user
      });

      //? Save course to database
      await newCourse.save();


      console.log("Course created successfully:", newCourse._id);


      //? Send success response
    res.status(201).json({
      message: 'Course created successfully',
      course: {
        id: newCourse._id,
        title: newCourse.title, 
        description: newCourse.description,
        teacherId: newCourse.teacherId,
      },
    });

    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ message: 'Server error while creating course' });
    }
  },
);



// ============================================
//! GET ALL COURSES ROUTE
// ============================================
// !Only students can view all courses
router.get('/all', Authmiddeware, Rolemiddleware('student'), async (req, res) => {
  try {
    console.log('Student', req.user.id, 'fetching all courses');

    //? Find all courses from database
    const courses = await Course.find();

    console.log('Found', courses.length, 'courses');

    //? Send list of courses
    res.status(200).json({
      message: 'Courses retrieved successfully',
      courses: courses,
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Server error while fetching courses' });
  }
});

module.exports = router;
