import { api } from './fetch';

export const fetchAllCountries = () => {
  return api.get('/all');
};

export const fetchCountryData = (name) => {
  return api.get(`/country/${name}`)
}