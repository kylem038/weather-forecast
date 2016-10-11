import React from 'react';
import { Link } from 'react-router';

const Settings = ({ name, onSubmit }) => {
  let input;
  return (
    <section id="Settings">
      <Link to="/ExtendedForecast">Go to Extended Forecast</Link>
      <Link to="/">Go to HomePage</Link>
      <h1>Pinned Cities:</h1>
      <section className='PinnedCities'>
        <h3>{ '❌' } { name } </h3>
        <h3>{ '❌' } </h3>
        <h3>{ '❌' } </h3>
      </section>
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
