require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ConnectDB = require('./config/Database')

//! Import Routes 
const authRoutes = require('./routes/Auth')
// const ProtectedRoutes = require('./routes/Protected')



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
app.use('/api/auth',authRoutes)


//! Use Protected Routre
// app.use('api/test',ProtectedRoutes)


//! Start Server 
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log(`Server is Runing URL http://localhost:${PORT}`)
})