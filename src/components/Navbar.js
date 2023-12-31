// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="logo-container">
        <h1>VS</h1><h4>[Virtual_studies]</h4>
      </div>
      <div className={`menu-toggle ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={toggleNav}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={toggleNav}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={toggleNav}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;



