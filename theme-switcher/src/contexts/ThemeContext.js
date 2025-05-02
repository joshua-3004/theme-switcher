// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a context with default values
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Initialize theme state - check localStorage first, default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Also update the data-theme attribute on document body for CSS variables
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};