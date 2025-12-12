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
import PrivateRoute from './PrivateRoute';
import MyTuitions from '../pages/dashboard/student/MyTuitions';
import StudentRoute from './StudentRoute';
import PostTuition from '../pages/dashboard/student/PostTuition';
import AppliedTutors from '../pages/dashboard/student/AppliedTutors';
import Payments from '../pages/dashboard/student/Payments';
import StudentProfileSettings from '../pages/dashboard/student/StudentProfileSettings';
import TutorRoute from './TutorRoute';
import MyApplications from '../pages/dashboard/tutor/MyApplications';
import OngoingTuitions from '../pages/dashboard/tutor/OngoingTuitions';
import RevenueHistory from '../pages/dashboard/tutor/RevenueHistory';
import TutorProfileSettings from '../pages/dashboard/tutor/TutorProfileSettings';
import AdminRoute from './AdminRoute';
import ManageTuitions from '../pages/dashboard/admin/ManageTuitions';
import ManageUsers from '../pages/dashboard/admin/ManageUsers';
import ReportsAnalytics from '../pages/dashboard/admin/ReportsAnalytics';
import AdminProfileSetting from '../pages/dashboard/admin/AdminProfileSetting';
import TuitionDetails from '../pages/public/Tuitions/TuitionDetails';

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
      {
        path: 'tuition-details/:id',
        element: (
          <TutorRoute>
            <TuitionDetails></TuitionDetails>
          </TutorRoute>
        ),
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
      // Students Route
      {
        path: 'my-tuitions',
        element: (
          <StudentRoute>
            <MyTuitions></MyTuitions>
          </StudentRoute>
        ),
      },
      {
        path: 'post-tuition',
        element: (
          <StudentRoute>
            <PostTuition></PostTuition>
          </StudentRoute>
        ),
      },
      {
        path: 'applied-tutors',
        element: (
          <StudentRoute>
            <AppliedTutors></AppliedTutors>
          </StudentRoute>
        ),
      },
      {
        path: 'payments',
        element: (
          <StudentRoute>
            <Payments></Payments>
          </StudentRoute>
        ),
      },
      {
        path: 'student-profile',
        element: (
          <StudentRoute>
            <StudentProfileSettings></StudentProfileSettings>
          </StudentRoute>
        ),
      },
      // Teacher Route
      {
        path: 'my-applications',
        element: (
          <TutorRoute>
            <MyApplications></MyApplications>
          </TutorRoute>
        ),
      },
      {
        path: 'ongoing-tuitions',
        element: (
          <TutorRoute>
            <OngoingTuitions></OngoingTuitions>
          </TutorRoute>
        ),
      },
      {
        path: 'revenue-history',
        element: (
          <TutorRoute>
            <RevenueHistory></RevenueHistory>
          </TutorRoute>
        ),
      },
      {
        path: 'tutor-profile',
        element: (
          <TutorRoute>
            <TutorProfileSettings></TutorProfileSettings>
          </TutorRoute>
        ),
      },
      // Admin Route
      {
        path: 'manage-tuitions',
        element: (
          <AdminRoute>
            <ManageTuitions></ManageTuitions>
          </AdminRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: 'reports-analytics',
        element: (
          <AdminRoute>
            <ReportsAnalytics></ReportsAnalytics>
          </AdminRoute>
        ),
      },
      {
        path: 'admin-profile',
        element: (
          <AdminRoute>
            <AdminProfileSetting></AdminProfileSetting>
          </AdminRoute>
        ),
      },
    ],
  },
]);
