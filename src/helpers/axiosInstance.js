import axios from 'axios';
import promise from 'promise';

const axiosInstance = axios.create({
  baseURL: process.env.baseURL,
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
});

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.getItem('accessToken')
  && config.headers.Authorization === 'Bearer null') {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')
    }`;
  }
  return config;
});

export default axiosInstance;
