import React, { useState } from 'react';
import './Navbar.css';

const menuItems = ['Home', 'Markets', 'Portfolio', 'Invest', 'More'];

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="groww-navbar">
      <div className="nav-left">
        {menuItems.map((item, i) => (
          <button
            key={item}
            className={`nav-item ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {item}
          </button>
        ))}
        <div
          className="nav-indicator"
          style={{ transform: `translateX(${active * 100}%)` }}
        />
      </div>
      <div className="nav-right">
        <span>Hello, User 👋</span>
      </div>
    </nav>
  );
};

export default Navbar;
