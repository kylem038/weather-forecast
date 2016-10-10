export const CURRENT_CITY = 'CURRENT_CITY';
import { get } from 'axios';


export const currentCity = () => ({
  type: CURRENT_CITY
});

export const fetchForecast = () => {
  return (dispatch) => {
    const key = 'c6f9cf80abac0cc0d08971b6c53bfc3c';
    const url = (lat, lon) => `http://api.openweathermap.org/data/2.5/weather?APPID=${key}&units=imperial&lat=${lat}&lon=${lon}`;
    const location = { lat: '35', lon: '139' };

    return get(url(location.lat, location.lon))
    .then(res => receiveForecast(res.data))
    .catch(err => console.error(err))
  };
};

const receiveForecast = ({ main, weather }) => {
  return {
  type: 'TAKE',
  main,
  weather
}};
