require('es6-promise').polyfill();
require('isomorphic-fetch');
export const CURRENT_LOCAL_CITY = 'CURRENT_LOCAL_CITY';
export const CURRENT_PINNED_CITY = 'CURRENT_PINNED_CITY';
export const EXTENDED_LOCAL_CITY = 'EXTENDED_LOCAL_CITY';
export const EXTENDED_PINNED_CITY = 'EXTENDED_PINNED_CITY';

const weatherKey = 'c6f9cf80abac0cc0d08971b6c53bfc3c';

export const currentLocalCity = (weather) => {
  return {
    type: CURRENT_LOCAL_CITY,
    weather
  };
};

export const currentPinnedCity = (weather) => {
  return {
    type: CURRENT_PINNED_CITY,
    weather
  };
};

export const extendedLocalCity = (weather) => {
  return {
    type: EXTENDED_LOCAL_CITY,
    weather
  };
};

export const extendedPinnedCity = (weather) => {
  debugger;
  return {
    type: EXTENDED_PINNED_CITY,
    weather
  };
};

export const fetchCurrentLocalForecast = (location) => {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  return (dispatch) => {
    const weatherURL = () => `http://api.openweathermap.org/data/2.5/weather?APPID=${weatherKey}&units=imperial&lat=${lat}&lon=${lon}`;
    return fetch(weatherURL())
    .then(weather => weather.json())
    .then(jsonWeather => dispatch(currentLocalCity(jsonWeather)));
  };
};

export const fetchPinnedCurrentForecast = (zip) => {
  const zipInt = parseInt(zip, 10);
  return (dispatch) => {
    const pinnedWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?APPID=${weatherKey}&zip=${zipInt},us&units=imperial`;
    return fetch(pinnedWeatherUrl)
    .then(pinnedWeather => pinnedWeather.json())
    .then(jsonPinnedWeather => dispatch(currentPinnedCity(jsonPinnedWeather)));
  };
};

export const fetchExtendedLocalForecast = (location) => {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  return (dispatch) => {
    const weatherURL = () => `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`;
    return fetch(weatherURL())
    .then(weather => weather.json())
    .then(jsonweather => dispatch(extendedLocalCity(jsonweather)));
  };
};

export const fetchExtendedPinnedForecast = (zip) => {
  const zipInt = parseInt(zip, 10);
  return (dispatch) => {
    const pinnedExtendedWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipInt}&appid=${weatherKey}`;
    return fetch(pinnedExtendedWeatherUrl)
    .then(pinnedExtendedWeather => pinnedExtendedWeather.json())
    .then(jsonweather => {
      dispatch(extendedPinnedCity(jsonweather));
      console.log(jsonweather);
    });
  };
};
