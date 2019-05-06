import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ah-backend.herokuapp.com',
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
});

axiosInstance.interceptors.request.use((config) => {
    if (localStorage.getItem('accessToken') && config.headers.Authorization === 'Bearer null') {
      config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    }
    return config;
  });

export default axiosInstance;
