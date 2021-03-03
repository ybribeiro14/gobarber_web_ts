import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.20.86.85:3333',
});

export default api;
