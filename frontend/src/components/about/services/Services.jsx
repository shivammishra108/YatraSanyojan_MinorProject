// src/components/about/services/Services.jsx
import React from 'react';
import { FaSuitcaseRolling, FaHospital, FaCar, FaUtensils } from 'react-icons/fa';
import './services.css';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <div className="service-icon">
            <FaSuitcaseRolling />
          </div>
          <div className="service-content">
            <h3>Customizable Travel Packages</h3>
            <p>
              Tailor-made travel packages designed to suit every type of traveler,
              ensuring memorable adventures that fit your needs and preferences.
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <FaHospital />
          </div>
          <div className="service-content">
            <h3>Medical Facilities</h3>
            <p>
              Comprehensive medical assistance available for travelers to ensure
              peace of mind during their journey.
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <FaCar />
          </div>
          <div className="service-content">
            <h3>Transportation</h3>
            <p>
              Efficient and reliable transportation options, including airport pickups
              and car rentals to make your travels seamless.
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <FaUtensils />
          </div>
          <div className="service-content">
            <h3>Hotels and Restaurants</h3>
            <p>
              A curated selection of top hotels and restaurants to satisfy every taste
              and preference, ensuring a delightful dining experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
