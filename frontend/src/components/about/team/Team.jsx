// components/Team.js
import React from 'react';
import shivam from '../../../assets/images/ava-2.jpg';
import shaily from '../../../assets/images/ava-1.jpg';
import './team.css';

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <p>The thought pioneers that inspire & shape us</p>
      <br />
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
      <div className='team-content'>
          <p>Established in <strong>2024</strong> as a <i>start-up</i> by <u><em>Shivam Mishra</em>, <em>Shaily Bahel</em> and <em>Utkarsh Dubey</em></u>.
           <br />
          The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app 
            can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts,
             Fare Calendar, MyRewardsProgram, MyWallet,
             and many more while updating them from time to time to better suit our customers’ evolving needs and demands.</p>
        </div>
    </section>
  );
};

export default Team;
