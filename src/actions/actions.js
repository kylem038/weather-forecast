require('es6-promise').polyfill();
require('isomorphic-fetch');

export const CURRENT_CITY = 'CURRENT_CITY';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const PINNED_CITY = 'PINNED_CITY';

const weatherKey = 'c6f9cf80abac0cc0d08971b6c53bfc3c';

export const currentCity = (weather) => {
  return {
    type: CURRENT_CITY,
    weather
  };
};

export const pinnedCity = (weather) => {
  return {
    type: PINNED_CITY,
    weather
  };
};

export const fetchLocalForecast = (location) => {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  return (dispatch) => {
    const localWeatherUrl = () => `http://api.openweathermap.org/data/2.5/weather?APPID=${weatherKey}&units=imperial&lat=${lat}&lon=${lon}`;
    return fetch(localWeatherUrl())
    .then(localWeather => localWeather.json())
    .then(jsonLocalWeather => dispatch(currentCity(jsonLocalWeather))
    );
  };
};

export const fetchPinnedForecast = () => {
  return (dispatch) => {
    const pinnedWeatherUrl = () => `http://api.openweathermap.org/data/2.5/weather?APPID=${weatherKey}&zip=44001,us&units=imperial`;
    return fetch(pinnedWeatherUrl())
    .then(pinnedWeather => pinnedWeather.json())
    .then(jsonPinnedWeather => {
      console.log(jsonPinnedWeather);
      dispatch(pinnedCity(jsonPinnedWeather));
    });
  };
};


const receiveForecast = ({ main, weather }) => {
  return {
  type: RECEIVE_FORECAST,
  main,
  weather
}};
