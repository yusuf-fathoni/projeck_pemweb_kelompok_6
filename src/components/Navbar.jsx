import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-3 py-1 transition-colors duration-200 ${
      isActive ? 'text-blue-500 font-semibold' : 'text-white hover:text-blue-300'
    }`;

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white">
        <div className="flex items-center gap-3">
          <img
            src="/assets/img/logo.jpeg"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-xl font-bold">RUANG BACA</span>
        </div>
        <div className="flex gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/category" className={linkClass}>Category</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
