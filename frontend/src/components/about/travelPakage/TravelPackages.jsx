// src/components/about/travel-plans/TravelPlans.jsx
import React from 'react';
import './travel-packages.css';
import { FaUserFriends, FaHeart, FaCompass } from 'react-icons/fa';

// Sample Data for Travel Plans
const travelPlansData = [
  {
    id: 1,
    title: 'Solo Adventures',
    description: 'Embark on a journey of self-discovery and adventure tailored just for you.',
    icon: <FaCompass className="plan-icon" />,
  },
  {
    id: 2,
    title: 'Couple Packages',
    description: 'Create unforgettable moments with your loved one through our romantic packages.',
    icon: <FaHeart className="plan-icon" />,
  },
  {
    id: 3,
    title: 'Family and Friends',
    description: 'Enjoy great memories with family and friends with our specially crafted plans.',
    icon: <FaUserFriends className="plan-icon" />,
  },
];

const TravelPackages = () => {
  return (
    <section className="travel-plans-section">
      <h2>Discover Your Travel Plans</h2>
      <div className="plans-container">
        {travelPlansData.map((plan) => (
          <div key={plan.id} className="plan-item">
            <div className="plan-inner">
              <div className="plan-front">
                {plan.icon}
                <h3>{plan.title}</h3>
                <p className="plan-details">{plan.description}</p>
              </div>
              <div className="plan-back">
                <h3>{plan.title} - More Info</h3>
                <p>Discover more about this plan and how it can transform your travels.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelPackages;
