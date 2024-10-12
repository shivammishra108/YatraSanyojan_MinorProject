import React, { useState } from 'react';
import '../styles/helpCenter.css';
import supportImage from '../assets/images/support.jpeg';

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. How do I book a tour?",
      answer: "You can book a tour by visiting the Tours section on our website, selecting your desired tour, and following the booking instructions."
    },
    {
      question: "2. What is your cancellation policy?",
      answer: "Our cancellation policy allows for a full refund if canceled 48 hours before the tour."
    },
    {
      question: "3. How can I contact customer support?",
      answer: "You can reach our customer support via email at support@example.com or call us at +91 7267024717."
    },
    {
      question: "4. What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
    },
    {
      question: "5. Are your tours family-friendly?",
      answer: "Yes! Many of our tours are designed to be family-friendly."
    }
  ];

  const filteredFAQs = faqs.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="help-center">
      <div className="intro">
        <h1>Welcome to Our Help Center</h1>
        <p>Your satisfaction is our priority. Explore the resources below to find answers or reach out to us for assistance!</p>
        <img src={supportImage} alt="Support" className="support-image" />
      </div>

      <input 
        type="text" 
        placeholder="Search FAQs..." 
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="section-divider" />

      <section className="faq">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-description">
          <p>Have questions? We have answers! Check out our frequently asked questions below.</p>
        </div>
        {filteredFAQs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9660;</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <div className="section-divider" />

      <section className="customer-care">
        <h2>Customer Care</h2>
        <p>If you have any questions or need assistance, our customer care team is here to help:</p>
        <ul>
          <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
          <li>Phone: <a href="tel:+917267024717">+91 7267024717</a></li>
          <li>Operating Hours: Monday to Friday, 9 AM to 6 PM</li>
        </ul>
      </section>

      <div className="section-divider" />

      <section className="travel-tips">
        <h2>Travel Tips and Guides</h2>
        <div className="tip-item">
          <h3>1. Plan Your Itinerary</h3>
          <p>Research destinations, activities, and accommodations ahead of time to maximize your travel experience.</p>
        </div>
        <div className="tip-item">
          <h3>2. Pack Smart</h3>
          <p>Make a packing list and pack light. Remember essentials like chargers, travel documents, and personal items.</p>
        </div>
        <div className="tip-item">
          <h3>3. Stay Connected</h3>
          <p>Consider getting a local SIM card or an international phone plan to stay connected while traveling.</p>
        </div>
        <div className="tip-item">
          <h3>4. Learn Basic Phrases</h3>
          <p>Learn a few basic phrases in the local language to enhance your interaction with locals and show respect for their culture.</p>
        </div>
        <div className="tip-item">
          <h3>5. Stay Safe</h3>
          <p>Keep your belongings secure, be aware of your surroundings, and know emergency contacts in the area you're visiting.</p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="download-resources">
        <h2>Downloadable Resources</h2>
        <p>Get our travel guides in PDF format:</p>
        <ul>
          <li><a href="/guides/travel-guide.pdf" download>Download Travel Guide</a></li>
          <li><a href="/guides/tips.pdf" download>Download Travel Tips</a></li>
        </ul>
      </section>

      <div className="section-divider" />
      
    </div>
  );
};

export default HelpCenter;
