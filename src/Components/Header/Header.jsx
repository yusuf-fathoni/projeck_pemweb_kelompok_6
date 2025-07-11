import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo-baca.jpeg';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        <h2>RUANG BACA</h2>
      </div>
      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>ABOUT</NavLink>
        <NavLink to="/category" className={({ isActive }) => isActive ? 'active' : ''}>KATEGORI</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>CONTACT</NavLink>

        <button onClick={handleProfileClick} className="profile-btn">
          {user ? 'PROFILE' : 'LOGIN'}
        </button>
      </nav>
    </header>
  );
};

export default Header;