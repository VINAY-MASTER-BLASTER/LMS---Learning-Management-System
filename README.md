# LMS---Learning-Management-System
📚 The Learning Management System (LMS) is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides an online platform where students can enroll in courses, watch video lessons, download materials, and track their learning progress, while instructors can create and manage courses.


# 🔧 Technology Stack

Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT (JSON Web Token)
File Storage: Cloudinary (for videos/images)
Other Tools: Multer, Bcrypt.js, CORS, Dotenv
✨ Key Features
👨‍🎓 Student Module

User registration and login
Browse available courses
Enroll in courses
Watch video lectures
Download learning resources
Track course progress
Update profile

# 👨‍🏫 Instructor/Admin Module
Create, update, and delete courses
Upload videos and materials
Manage students
View enrollments
Control course content

# 🔐 Authentication & Security
JWT-based authentication
Password hashing using bcrypt
Protected routes for users and admins
Role-based access control
⚙️ System Architecture
React.js handles the user interface and communicates with backend APIs.
Express.js & Node.js manage server logic and REST APIs.
MongoDB stores users, courses, lessons, and enrollments.
Cloudinary is used for media storage.
JWT tokens secure user sessions.
The frontend sends requests to the backend APIs, which process data and interact with MongoDB. Responses are returned in JSON format.

# 🎯 Objective

The main objective of this LMS is to provide a scalable and user-friendly online learning platform that supports digital education by enabling instructors to deliver content and students to learn anytime, anywhere.