// src/components/SimpleNavBar.jsx
import React from 'react';
// Import only the necessary components
import { Container, Nav, Button, Row, Col, Navbar } from 'react-bootstrap'; 
// Assuming your logo is correctly placed and imported
import AetheriaLogo from '../assets/logo/logo.png'; 

const SimpleNavBar = () => {
  return (
    <Container className="py-4">
      {/* The entire bar is enclosed in a box with a subtle border/shadow */}
      <div className="border p-3">
        <Row className="align-items-center justify-content-between">
          
          {/* Left Section: Nav Links (Visible only on Desktop/md+) */}
          {/* Use d-none to hide on mobile, and d-md-block to show on desktop */}
          <Col xs={4} className="d-none d-md-block">
            <Nav className="gap-4">
              <Nav.Link href="#aetheria" className="text-dark fw-bold px-0">
                Aetheria
              </Nav.Link>
              <Nav.Link href="#about" className="text-dark px-0">
                About
              </Nav.Link>
            </Nav>
          </Col>

          {/* Center Section: Logo Image */}
          {/* On mobile (xs), the logo takes 6 columns and is centered. 
              On desktop (md+), it takes the full 4 columns and is centered. */}
          <Col xs={2} md={4} className="text-center">
            {/* We can use a simple <a> tag instead of Navbar.Brand since we're not using the full Navbar */}
            <a href="#home" className="navbar-brand">
              <img 
                src={AetheriaLogo} 
                alt="Aetheria Logo" 
                style={{ height: '40px', width: 'auto' }} 
                className="d-inline-block align-top"
              />
            </a>
          </Col>

          {/* Right Section: CTA Button */}
          {/* On mobile (xs), the button takes 6 columns and is aligned right, balancing the logo.
              On desktop (md+), it takes 4 columns and is aligned right. */}
          <Col xs={6} md={4} className="text-end">
            <Button variant="dark" className="rounded-0 text-uppercase px-4 py-2" style={{fontSize:'10px'}}>
              JOIN THE DROP
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SimpleNavBar;