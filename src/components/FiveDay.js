import React from 'react';
import currentWeather from '../data/fake-current';

const { temp, humidity, pressure, temp_min: tempMin, temp_max: tempMax } = currentWeather.main;
const { name } = currentWeather;

const FiveDay = () => (
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
)

export default FiveDay;
