import axios from 'axios';

axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: 'https://userbuddy.vercel.app',
});

export default api;
