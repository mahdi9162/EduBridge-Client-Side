import axiosInstance from '../services/axiosInstance';

export const exchangeFirebaseTokenForJwt = async (userProfile) => {
  const firebaseToken = await userProfile.getIdToken();

  const { data } = await axiosInstance.post('/api/auth/jwt', { token: firebaseToken });
  const { token, userType } = data;

  localStorage.setItem('access-token', token);
  localStorage.setItem('user-type', userType);

  return { token, userType };
};
