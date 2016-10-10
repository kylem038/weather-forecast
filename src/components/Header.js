import React from 'react';

const Header = ({ onClick, temp, description, name }) => {
  return(
<<<<<<< HEAD
    <section id="header" onClick={() => onClick ()}>
      <p id="current-local-forecast">Current forecast for <span id="city-name">{name}</span>: {temp} degrees and {description}</p>
      <p id="view-extended-forecast">Rainy & Sad</p>
    </section>
=======
    <div>
      <h2 className="page-title">Weather Tracker</h2>
      <section id="header">
        <p id="current-local-forecast">Current forecast for <span id="city-name">Denver</span></p>
        <p id="view-extended-forecast">View extended forecast</p>
      </section>
    </div>
>>>>>>> master
  )
}

export default Header;
