import React from 'react';

const Header = ({ onClick, temp, outlook }) => {
  return(
    <section id="header" onClick={() => onClick()}>
      <p id="current-local-forecast">Current forecast for <span id="city-name">Redux</span>: {outlook} {temp}</p>
      <p id="view-extended-forecast">Rainy & Sad</p>
    </section>
  )
}

export default Header;
