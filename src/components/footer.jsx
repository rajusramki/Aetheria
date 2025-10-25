// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  // Common style for links in the main columns
  const linkStyle = { color: '#adb5bd', fontSize: '0.9rem', lineHeight: '2' }; // Light gray links, more space between lines

  // Common style for links in the bottom bar
  const bottomLinkStyle = { color: '#6c757d', fontSize: '0.8rem' }; // Darker gray, smaller text

  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        {/* Top Section: Large AETHERIA Logo/Text */}
        <Row className="justify-content-center mb-5">
          <Col md={12} className="text-center">
            {/* Using a placeholder for the large graphic text logo */}
            <h1 
              className="display-1 fw-bold text-uppercase" 
              style={{ 
                color: 'transparent', 
                fontSize: 'clamp(5rem, 15vw, 18rem)', 
                lineHeight: '1',
                WebkitTextStroke: '1px #777', // Outline effect for the gradient/glow
                backgroundImage: 'linear-gradient(to top, #ccc, #fff)', // Gradient effect
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                opacity: 0.8
              }}
            >
              AETHERIA
            </h1>
          </Col>
        </Row>

        {/* Middle Section: Navigation Columns */}
        <Row className="justify-content-center text-center text-md-start mb-5">
          {/* Aetheria Column (Social/Brand Links) */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h6 className="text-white fw-bold mb-3">Aetheria</h6>
            <Nav className="flex-column">
              <Nav.Link href="#instagram" style={linkStyle} className="p-0">Instagram</Nav.Link>
              <Nav.Link href="#facebook" style={linkStyle} className="p-0">Facebook</Nav.Link>
              <Nav.Link href="#linkedin" style={linkStyle} className="p-0">LinkedIn</Nav.Link>
            </Nav>
          </Col>

          {/* Shop Column */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h6 className="text-white fw-bold mb-3">Shop</h6>
            <Nav className="flex-column">
              <Nav.Link href="#mens" style={linkStyle} className="p-0">Men's</Nav.Link>
              <Nav.Link href="#womens" style={linkStyle} className="p-0">Women's</Nav.Link>
              <Nav.Link href="#unisex" style={linkStyle} className="p-0">Unisex</Nav.Link>
            </Nav>
          </Col>

          {/* Support Column */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h6 className="text-white fw-bold mb-3">Support</h6>
            <Nav className="flex-column">
              <Nav.Link href="#faq" style={linkStyle} className="p-0">FAQ</Nav.Link>
              <Nav.Link href="#contact" style={linkStyle} className="p-0">Contact</Nav.Link>
              <Nav.Link href="#policy" style={linkStyle} className="p-0">Policy</Nav.Link>
            </Nav>
          </Col>
          
          {/* Empty column for spacing/pushing content left (Bootstrap typically uses 12 columns, 2*3=6, leaving 6 columns for spacing) */}
          <Col md={6} className="d-none d-md-block"></Col> 
        </Row>
        
        {/* Bottom Bar: Legal Links and Copyright */}
        <div className="pt-3 border-top border-secondary">
          <Row className="align-items-center">
            {/* Left side: Legal Links */}
            <Col md={8} className="text-center text-md-start mb-2 mb-md-0">
              <Nav className="d-inline-flex flex-wrap justify-content-center justify-content-md-start">
                <Nav.Link href="#privacy" style={bottomLinkStyle} className="p-0 me-3">Privacy Policy</Nav.Link>
                <Nav.Link href="#terms" style={bottomLinkStyle} className="p-0 me-3">Terms of Service</Nav.Link>
                <Nav.Link href="#sale-terms" style={bottomLinkStyle} className="p-0 me-3">Terms & Conditions of Sale</Nav.Link>
                <Nav.Link href="#cookies" style={bottomLinkStyle} className="p-0 me-3">Cookies</Nav.Link>
              </Nav>
            </Col>
            
            {/* Right side: Copyright */}
            <Col md={4} className="text-center text-md-end">
              <small style={bottomLinkStyle}>
                &copy; {new Date().getFullYear()} All rights reserved to Aetheria
              </small>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;