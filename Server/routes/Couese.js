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
      const { title, description, teacherId } = req.body;

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

module.exports = router;
