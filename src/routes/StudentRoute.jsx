import React from 'react';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading/Loading';
import { useNavigate } from 'react-router';

const StudentRoute = ({ children }) => {
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();

  if (roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== 'student') {
    return navigate('/');
  }

  return children;
};

export default StudentRoute;
