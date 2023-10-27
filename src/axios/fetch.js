import axios from 'axios';
export const api = axios.create({
  baseURL: "https://api.chenmo1212.cn/rest/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 60 * 1000,
});