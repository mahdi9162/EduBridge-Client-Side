import React from 'react';
import AdminDashboardHome from './AdminHome/AdminDashboardHome';
import useRole from '../../../hooks/useRole';
import StudentDashboardHome from './StudentHome/StudentDashboardHome';
import TeacherDashboardHome from './TutorHome/TeacherDashboardHome';
import FullScreenLoader from '../../../components/Loading/FullScreenLoader';

const DashboardHome = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  if (role === 'admin') {
    return <AdminDashboardHome />;
  }

  if (role === 'student') {
    return <StudentDashboardHome />;
  }

  if (role === 'teacher') {
    return <TeacherDashboardHome />;
  }

  return null;
};

export default DashboardHome;
