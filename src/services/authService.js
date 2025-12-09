import { instance } from './apiClient';

// signup api for save the user profile in mongodb
export const signupUser = (userData) => {
  return instance.post('/signup', userData);
};
