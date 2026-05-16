# 🚀 Modena Task Manager

A premium full-stack Task Management Application built using React.js, Node.js, Express.js, and MySQL with JWT Authentication and Stored Procedures.

---

## 🌐 Live Features

✅ User Registration & Login  
✅ JWT Authentication  
✅ Protected Routes  
✅ MySQL Database Integration  
✅ Stored Procedures  
✅ Add / Edit / Delete Tasks  
✅ Task Status Management  
✅ Priority-Based Tasks  
✅ Responsive Dashboard  
✅ Premium Modern UI  
✅ Full Stack Architecture  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3
- Vite

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database
- MySQL
- Stored Procedures

---

## 📂 Project Structure

```bash
Multipurposeproject/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── backend/
│   ├── middleware/
│   ├── server.js
│   ├── db.js
│   └── .env

Authentication System
Secure Login/Register
Password Hashing using bcryptjs
JWT Token Verification
Protected APIs using Middleware
📋 Task Management Features
Create Tasks
Update Task Status
Delete Tasks
Task Priority Management
User-specific Tasks
Dynamic Dashboard
🗄️ Database Features

This project uses MySQL with Stored Procedures for:

User Registration
User Login
Task Creation
⚙️ Installation
1️⃣ Clone Repository
git clone https://github.com/abhi-148/Multipurposeproject.git
2️⃣ Frontend Setup
cd frontend
npm install
npm run dev
3️⃣ Backend Setup
cd backend
npm install
npm start
🔑 Environment Variables

Create .env inside backend folder:

PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=modena_db

JWT_SECRET=your_secret_key
🚀 API Routes
Authentication APIs
Method	Route
POST	/register
POST	/login
Task APIs
Method	Route
POST	/add-task
GET	/tasks/:email
PUT	/update-task/:id
DELETE	/delete-task/:id
🎯 Learning Outcomes

Through this project I learned:

Full Stack Development
REST APIs
JWT Authentication
Middleware Protection
MySQL Integration
Stored Procedures
React Routing
CRUD Operations
Frontend & Backend Integration
👨‍💻 Developer
Abhishek Kumar
GitHub: abhi-148 GitHub
LinkedIn: Abhishek Kumar LinkedIn
Portfolio: Portfolio Website
⭐ Project Status

✅ Completed
✅ Assessment Ready
✅ Portfolio Ready
✅ Full Stack Integrated

📌 Future Improvements
Task Due Dates
Drag & Drop Kanban Board
Dark/Light Theme
Notifications
Team Collaboration
File Uploads
