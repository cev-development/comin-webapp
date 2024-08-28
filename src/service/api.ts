import axios from 'axios';

const api = axios.create({
  baseURL: 'https://comin-bff.cvmakers.com.br',
});

export default api;
