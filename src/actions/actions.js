require('es6-promise').polyfill();
require('isomorphic-fetch');

export const CURRENT_CITY = 'CURRENT_CITY';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const currentCity = (weather) => {
  return {
    type: CURRENT_CITY,
    weather
}
};

export const fetchForecast = () => {
  return (dispatch) => {
    const key = 'c6f9cf80abac0cc0d08971b6c53bfc3c';
    const location = { lat: '35', lon: '139' };
    const url = (lat, lon) => `http://api.openweathermap.org/data/2.5/weather?APPID=${key}&units=imperial&lat=${lat}&lon=${lon}`;
    return fetch(url(location.lat, location.lon))
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
