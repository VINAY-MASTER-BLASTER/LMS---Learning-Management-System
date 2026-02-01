const express = require('express')
const Course = require('../models/Course')
// const Enrollment = require('../models/Enrollment')
const Authmiddeware = require('../Middleware/Authmiddeware')
// const Rolemiddleware = require('../Middleware/Rolemiddleware')

const router = express.Router()

//  ! CREATE COURSE ROUTES 

// ? Only JavaScrip