import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo-baca.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        <h2>RUANG BACA</h2>
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>HOME</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>ABOUT</NavLink>
        <NavLink to="/Category" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>KATEGORI</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>CONTACT</NavLink>
      </nav>

      {/* Overlay untuk menutup menu saat klik di luar */}
      {isMenuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;
