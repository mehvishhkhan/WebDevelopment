// Header.js
import React from 'react';

function Header() {
  return (
    <div className="top-bar">
      <div className="logo">
        <img src="/images/logo1.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="icons">
        <a href="#" className="cart-icon">
          <i className="bi bi-cart2"></i>
          <div className="icon-text">Cart</div>
        </a>
        <a href="#" className="person-icon">
          <i className="bi bi-person-circle"></i>
          <div className="icon-text" id="guest-welcome">
            Hi Guest
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
