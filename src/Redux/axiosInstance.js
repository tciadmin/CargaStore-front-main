import axios from 'axios';

const axiosRequestConfig = {
  baseURL: 'http://localhost:3000/api',
};

export const axiosInstance = axios.create(axiosRequestConfig);
