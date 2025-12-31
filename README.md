# EduBridge — Tuition Management Platform

EduBridge is a full-stack tuition management web application where students can post tuition requests, tutors can apply, and admins can manage the entire system.

Live Site: https://edubridge-production.web.app  
Backend Repository: https://github.com/mahdi9162/EduBridge-Server-Side.git

---

## Main Features

### Student
- Register and login
- Post tuition requests (subject, class, location, budget)
- View own tuition posts
- See tutors who applied
- Select tutor and complete payment
- Student dashboard

### Tutor
- Register and login as tutor
- View available tuition posts
- Apply to tuition posts
- Track application status
- View ongoing tuitions
- View earning history

### Admin
- Admin dashboard
- Manage users (students & tutors)
- Change user roles
- Review and approve tuition posts
- View platform earnings and payment history

> Admin role is initially created manually via database.
> After that, an admin can assign admin role to any student or tutor from the dashboard.

---

## Authentication & Authorization
- Email & password authentication
- Google login
- Role-based route protection
- Unauthorized access handling (Access Denied)

---

## Technology Used

### Frontend
- React
- React Router
- Tailwind CSS
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Deployment
- Frontend: Firebase Hosting
- Backend: Express Server

---

## ⚙️ Project Setup

Follow the steps below to run the project locally.

---

### 🔹 Client Side (Frontend)

```bash
# 1. Clone the repository
git clone https://github.com/mahdi9162/EduBridge-Client-Side.git

# 2. Navigate to project folder
cd Skillora

# 3. Install dependencies
npm install

# 4. Create .env.local file and add Firebase config keys

# 5. Start the development server
npm run dev
```

---

### 🔹 Server Side (Backend)

```bash
# 1. Clone the repository
git clone https://github.com/mahdi9162/EduBridge-Server-Side.git

# 2. Navigate to project folder
cd EduBridge-Server-Side

# 3. Install dependencies
npm install

# 4. Create .env file and add environment variables
# Example:
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret

# 5. Start the server
npm run start
```

