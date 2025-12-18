import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://edu-bridge-server-side-rho.vercel.app',
});

export default axiosInstance;
