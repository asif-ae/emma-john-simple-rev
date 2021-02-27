import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="main-logo">
        <a href="/"><img src={logo} alt=""/></a>
      </div>
      <nav className="navbar">
        <a href="/shop"><div className="nav-div">Shop</div></a>
        <a href="/review"><div className="nav-div">Order Review</div></a>
        <a href="/manage"><div className="nav-div">Manage Inventory</div></a>
      </nav>
    </div>
  );
};

export default Header;