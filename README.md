# LMS---Learning-Management-System
📚 The Learning Management System (LMS) is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides an online platform where students can enroll in courses, watch video lessons, download materials, and track their learning progress, while instructors can create and manage courses.


#### 🔧 Technology Stack

Frontend: React.js <br>
Backend: Node.js, Express.js <br>
Database: MongoDB (Mongoose ODM) <br>
Authentication: JWT (JSON Web Token) <br>
File Storage: Cloudinary (for videos/images) <br>
Other Tools: Multer, Bcrypt.js, CORS, Dotenv <br>


✨ Key Features 
#### 👨‍🎓 Student Module 
User registration and login <br>
Browse available courses <br>
Enroll in courses <br>
Watch video lectures <br>
Download learning resources <br>
Track course progress <br>
Update profile <br>


#### 👨‍🏫 Instructor/Admin Module
Create, update, and delete courses <br>
Upload videos and materials <br>
Manage students <br>
View enrollments <br>
Control course content <br>


#### 🔐 Authentication & Security
JWT-based authentication <br>
Password hashing using bcrypt <br>
Protected routes for users and admins <br>
Role-based access control <br>


#### ⚙️ System Architecture
React.js handles the user interface and communicates with backend APIs.<br>
Express.js & Node.js manage server logic and REST APIs. <br>
MongoDB stores users, courses, lessons, and enrollments. <br>
Cloudinary is used for media storage. <br>
JWT tokens secure user sessions. <br>
The frontend sends requests to the backend APIs, which process data and interact with MongoDB.<br> Responses are returned in JSON format. <br>


#### 🎯 Objective
The main objective of this LMS is to provide a scalable and user-friendly online learning platform that supports digital education by enabling instructors to deliver content and students to learn anytime, anywhere.