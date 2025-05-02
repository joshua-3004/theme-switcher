// src/components/Content.js
import React from 'react';
import useTheme from '../hooks/useTheme';

const Content = () => {
  const { theme } = useTheme();

  return (
    <main className={`content ${theme}`}>
      <div className="content-container">
        <h2>Context API Theme Switcher</h2>
        <p>
          This is a demonstration of using React's Context API to manage a global theme state
          across multiple components.
        </p>
        <p>
          The current theme is: <strong>{theme.charAt(0).toUpperCase() + theme.slice(1)}</strong>
        </p>
        <div className="feature-card">
          <h3>Features Implemented</h3>
          <ul>
            <li>Theme Context using Context API</li>
            <li>Custom useTheme hook for state management</li>
            <li>Theme persistence with localStorage</li>
            <li>Styled components based on theme</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Content;