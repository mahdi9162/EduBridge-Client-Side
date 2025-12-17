import React from 'react';
import AdminDashboardHome from './AdminHome/AdminDashboardHome';
import useRole from '../../../hooks/useRole';
import StudentDashboardHome from './StudentHome/StudentDashboardHome';
import TeacherDashboardHome from './TutorHome/TeacherDashboardHome';
import Loading from '../../../components/Loading/Loading';

const DashboardHome = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <Loading></Loading>;
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
