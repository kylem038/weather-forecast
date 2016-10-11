import React from 'react';

export default class CityShortForecastCard extends React.Component {
  constructor(props) {
    super();
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



{/* <Link to="/ExtendedPinnedForecast" className="ExtendedForecast">View extended forecast</Link> */}
