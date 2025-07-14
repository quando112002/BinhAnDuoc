import axios from 'axios';

const http = axios.create({
  baseURL: 'https://binhanduoc.onrender.com/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
