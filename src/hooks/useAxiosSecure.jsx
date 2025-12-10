import React, { useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';
import useRole from './useRole';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
});

const useAxiosSecure = () => {
  const { user, userSignOut } = useAuth();
  const navigate = useNavigate();
  const { verify } = useRole();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      if (verify) {
        config.headers.Authorization = `Bearer ${verify}`;
      } else {
        delete config.headers.Authorization;
      }
      return config;
    });
    // interceptor response
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);

        const statusCode = error.response?.status;
        if (statusCode === 401 || statusCode === 403) {
          userSignOut().then(() => {
            navigate('/login');
          });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, navigate, userSignOut, verify]);

  return axiosSecure;
};

export default useAxiosSecure;
