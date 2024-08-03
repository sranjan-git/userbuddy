import axios from 'axios';

const api = axios.create({
  baseURL: 'https://userbuddy.vercel.app',
});

export default api;
