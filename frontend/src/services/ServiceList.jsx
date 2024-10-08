import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Analyse the weather , is it suitable for you or not."
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Our experienced tour guides provide local insights and ensure you have an enriching experience at every destination."
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "We create personalized itineraries tailored to your interests and preferences, ensuring your trip is uniquely yours."
  },
]

const ServiceList = () => {
  return(
    <>
    {servicesData.map((item, index)=>(
      <Col lg="3" key={index}>
        <ServiceCard item={item} />
      </Col>
    ))}
    </>
  );
}

export default ServiceList