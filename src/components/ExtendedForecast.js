import React from 'react';
import { Link } from 'react-router';
import currentWeather from '../data/fake-current';


const { temp, humidity, pressure, temp_min: tempMin, temp_max: tempMax } = currentWeather.main;
const { name } = currentWeather;


const extendedForecast = ({ weatherdata }) => {
  return (
    <section className="ExtendedForecast">
      <div className="fiveDayForecast">
        <h2 className="forecast-title">Extended Forecast for {name}</h2>
        <ul className="forecast">
          <li className="Temp">Temp: {temp}</li>
          <li className="Humidity">Humidity: {humidity}</li>
          <li className="Pressure">Pressure: {pressure}</li>
          <li className="MinTemp">Min Temp: {tempMin}</li>
          <li className="MaxTemp">Max Temp: {tempMax}</li>
        </ul>
      </div>
        <Link to="/Settings">Go to pinned cities</Link>
        <Link to="/">Go to HomePage</Link>
   </section>
  )
}

export default extendedForecast;
