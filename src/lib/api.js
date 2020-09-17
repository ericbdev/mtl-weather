// @flow

import fetch from 'cross-fetch';
// https://api.openweathermap.org/data/2.5?appid=8a866f7126e1694eb04285a3b88ef954/undefined&lat=35&lon=139

import weather from './api/fixtures/weather-forecast.json';
// api.openweathermap.org/data/2.5/weather?lat=35&lon=139
const apiVersion = '2.5';
const appid = '8a866f7126e1694eb04285a3b88ef954';
const baseURL = `https://api.openweathermap.org/data/${apiVersion}`;

const apiRequest = async ({ endpoint, query }) => fetch(`${baseURL}/${endpoint}?appid=${appid}&${query}`)
  .then(response => response.json())
  .then(json => json);

const getWeather = async () => {
  const lon = '45.4660199';
  const lat = '-73.5604527';
  const coords = `lat=${lat}&lon=${lon}`;

  return weather;

  return await apiRequest({
    endpoint: 'weather',
    query: coords,
  });
};

const api = {
  getWeather,
};

export default api;
