const express = require('express')
const Authmiddeware = require("../Middleware/Authmiddeware")
const Rolemiddleware = require("../Middleware/Rolemiddleware")
const Lecture = require('../models/Lecture')

const router = express.Router()


// ! Add LECTURE (TEACHER ONLY)
// ? POST / add 
// ? Only Teacher can lecture 
router.post('/add', Authmiddeware, Rolemiddleware('teacher'), async (req, res) => {
  try {
    // Get data from request body
    const { courseId, title, videoUrl, order } = req.body;

    // Check if all required fields are provided
    if (!courseId || !title || !videoUrl) {
      return res.status(400).json({
        message: 'Please provide courseId, title, and videoUrl',
      });
    }

    // Create new lecture
    const newLecture = new Lecture({
      courseId,
      title,
      videoUrl,
      order: order || 1, // Default order is 1 if not provided
    });

    // Save lecture to database
    await newLecture.save();

    console.log('New lecture added:', newLecture._id);

    // Send success response
    res.status(201).json({
      message: 'Lecture added successfully',
      lecture: {
        id: newLecture._id,
        courseId: newLecture.courseId,
        title: newLecture.title,
        videoUrl: newLecture.videoUrl,
        order: newLecture.order,
      },
    });
  } catch (error) {
    console.error('Add lecture error:', error.message);
    res.status(500).json({ message: 'Server error while adding lecture' });
  }
});
module.exports = router