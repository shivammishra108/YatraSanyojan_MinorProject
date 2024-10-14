// components/Team.js
import React from 'react';
import shivam from '../../../assets/images/ava-2.jpg';
import shaily from '../../../assets/images/ava-1.jpg';
import './team.css';

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src={shivam} alt="Team Member" />
          <h3>Shivam Mishra</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src={shaily} alt="Team Member" />
          <h3>Shaily Bahel</h3>
          <p>Chief Operations Officer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
