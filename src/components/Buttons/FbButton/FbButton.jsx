import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import axiosInstance from '../../../services/axiosInstance';
import toast from 'react-hot-toast';

const FbButton = ({ className = '' }) => {
  const { signInWithFb, user, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleFbSignin = async (e) => {
    e.preventDefault();

    if (user) return;

    try {
      // Login
      const res = await signInWithFb();
      const loggedInUser = res.user;
      const firebaseToken = await loggedInUser?.accessToken;

      if (!firebaseToken) {
        console.error('Facebook login: Failed to get Firebase token');
        return;
      }

      try {
        const userData = {
          firebaseUID: loggedInUser.uid,
          name: loggedInUser.displayName || '',
          email: loggedInUser.email,
          classLevel: '',
          teachingClass: '',
          subject: '',
          phone: '',
          district: '',
          userType: 'student',
        };
        await axiosInstance.post('/signup', userData);
      } catch (err) {
        const alreadyExists = err.response && err.response.status === 400 && err.response.data?.message === 'Email already exists';

        if (!alreadyExists) {
          console.error('Facebook signup error:', err);
          return;
        }
      }

      const tokenRes = await axiosInstance.post('/api/auth/jwt', { token: firebaseToken });
      const { token, userType } = tokenRes.data;

      localStorage.setItem('access-token', token);
      localStorage.setItem('user-type', userType);
      toast.success('Login successful. Welcome back!');
      navigate('/');
      setLoading(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast.error('Facebook login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleFbSignin} type="button" className={`btn bg-[#1A77F2] text-white border-[#005fd8] rounded-full ${className}`}>
        <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path>
        </svg>
        Login with Facebook
      </button>
    </>
  );
};

export default FbButton;
