require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ConnectDB = require('./config/Database')

//! Import Routes 
const authRoutes = require('./routes/Auth')
const ProtectedRoutes = require('./routes/Protected')
const RoleRoutes = require('./routes/Role')
const CourseRoutes = require('./routes/Couese')



//! Connect to MongoDB
ConnectDB()


//! Middlware 
const app = express()
app.use(cors())
app.use(express.json())

//! Basic Route

//? Test Router 
app.get('/',(req,res)=>{
    res.json({massage:"LMS API Server"})
})


//! Use auth Routes - Register and Login
//? SETP - 1
app.use('/api/auth',authRoutes)


//! Use Protected Routre
//? SETP - 2
app.use('/api/test',ProtectedRoutes)


//! Use role Routre as a - student techers 
//? STEP - 3
// app.use('/api/role',RoleRoutes)


//! Use role Routre as a - student techers
//? STEP - 4 
app.use('/api/course',CourseRoutes)


//! Start Server 
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log(`Server is Runing URL http://localhost:${PORT}`)
})