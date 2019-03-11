import axios from 'axios';
import configs from '../config';

const request = (token: string) => axios.create({
  baseURL: configs.baseUrl,
  headers: {
    'Authorization': `Client-ID ${token}`
  }
});

export default request
