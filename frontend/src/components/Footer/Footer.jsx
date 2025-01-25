import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
];

const quick__links2=[
  {
    path:'/help',
    display:'Help Center'
  },
  {
    path:'/policy',
    display:'Our Policy'
  },
  {
    path:'/register',
    display:'Register'
  },
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">

              <img src={logo} alt="" />
              <p>Gateway to effortless travel and local adventures.</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                <a href="https://www.linkedin.com/in/shivammishra108" target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                </span>
                <span>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <i className="ri-github-fill"></i>
                </a>
                </span>
                <span>
                <a href="https://www.instagram.com/khatri.shaily_?igsh=MW11cnI1ampldTltYQ==" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-fill"></i>
                </a>
                </span>
                <span>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='9' className="footer-links-container">
            <Col lg='6' md='4'>
              <h5 className="footer__link-title">Discover</h5>
              <ListGroup className='footer__quick-links'>
                {
                  quick__links.map((item,index)=>(
                    <ListGroupItem key={index} className={'ps-0 border-0'}>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
          </ListGroup>
            </Col>
            <Col lg='6' md='4'>
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup className='footer__quick-links'>
                {
                  quick__links2.map((item,index)=>(
                    <ListGroupItem key={index} className={'ps-0 border-0'}>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
          </ListGroup>
            </Col>
            <Col lg='6' md='4'>
              <h5 className="footer__link-title">Contact</h5>
              <ListGroup className='footer__quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i className="ri-map-pin-line"></i></span>
                    Address:
                  </h6>
                  <p className="mb-0">
                  <a href="https://www.google.com/maps/search/?api=1&query=Bangkok,+Thailand" target="_blank" rel="noopener noreferrer">Bangkok, Thailand</a>
                  </p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i className="ri-mail-line"></i></span>
                    Email:
                  </h6>
                  <p className="mb-0">
                    <a href="mailto:yatraSanyojan@gmail.com" target="_blank" rel="noopener noreferrer">yatraSanyojan@gmail.com</a>
                  </p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i className="ri-phone-fill"></i></span>
                    Phone:
                  </h6>
                  <p className="mb-0">
                   <a href="tel:+917267024717" target="_blank" rel="noopener noreferrer">+91 7267024717</a>
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Col>
          <Col lg='12' className="text-center pt-5">
            <p className="copyright">Copyright {year}, design and develop by Shivam Mishra. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;