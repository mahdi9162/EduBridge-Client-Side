import axiosInstance from '../hooks/useAxiosInstance';

// signup api for save the user profile in mongodb
export const signupUser = (userData) => {
  return axiosInstance.post('/signup', userData);
};
