// components/About.js
import React from 'react';
import Header from '../components/about/header/Header.jsx';
import MissionVision from '../components/about/mission-vission/MissionVision.jsx';
import Services from '../components/about/services/Services.jsx'
import TravelPackages from '../components/about/travelPakage/TravelPackages.jsx';
import Team from '../components/about/team/Team.jsx';
import Gallery from '../components/Image-gallery/MasonryImagesGallery.jsx';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Services />
      <TravelPackages />
      <MissionVision />
      <Team />
      <Gallery />
    </div>
  );
};

export default About;
