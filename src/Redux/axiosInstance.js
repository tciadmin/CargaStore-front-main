import axios from 'axios';

const axiosRequestConfig = {
  baseURL: import.meta.env.VITE_URL_BACKEND,
};

export const axiosInstance = axios.create(axiosRequestConfig);
