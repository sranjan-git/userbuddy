import axios from 'axios';

const api = axios.create({
  baseURL: 'https://userbuddyy.onrender.com',
});

export default api;