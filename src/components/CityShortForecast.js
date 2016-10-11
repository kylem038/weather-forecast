import React from 'react';
import { Link } from 'react-router';
import currentWeather from '../data/fake-current';

const CityShortForecast = ({ temp, name, main }) => {
  return (
    <article className="CityForecast">
      <h2 className="city-name">Current weather for {name}</h2>
      <ul>
        <li className="Temp">Temperature: {temp}º F</li>
        <li className="Description">Weather: {main} </li>
      </ul>
      <h3 className="ViewExtended">View Extended Forecast >></h3>
    </article>
  );
}

export default CityShortForecast;
