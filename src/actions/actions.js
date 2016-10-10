export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const CURRENT_CITY = 'CURRENT_CITY';
import { get } from 'axios';

// export const receiveForecast = (location, forecastData) => ({
//   type: RECEIVE_FORECAST,
//   location,
//   forecastData
// });

export const currentCity = () => ({
  type: CURRENT_CITY
});

// app boot
// 1. get current location
// 2. Store current location App State (redux state)
// 3. fetch data from API
// 4. store result from API call in app state

export const fetchForecast = () => {
  return (dispatch) => {
    // do API stuff here
    const key = 'c6f9cf80abac0cc0d08971b6c53bfc3c';
    const url = (lat, lon) => `http://api.openweathermap.org/data/2.5/weather?APPID=${key}&units=imperial&lat=${lat}&lon=${lon}`;
    const location = { lat: '35', lon: '139' };
    // var instance = axios.create({
    //   baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    // });
    return get(url(location.lat, location.lon))
    .then(res => receiveForecast(res.data))
    // .then(d => console.log(d))
    .catch(err => console.error(err))
    // getForecastFor(location)
    // .then(something)
    // .then(somethingelse)
    // .catch(err => console.error(err))
  //   let currentLat;
  //   let currentLon;
  //
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   currentLat = position.coords.latitude;
  //   currentLon = position.coords.longitude;
  // });
  };
};

const receiveForecast = ({ main, weather }) => {
  console.log("main", main)
  return {
  type: 'TAKE',
  main,
  weather
}};

// export const selectLocation = (location) =>({
//   type: SELECT_LOCATION,
//   location
// });
//
// export const invalidateLocation = (location) => ({
//   type: INVALIDATE_LOCATION,
//   location
// });
//
// export const fetchForecast = options => dispatch => {
//   // return fetch API call
// };
