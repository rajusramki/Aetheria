// src/components/DualImageShowcase.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Accessories from '../assets/catagory/accessories.jpg'; 
import Editorial from '../assets/catagory/editorial.jpg';

const showcaseItems = [
  {
    image: Accessories,
    title: "Accessories.",
    subtitle: "Watches, bags—cinematic adaptation.",
    link: "#accessories"
  },
  {
    image: Editorial,
    title: "(Editorial Carousel)",
    subtitle: "Cinematic photography, overlays, and stories.",
    link: "#editorial"
  },
];

const DualImageShowcase = () => {
  return (
    <section className="dual-image-showcase py-5">
      <Container className="my-4">
        <Row className="justify-content-center">
          {showcaseItems.map((item, index) => (
            <Col md={6} key={index} className="mb-4">
              {/* 🚨 FIX: Card class updated to border-0 (no border) */}
              {/* Added shadow-sm back to the Card to simulate the card container shadow */}
              <Card className="border-0" style={{ overflow: 'visible' }}>
                <a href={item.link} aria-label={`View ${item.title}`} className="text-decoration-none text-dark">
                  
                  {/* Image Wrapper: Applies overflow:hidden and the rounded corners/shadow to the image block */}
                  <div 
                    style={{ 
                      height: '400px', 
                      overflow: 'hidden', 
                      borderRadius: '8px', // Apply rounding
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Optional subtle shadow on the image container
                    }} 
                    className="hover-grow" // Custom class for hover effect
                  >
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      alt={item.title} 
                      className="rounded-0" // Image itself is not rounded, the wrapper handles it
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  </div>
                </a>
                
                {/* Text Content */}
                <Card.Body className="px-0 pt-3 pb-0">
                  <h4 className="fw-bold mb-1">{item.title}</h4>
                  <p className="text-muted small">{item.subtitle}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DualImageShowcase;