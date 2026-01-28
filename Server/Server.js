require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ConnectDB = require('./config/Database')

//! Import Routes 
// const authRoutes = require()
// const ProtectedRoutes = require()

const app = express()


//! Connect to MongoDB
ConnectDB()


//! Middlware 
app.use(cors())
app.use(express.json())

//! Basic Route
app.get('/',(req,res)=>{
    res.json({massage:"LMS API Server"})
})


//! Use auth Routes  
// app.use('/api/auth')


//! Use Protected Routre
// app.use('api/test')


//! Start Server 
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is runing on Port ${PORT}`);
})
