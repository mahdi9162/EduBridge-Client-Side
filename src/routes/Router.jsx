import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/public/Home/Home';
import TuitionsList from '../pages/public/Tuitions/TuitionsList';
import TutorsList from '../pages/public/Tutors/TutorsList';
import Contact from '../pages/public/Contact/Contact';
import Signup from '../pages/public/Auth/Signup';
import Login from '../pages/public/Auth/Login';
import TuitionDetails from '../pages/public/Tuitions/TuitionDetails';
import DashboardLayout from '../layouts/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import StudentRoute from './StudentRoute';
import TutorRoute from './TutorRoute';
import AdminRoute from './AdminRoute';
import DashboardHome from '../pages/dashboard/dashboardHome/DashboardHome';
import MyTuitions from '../pages/dashboard/student/MyTuitions';
import PostTuition from '../pages/dashboard/student/PostTuition';
import AppliedTutors from '../pages/dashboard/student/AppliedTutors';
import PaymentsHistory from '../pages/dashboard/student/PaymentsHistory';
import MyApplications from '../pages/dashboard/tutor/MyApplications';
import OngoingTuitions from '../pages/dashboard/tutor/OngoingTuitions';
import RevenueHistory from '../pages/dashboard/tutor/RevenueHistory';
import ManageTuitions from '../pages/dashboard/admin/ManageTuitions';
import ManageUsers from '../pages/dashboard/admin/ManageUsers';
import ReportsAnalytics from '../pages/dashboard/admin/ReportsAnalytics';
import PaymentSuccess from '../pages/dashboard/paymentPages/paymentSuccess';
import PaymentCancel from '../pages/dashboard/paymentPages/PaymentCancel.Jsx';
import NotFound from '../pages/public/Error/NotFound';
import ForgotPass from '../pages/public/Auth/ForgotPass';
import ProfileSettings from '../pages/dashboard/profileSettings/ProfileSettings';
import About from '../pages/public/About/About';
import TutorOrAdminRoute from './TutorOrAdminRoute';
import FAQ from '../pages/public/FAQ/FAQ';
import TermsOfUse from '../pages/public/Legal/TermsOfUse/TermsOfUse';
import PrivacyPolicy from '../pages/public/Legal/PrivacyPolicy/PrivacyPolicy';
import CookiePolicy from '../pages/public/Legal/CookiePolicy/CookiePolicy';

export const router = createBrowserRouter([
  // Public site
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: 'tuitions', Component: TuitionsList },
      { path: 'tutors', Component: TutorsList },
      { path: 'about-edubridge', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'signup', Component: Signup },
      { path: 'login', Component: Login },
      { path: 'faq', Component: FAQ },
      { path: 'terms', Component: TermsOfUse },
      { path: 'privacy-policy', Component: PrivacyPolicy },
      { path: 'cookie-policy', Component: CookiePolicy },
      {
        path: 'tuition-details/:id',
        element: (
          <TutorOrAdminRoute>
            <TuitionDetails />
          </TutorOrAdminRoute>
        ),
      },
      {
        path: 'forgot-password',
        Component: ForgotPass,
      },
    ],
  },

  //  NotFound
  { path: '*', Component: NotFound },

  //  Dashboard
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, Component: DashboardHome },

      // Student
      {
        path: 'my-tuitions',
        element: (
          <StudentRoute>
            <MyTuitions />
          </StudentRoute>
        ),
      },
      {
        path: 'post-tuition',
        element: (
          <StudentRoute>
            <PostTuition />
          </StudentRoute>
        ),
      },
      {
        path: 'applied-tutors',
        element: (
          <StudentRoute>
            <AppliedTutors />
          </StudentRoute>
        ),
      },
      {
        path: 'payments-history',
        element: (
          <StudentRoute>
            <PaymentsHistory />
          </StudentRoute>
        ),
      },

      // Tutor
      {
        path: 'my-applications',
        element: (
          <TutorRoute>
            <MyApplications />
          </TutorRoute>
        ),
      },
      {
        path: 'ongoing-tuitions',
        element: (
          <TutorRoute>
            <OngoingTuitions />
          </TutorRoute>
        ),
      },
      {
        path: 'revenue-history',
        element: (
          <TutorRoute>
            <RevenueHistory />
          </TutorRoute>
        ),
      },
      // Admin
      {
        path: 'manage-tuitions',
        element: (
          <AdminRoute>
            <ManageTuitions />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: 'reports-analytics',
        element: (
          <AdminRoute>
            <ReportsAnalytics />
          </AdminRoute>
        ),
      },
      // all users profile setting
      {
        path: 'profile-settings',
        Component: ProfileSettings,
      },

      // Payment pages
      { path: 'payment-success', Component: PaymentSuccess },
      { path: 'payment-cancelled', Component: PaymentCancel },

      // Dashboard NotFound
      { path: '*', Component: NotFound },
    ],
  },
]);
