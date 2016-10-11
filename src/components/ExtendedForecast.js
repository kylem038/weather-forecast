import React from 'react';
import { Link } from 'react-router';

const extendedForecast = ({
  minTemp1, minTemp2, minTemp3, minTemp4, minTemp5,
  maxTemp1, maxTemp2, maxTemp3, maxTemp4, maxTemp5,
  date1, date2, date3, date4, date5,
  weather1, weather2, weather3, weather4, weather5, data
 }) => {
   console.log(minTemp1)
  return (
    <section className="ExtendedForecast">
      <div className="fiveDayForecast">
        <h2 className="forecast-title">Extended Forecast for </h2>
        <ul className="forecast">
          <li className="Date">Date: {date1}</li>
          <li className="dayOneConditions">Conditions: {weather1} </li>
          <li className="dayOneMinTemp">Min Temp: {minTemp1}</li>
          <li className="dayOneMinTemp">Max Temp: {maxTemp1}</li>
        </ul>
        <ul className="forecast">
          <li className="Date">Date: {date2}</li>
          <li className="dayTwoConditions">Conditions: {weather2}</li>
          <li className="dayTwoMinTemp">Min Temp: {minTemp2}</li>
          <li className="dayOneMinTemp">Max Temp: {maxTemp2}</li>
        </ul>
        <ul className="forecast">
          <li className="Date">Date: {date3}</li>
          <li className="dayThreeConditions">Conditions: {weather3} </li>
          <li className="dayThreeMinTemp">Min Temp: {minTemp3}</li>
          <li className="dayOneMinTemp">Max Temp: {maxTemp3}</li>
        </ul>
        <ul className="forecast">
          <li className="Date">Date: {date4}</li>
          <li className="dayFourConditions">Conditions: {weather4}</li>
          <li className="dayFourMinTemp">Min Temp: {minTemp4}</li>
          <li className="dayOneMinTemp">Max Temp: {maxTemp4}</li>
        </ul>
        <ul className="forecast">
          <li className="Date">Date: {date5}</li>
          <li className="dayFiveConditions">Conditions: {weather5}</li>
          <li className="dayFiveMinTemp">Min Temp: {minTemp5}</li>
          <li className="dayFiveMaxTemp">Max Temp: {maxTemp5} </li>
        </ul>
      </div>
        <Link to="/Settings">Go to pinned cities</Link>
        <Link to="/">Go to HomePage</Link>
   </section>
  )
}

export default extendedForecast;
