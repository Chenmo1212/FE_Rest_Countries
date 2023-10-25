import { api } from './fetch';

export const fetchAllCountries = () => {
  return api.get('/all');
};