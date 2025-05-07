import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // pastikan file CSS asli kamu ada
import logo from '../assets/logo.png'; // sesuaikan dengan struktur aslimu

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo Ruang Baca" />
      </div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === '/category' ? 'active' : ''}>
          <Link to="/category">Category</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
