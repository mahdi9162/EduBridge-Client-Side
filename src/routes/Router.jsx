import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/public/Home/Home';
import TuitionsList from '../pages/public/Tuitions/TuitionsList';
import TutorsList from '../pages/public/Tutors/TutorsList';
import About from '../pages/public/About/About';
import Contact from '../pages/public/Contact/Contact';
import Signup from '../pages/public/Auth/Signup';
import Login from '../pages/public/Auth/Login';
import DashboardLayout from '../layouts/DashboardLayout';
import StudentDashboard from '../pages/dashboard/student/StudentDashboard';
import TutorDashboard from '../pages/dashboard/tutor/TutorDashboard';
import AdminDashboard from '../pages/dashboard/admin/AdminDashboard';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'tuitions',
        Component: TuitionsList,
      },
      {
        path: 'tutors',
        Component: TutorsList,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: 'signup',
        Component: Signup,
      },
      {
        path: 'login',
        Component: Login,
      },
    ],
  },
  // Dashboard Layout
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'student-dashboard',
        Component: StudentDashboard,
      },

      {
        path: 'tutor-dashboard',
        Component: TutorDashboard,
      },
      {
        path: 'admin-dashboard',
        Component: AdminDashboard,
      },
    ],
  },
]);
