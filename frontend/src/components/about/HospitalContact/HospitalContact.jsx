import React, { useEffect, useState } from "react";
import "./HospitalContact.css";

const HospitalContact = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const features = [
      "Trusted healthcare partners",
      "Emergency-ready connections",
      "Location-based assistance",
      "Peace of mind while traveling",
      "Round-the-clock support",
    ];
  
    // Auto-slider functionality
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }, [features.length]);
  
    return (
      <section className="slider-section">
        <div className="slider-card">
          <h2 className="slider-title">Healthcare Connectivity</h2>
          <p className="slider-description">
            We’re enhancing travel safety by offering seamless access to 
            healthcare providers at your destination.
          </p>
  
          <div className="slider-container">
            {features.map((feature, index) => (
              <p
                key={index}
                className={`slider-item ${
                  index === currentIndex ? "active" : "inactive"
                }`}
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default HospitalContact