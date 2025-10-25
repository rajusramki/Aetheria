// src/components/EditorialTestimonial.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CEO from '../assets/ceo.jpg'
import CeoSignature from '../assets/ceosignature.png'

const EditorialTestimonial = () => {
  return (
    <section className="editorial-testimonial py-5 my-5 bg-white">
      <Container>
        <Row className="align-items-center justify-content-center">
          
          {/* Left Column: Text Content and Signature */}
          <Col md={6}>
            <div className="p-3 p-md-5">
              <h3 className="mb-4 fw-bold">The Aetheria Edit</h3>
              
              <p className="text-secondary mb-3">
                Visual storytelling meets design precision. From city lights to timeless silhouettes — experience fashion beyond the surface.
              </p>
              
              <p className="text-secondary mb-3">
                Editorial images highlight sharp contrasts, glassy overlays, and a neon-lit perspective, offering a magazine-quality journey through the world of Aetheria.
              </p>
              
              <p className="text-secondary mb-5">
                Each frame evokes mood, movement, and the allure of the street, all refined with premium aesthetics.
              </p>
              
              {/* Signature Image Placeholder */}
              <div className="signature-area mt-4">
                <img 
                  src={CeoSignature}
                  alt="Signature" 
                  style={{ width: '150px', height: 'auto', filter: 'invert(0)' }} 
                />
              </div>
            </div>
          </Col>

          {/* Right Column: Portrait Image */}
          <Col md={6}>
            <div className="image-wrapper p-3 p-md-5">
              <img 
                src={CEO} 
                alt="Portrait of Team Member/Model" 
                className="img-fluid rounded shadow-lg" 
                style={{ 
                  objectFit: 'cover', 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '8px', // Custom border radius to match the subtle rounding
                  filter: 'grayscale(100%)' // Apply grayscale for the black and white effect
                }} 
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default EditorialTestimonial;