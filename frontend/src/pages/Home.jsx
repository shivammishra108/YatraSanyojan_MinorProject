import React from 'react';
import '../styles/home.css';

import { Container, Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>

  {/* ==============hero section start================*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You GO'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Travelling opens the door to creating <span className='highlight'>memories</span></h1>
              <p> <b>Yatra Sanyojan</b>: <i>‘Gateway to effortless travel and local adventures’</i>, represents a 
                significant advancement in the travel industry by offering a sophisticated platform 
                that caters to the diverse needs of both travellers and service providers.</p>
            </div>
          </Col>
          
          <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
          </Col>
          <Col lg='2'>
          <div className="hero__img-box hero__video-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
          </Col>
          <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section> 
    {/* ==============hero section start================*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className="services__title">We offer our best services</h2>
          </Col>

          <ServiceList />

        </Row>
      </Container>
    </section>
    

    {/* ==============featured tour section start================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className='featured__tour-title'>Our Featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* ==============featured tour section end================*/}


    {/* ==============experience section start================*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>With our all experience <br /> we will serve you</h2>
              <p><br /> We believe in creating memorable travel experiences tailored to your needs. <br />
                      Our team works tirelessly to ensure you find the perfect accommodations <br />
                      and enjoy seamless journeys. <br /> 
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>3k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="experience_img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ==============experience section end================*/}


    {/* ============== gallary section start================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ============== gallary section end================*/}


    {/* ============== testimonial section start================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ============== testimonial section end================*/}
    <Newsletter />
  </>
}

export default Home