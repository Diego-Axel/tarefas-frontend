// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // A URL base do nosso backend
});

export default api;