import React from 'react';
import { Link } from 'react-router';
import currentWeather from '../data/fake-current';

const { temp, humidity } = currentWeather.main;
const { name } = currentWeather;
const { speed } = currentWeather.wind;
const { description } = currentWeather.weather;

const CityShortForecast = ({ value }) => {
  return (
    <article className="CityForecast">
      <h2 className="city-name">Current weather for {name}</h2>
      <ul>
        <li className="Temp">Temperature: {temp}º F</li>
        <li className="Description">Weather: {description}</li>
        <li className="Wind">Wind: {speed}mph</li>
        <li className="Humidity">Humidity: {humidity}%</li>
      </ul>
      <h3 className="ViewExtended">View Extended Forecast >></h3>
    </article>
  );
}

export default CityShortForecast;
