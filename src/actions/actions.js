require('es6-promise').polyfill();
require('isomorphic-fetch');

export const CURRENT_CITY = 'CURRENT_CITY';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

const weatherKey = 'c6f9cf80abac0cc0d08971b6c53bfc3c';

export const currentCity = (weather) => {
  return {
    type: CURRENT_CITY,
    weather
  }
};

export const fetchForecast = (location) => {
  const lat = location.coords.latitude
  const lon = location.coords.longitude
  return (dispatch) => {
    const weatherUrl = () => `http://api.openweathermap.org/data/2.5/weather?APPID=${weatherKey}&units=imperial&lat=${lat}&lon=${lon}`;
    return fetch(weatherUrl())
    .then(weather => weather.json())
    .then(jsonWeather => dispatch(currentCity(jsonWeather)))
  };
};

const receiveForecast = ({ main, weather }) => {
  return {
  type: RECEIVE_FORECAST,
  main,
  weather
}};
