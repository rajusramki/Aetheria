// src/components/CtaBanner.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CtaBannerImage from '../assets/ctabanner.jpg'

const CtaBanner = () => {
  return (
    <section className="cta-banner py-5 my-5">
      <Container>
        <Row>
          <Col>
            {/* The main container for the image and button */}
            <div 
              className="position-relative overflow-hidden shadow-lg" 
              style={{ borderRadius: '10px' }} // Subtle rounding of the container
            >
              {/* Image element */}
              <img 
                src={CtaBannerImage}
                alt="Dramatic close-up model in white sunglasses" 
                className="img-fluid w-100"
                style={{ 
                  height: '400px', // Fixed height for visual impact
                  objectFit: 'cover', 
                  objectPosition: 'center top' // Focus on the upper half of the image
                }}
              />
              
              {/* Button Overlay - Centered at the bottom half */}
              <div 
                className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-end p-5 "
                style={{ pointerEvents: 'none' }} // Allow clicks only on the button, not the whole div
              >
                <Button 
                  variant="light" 
                  size="sm" 
                  className="rounded-0 text-uppercase fw-bold"
                  style={{ pointerEvents: 'auto', fontSize:'10px' }} // Re-enable clicks for the button itself
                >
                  JOIN THE DROP
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaBanner;