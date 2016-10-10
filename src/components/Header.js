import React from 'react';

const Header = ({ onClick, temp, description, name }) => {
  return(
    <section id="header" onClick={() => onClick ()}>
      <p id="current-local-forecast">Current forecast for <span id="city-name">{name}</span>: {temp} degrees and {description}</p>
      <p id="view-extended-forecast">Rainy & Sad</p>
    </section>
  )
}

export default Header;
