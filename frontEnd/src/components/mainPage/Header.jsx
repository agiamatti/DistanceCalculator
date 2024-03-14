import React from 'react';
import NavigationBtn from './NavigationBtn';

function Header() {
  return (
    <div className='header-card'>
      <div className='header-title'>
        <h1 className='title'>Distance Calculator</h1>
        <h2 className='subtitle'>Prototype web application for calculating the distance between addresses.</h2>
      </div>
      <NavigationBtn />
    </div>
  );
}

export default Header;
