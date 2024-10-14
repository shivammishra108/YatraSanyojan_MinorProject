// src/components/MissionVision.js
import React from 'react';
import { FaPlane, FaRegHandshake, FaCompass } from 'react-icons/fa';
import './missionVission.css';

const MissionVision = () => {


  return (
    <section className="mission-vision-section">
      <h2>Our Mission, Vision, and Values</h2>
      <div className="mv-container">
        <div className="mv-box">
          <FaPlane className="mv-icon" />
          <h3>Our Mission</h3>
          <p>Making travel simple, accessible, and enjoyable for every adventurer.</p>
        </div>
        <div className="mv-box">
          <FaRegHandshake className="mv-icon" />
          <h3>Our Vision</h3>
          <p>Building lasting memories by delivering exceptional travel experiences.</p>
        </div>
        <div className="mv-box">
          <FaCompass className="mv-icon" />
          <h3>Our Values</h3>
          <p>Trust, transparency, and customer service are at the core of what we do.</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
