// components/Testimonials.js
import React from 'react';
import './testimonial.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>“GlobalVista made my dream vacation come true!”</p>
          <h3>– Sarah K.</h3>
        </div>
        <div className="testimonial-card">
          <p>“The best travel experience I've ever had!”</p>
          <h3>– John D.</h3>
        </div>
        <div className="testimonial-card">
          <p>“Exceptional service and great deals!”</p>
          <h3>– Emily R.</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
