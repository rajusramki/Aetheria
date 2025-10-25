// src/components/CategoryShowcase.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// 🚨 Keep these imports, as they now point to the actual image data
import Men from '../assets/catagory/men.jpg'
import Women from '../assets/catagory/women.jpg'
import Unisex from '../assets/catagory/unisex.jpg'

// 🚨 FIX: Update the 'image' property to use the imported variables
const categories = [
  {
    // Use the imported 'Men' variable instead of the placeholder path
    image: Men, 
    title: "Men's Streetwear.",
    subtitle: "Defined by motion. Designed to move.",
  },
  {
    // Use the imported 'Women' variable instead of the placeholder path
    image: Women,
    title: "Women's Luxury.",
    subtitle: "Where strength meets elegance.",
  },
  {
    // Use the imported 'Unisex' variable instead of the placeholder path
    image: Unisex,
    title: "Unisex Casual.",
    subtitle: "Made for every rhythm.",
  },
];

const CategoryShowcase = () => {
  return (
    <section className="category-showcase py-5">
      <Container className="my-4">
        <Row className="justify-content-center">
          {categories.map((category, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="border-0 rounded-0 p-0 text-start">
                {/* Image display logic is correct */}
                <div style={{ height: '400px', overflow: 'hidden', borderRadius: '8px' }}>
                  <Card.Img 
                    variant="top" 
                    // This is where the variable 'category.image' is used
                    src={category.image} 
                    alt={category.title} 
                    className="rounded-0"
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </div>
                
                {/* Text Content */}
                <Card.Body className="px-0 pt-3 pb-0">
                  <h4 className="fw-bold mb-1">{category.title}</h4>
                  <p className="text-muted small">{category.subtitle}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CategoryShowcase;