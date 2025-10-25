// src/components/PartnerLogoBar.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InspirationOne from '../assets/inspiringlogo/cred.png';
import InspirationTwo from '../assets/inspiringlogo/noon.png';
import InspirationThree from '../assets/inspiringlogo/yellowface.png'

const logos = [
  { src: InspirationOne, alt: "CRED Logo" },
  { src: InspirationTwo, alt: "Noon Logo" },
  { src: InspirationThree, alt: "Yellow Face Logo" },
];

const PartnerLogoBar = () => {
  return (
    <section className="partner-logo-bar py-5">
      <Container>
        {/* Title */}
        <Row className="justify-content-center mb-4">
          <Col md={12} className="text-center">
            <h5 className="text-uppercase text-secondary fw-normal">our inspiration</h5>
          </Col>
        </Row>
        
        {/* Logos */}
        <Row className="align-items-center justify-content-center">
          {logos.map((logo, index) => (
            <Col xs={4} sm={3} md={2} key={index} className="text-center p-3">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="img-fluid"
                // Custom style to ensure consistent logo size and prevent stretching
                style={{ maxHeight: '60px', width: 'auto' }} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PartnerLogoBar;