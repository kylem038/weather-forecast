import React from 'react';
import { Link } from 'react-router';

const Header = ({ temp, main, name }) => {
  return(
  <div>
    <h2 className="page-title">Weather Tracker</h2>
    <section id="header">
    <p id="current-local-forecast">{temp ? `Current forecast for ${name} : ${temp} degrees and ${main}` : 'Loading weather for your location...'}</p>
      <Link to="/ExtendedForecast" id="view-extended-forecast">View extended forecast</Link>
    </section>
  </div>
  )
}

export default Header;
