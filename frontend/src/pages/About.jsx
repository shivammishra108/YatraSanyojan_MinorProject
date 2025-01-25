// components/About.js
import React from 'react';
import CommonSection from '../shared/CommonSection.jsx';
import MissionVision from '../components/about/mission-vission/MissionVision.jsx';
import Services from '../components/about/services/Services.jsx'
import TravelPackages from '../components/about/travelPakage/TravelPackages.jsx';
import Team from '../components/about/team/Team.jsx';
import Gallery from '../components/Image-gallery/MasonryImagesGallery.jsx';
import HospitalConnect from '../components/about/HospitalContact/HospitalContact.jsx';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <CommonSection title={'About US'}  />
      <TravelPackages />
      <HospitalConnect />
      <Services />
      <MissionVision />
      <Team />
      <Gallery />
    </div>
  );
};

export default About;
