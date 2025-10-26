// src/components/CategoryShowcase.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Imports remain the same
import Men from '../assets/catagory/men.jpg'
import Women from '../assets/catagory/women.jpg'
import Unisex from '../assets/catagory/unisex.jpg'

const categories = [
  {
    image: Men, 
    title: "Men's Streetwear.",
    subtitle: (
      <p style={{lineHeight:'16px'}}>
      Defined by motion.<br/> Designed to move.
      </p>
    )
  },
  {
    image: Women,
    title: "Women's Luxury.",
    subtitle: (
    <p style={{lineHeight:'16px'}}>
    Where strength <br/> meets elegance.
    </p>)
  },
  {
    image: Unisex,
    title: "Unisex Casual.",
    subtitle: "Made for every rhythm.",
  },
];

// --- CSS Keyframes and Styles for Slow & Smooth Crop Up Open Animation ---
const styles = `
  /* Keyframes for the Crop Up Open animation (No change here) */
  @keyframes cropUpOpen {
    from {
      opacity: 0;
      max-height: 0; /* Starts as a thin line */
      transform: translateY(50px); /* Starts slightly below position */
    }
    to {
      opacity: 1;
      max-height: 500px; /* Needs to be larger than actual height for smooth transition */
      transform: translateY(0);
    }
  }

  /* Style for the image container - keeps the image from spilling out on hover */
  .image-hover-container {
    height: 400px; 
    overflow: hidden; 
    border-radius: 8px;
  }

  /* Image style for the zoom effect */
  .card-img-top-zoom {
    transition: transform 0.8s ease-out; /* Increased transition for smoother zoom on hover */
  }
  .card-img-top-zoom:hover {
    transform: scale(1.05); /* Zoom in on hover */
  }
  
  /* Initial hidden state for the scroll trigger */
  .showcase-item {
    opacity: 0;
    max-height: 0; /* Crucial: hide initially */
    overflow: hidden; /* Prevent content from showing prematurely */
    will-change: opacity, transform, max-height;
  }

  /* Animation class applied when visible */
  .showcase-item.visible {
    /* KEY CHANGES: 
       1. Increased duration to 1.5s for slowness.
       2. Changed easing function to 'ease-out' for smoothness (slows down toward the end).
       3. Increased the staggering delay to 0.3s in the component logic below. 
    */
    animation: cropUpOpen 1.5s ease-out forwards;
  }
`;

const CategoryShowcase = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="category-showcase py-4" ref={sectionRef}>
      <style>{styles}</style> {/* Inject CSS for animation and hover effect */}

      <Container>
        <Row className="justify-content-center">
          {categories.map((category, index) => (
            <Col md={4} key={index} className="mb-4">
              
              {/* Apply scroll-triggered animation and staggering */}
              <div 
                className={`showcase-item ${isVisible ? 'visible' : ''}`}
                // KEY CHANGE: Increased staggering delay to 0.3s for a more leisurely sequence
                style={{ animationDelay: isVisible ? `${0.3 + index * 0.3}s` : '0s' }}
              >
                <Card className="border-0 rounded-0 p-0 text-start">
                  
                  {/* Image Container for Hover Effect */}
                  <div className="image-hover-container">
                    <Card.Img 
                      variant="top" 
                      src={category.image} 
                      alt={category.title} 
                      className="rounded-0 card-img-top-zoom" 
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  </div>
                  
                  {/* Text Content is part of the animated div */}
                  <Card.Body className="px-0 pt-3 pb-0">
                    <h4 className="fw-bold mb-1">{category.title}</h4>
                    <p className="text-muted small">{category.subtitle}</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CategoryShowcase;