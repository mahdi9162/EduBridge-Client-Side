import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading/Loading';

const TutorOrAdminRoute = ({ children }) => {
  const { role, roleLoading } = useRole();
  const location = useLocation();

  if (roleLoading) return <Loading />;

  // allow only teacher/admin
  if (role !== 'teacher' && role !== 'admin') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default TutorOrAdminRoute;
