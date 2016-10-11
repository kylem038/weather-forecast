import React from 'react';
import { Link } from 'react-router';

const Settings = ({ name, onSubmit, cityArray }) => {
  let input;
  return (
    <section id="Settings">
      <Link to="/ExtendedForecast">Go to Extended Forecast</Link>
      <Link to="/">Go to HomePage</Link>
      <ul>
        {cityArray ?
          cityArray.map(city => <li key={city.id}>{city.name}</li>) : <li> No Pinned Cities </li>}
      </ul>
      <form className='InputCityArea' onSubmit={ (e) => {
          e.preventDefault()
          onSubmit(input.value)
      }}>
        <input placeholder='Zip Code' className='InputPinCityZip' ref={ node  => {input = node}}/>
        <button children='Pin New City' className='SubmitNewCity'/>
      </form>
    </section>
  )
}

export default Settings;
