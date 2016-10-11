import React from 'react';
import { Link } from 'react-router';
import CityShortForecast from './CityShortForecast';

const Home = ({ cityArray }) => {
  return (
    <section id="HomePage">
      <div className="CityContainer">
      {cityArray ? cityArray.map(city => <div key={city.id}><CityShortForecast cityData={city}/></div>) : ''}
        <article className="PinNewCity">
          <Link to="/Settings" className="PinLink">+ Pin another city</Link>
        </article>
      </div>
      <section className="EditLink">
        <Link to="/Settings" className="EditCities">Edit Pinned Cities >> </Link>
      </section>
    </section>
  )
}

export default Home;
