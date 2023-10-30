import axios from 'axios';
export const api = axios.create({
  baseURL: "https://rest-countries-1212-76fafe1fccdc.herokuapp.com/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 60 * 1000,
});