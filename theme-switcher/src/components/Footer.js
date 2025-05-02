// src/components/Footer.js
import React from 'react';
import useTheme from '../hooks/useTheme';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Theme Switcher App</p>
        <p>Built with React Context API and Custom Hooks</p>
      </div>
    </footer>
  );
};

export default Footer;