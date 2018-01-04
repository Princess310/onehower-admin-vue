import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.onehower.com/',
});

export default request;
