import React from 'react';
import { Link } from 'react-router';
import PinnedCityCurrentContainer from '../containers/PinnedCityCurrentContainer';

const Home = ({ cityArray }) => {
  return (
    <section id="HomePage">
      <div className="CityContainer">
      {cityArray ? cityArray.map(city => <article key={city.id}><PinnedCityCurrentContainer /></article>) : ''}
        <article className="PinNewCity">
          <Link to="/Settings" className="">+ Pin another city</Link>
        </article>
      </div>
      <section className="EditLink">
        <Link to="/Settings" className="EditCities">Edit Pinned Cities >> </Link>
      </section>
    </section>
  )
}

export default Home;
