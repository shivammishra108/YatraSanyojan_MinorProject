// src/components/about/header/Header.jsx
import React from 'react';
import './header.css'; // Ensure this points to your CSS file

const Header = () => {
  return (
    <header className="about-header">
      <div className="hero-content">
        <h1 className="hero-title">Discover Your Next Adventure</h1>
        <p className="hero-subtitle">Explore the world with Yatra Sanyojann</p>
      </div>
      <div className="globe-container">
        <div className="globe" />
      </div>
    </header>
  );
};

export default Header;
