import React from 'react';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading/Loading';
import { useLocation } from 'react-router';

const StudentRoute = ({ children }) => {
  const { role, roleLoading } = useRole();
  const location = useLocation();

  if (roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== 'student') {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default StudentRoute;
