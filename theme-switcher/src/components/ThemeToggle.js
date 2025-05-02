// src/components/ThemeToggle.js
import React from 'react';
import useTheme from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? '🌙' : '☀️'} 
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;