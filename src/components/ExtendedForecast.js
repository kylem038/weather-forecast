import React from 'react';
import { Link } from 'react-router';

const extendedForecast = ({ data }) => {
  console.log(data);
  return (
    <section className="ExtendedForecast">
      <div className="fiveDayForecast">
        <h2 className="forecast-title">Extended Forecast for </h2>
        <ul className="forecast">
          <li className="Temp">Temp: {data}</li>
          <li className="Humidity">Humidity: </li>
          <li className="Pressure">Pressure: </li>
          <li className="MinTemp">Min Temp: </li>
          <li className="MaxTemp">Max Temp: </li>
        </ul>
      </div>
        <Link to="/Settings">Go to pinned cities</Link>
        <Link to="/">Go to HomePage</Link>
   </section>
  )
}

export default extendedForecast;
