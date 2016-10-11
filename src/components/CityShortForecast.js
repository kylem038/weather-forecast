import React from 'react';
import { Link } from 'react-router';
import cityData from '../data/fake-current';

export default class CityShortForecast extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return(
      <article className="CityForecast">
         <h2 className="city-name">Current weather for {this.props.cityData.name}</h2>
         <ul>
           <li className="Temp">Temperature: {this.props.cityData.main.temp} º F</li>
           <li className="Description">Weather:  {this.props.cityData.weather[0].main}</li>
         </ul>
      </article>
    )
  }
}
