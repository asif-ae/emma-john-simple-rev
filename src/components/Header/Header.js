import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="main-logo">
        <img src={logo} alt=""/>
      </div>
    </div>
  );
};

export default Header;