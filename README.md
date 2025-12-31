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
- Google and GitHub login
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

## How to Run (Client)

```bash
git clone https://github.com/mahdi9162/EduBridge-Client-Side.git
cd EduBridge-Client-Side
npm install
npm run dev
```

---

git clone https://github.com/mahdi9162/EduBridge-Server-Side.git
cd EduBridge-Server-Side
npm install
npm run start
