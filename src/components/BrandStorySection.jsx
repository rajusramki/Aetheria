// src/components/BrandStorySection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AetheriaLogo from '../assets/logo/aetherialogo.png'

const BrandStorySection = () => {
  return (
    <section className="brand-story-section py-5 my-5">
      <Container style={{backgroundColor:'#f7f7f7', borderRadius:'8px'}}>
        <Row className="align-items-center">
          
          {/* Left Column: Text Content */}
          <Col md={6}>
            <div className="p-3 p-md-5">
              <h3 className="mb-4 fw-bold sm-js">The Code of Unapologetic Style</h3>
              
              <p className="mb-4 text-secondary sm-js">
                Crafted for creators, rebels, and dreamers — Aetheria represents a culture of expression. Every stitch, silhouette, and tone reflects a story of contrast: street meets sophistication, raw meets refined.
              </p>
              
              <p className="text-secondary sm-js">
                Bold, modern, and cinematic — Aetheria clothes transcend fashion to become a movement. Step into unapologetic confidence with each piece you wear.
              </p>
            </div>
          </Col>

          {/* Right Column: Large AETHERIA Image/Logo */}
          <Col md={6} className="text-center text-md-start">
            {/* Placeholder for the large, graphic AETHERIA logo image */}
            <img 
              src={AetheriaLogo}
              alt="AETHERIA Brand Logo" 
              className="img-fluid" 
              style={{ maxWidth: '100%', height: 'auto', opacity: 0.8 }} // Reduced opacity to match the gray/faded look
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default BrandStorySection;