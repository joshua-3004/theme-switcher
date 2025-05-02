// src/App.js
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import './theme.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;