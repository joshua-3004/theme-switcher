// src/components/Navbar.js
import React from 'react';
import ThemeToggle from './ThemeToggle';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        <h1>Theme Switcher App</h1>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;