import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Ecommerce Clone</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
