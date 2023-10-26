import axios from 'axios';
export const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 60 * 1000,
});