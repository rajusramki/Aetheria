// src/components/Footer.js
import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import AetheriaFooter from '../assets/logo/Aetheriafooter.png'; // Assuming you have a white version of your logo for the dark footer

const Footer = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation
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
        rootMargin: '0px 0px -200px 0px',
        threshold: 0,
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

  // Common style for links in the main columns
  const linkStyle = { color: '#adb5bd', fontSize: '0.9rem', lineHeight: '2' };

  // Common style for links in the bottom bar
  const bottomLinkStyle = { color: '#6c757d', fontSize: '0.8rem' };

  // Styles for the logo animation (now for an image)
  const logoAnimation = {
    opacity: isVisible ? 1 : 0, // Starts fully opaque for logos often.
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)', // Subtle slide up
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  };

  // Styles for the navigation links animation
  const navAnimation = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
  });

  return (
    <footer
      className="bg-dark text-white pt-5 pb-3"
      ref={sectionRef}
    >
      <Container>
        {/* Top Section: Large AETHERIA Logo IMAGE */}
        <Row className="justify-content-center mb-5">
          <Col md={12} className="text-center">
            <img
              src={AetheriaFooter} // <--- Replaced with your image import
              alt="Aetheria Logo"
              style={{
                ...logoAnimation, // Apply animation
                maxWidth: '1080px', // Adjust max width as needed
                height: 'auto',
                opacity: isVisible ? 0.8 : 0, // Apply animation logic for opacity
              }}
            />
          </Col>
        </Row>

        {/* Middle Section: Navigation Columns */}
        <Row className="justify-content-center text-center text-md-start mb-5">
          {/* The Row's 'justify-content-center' will center the three Cols horizontally */}
          {/* 'text-center' centers content on small screens */}
          {/* 'text-md-start' keeps text left-aligned inside the centered Cols on larger screens */}

          {/* Aetheria Column (Social/Brand Links) - Stagger 1 */}
          <Col xs={6} md={2} className="mb-4 mb-md-0" style={navAnimation(0.2)}>
            <h6 className="text-white fw-bold mb-3">Aetheria</h6>
            <Nav className="flex-column">
              <Nav.Link href="#instagram" style={linkStyle} className="p-0">Instagram</Nav.Link>
              <Nav.Link href="#facebook" style={linkStyle} className="p-0">Facebook</Nav.Link>
              <Nav.Link href="#linkedin" style={linkStyle} className="p-0">LinkedIn</Nav.Link>
            </Nav>
          </Col>

          {/* Shop Column - Stagger 2 */}
          <Col xs={6} md={2} className="mb-4 mb-md-0" style={navAnimation(0.3)}>
            <h6 className="text-white fw-bold mb-3">Shop</h6>
            <Nav className="flex-column">
              <Nav.Link href="#mens" style={linkStyle} className="p-0">Men's</Nav.Link>
              <Nav.Link href="#womens" style={linkStyle} className="p-0">Women's</Nav.Link>
              <Nav.Link href="#unisex" style={linkStyle} className="p-0">Unisex</Nav.Link>
            </Nav>
          </Col>

          {/* Support Column - Stagger 3 */}
          <Col xs={6} md={2} className="mb-4 mb-md-0" style={navAnimation(0.4)}>
            <h6 className="text-white fw-bold mb-3">Support</h6>
            <Nav className="flex-column">
              <Nav.Link href="#faq" style={linkStyle} className="p-0">FAQ</Nav.Link>
              <Nav.Link href="#contact" style={linkStyle} className="p-0">Contact</Nav.Link>
              <Nav.Link href="#policy" style={linkStyle} className="p-0">Policy</Nav.Link>
            </Nav>
          </Col>

          {/* REMOVED: The <Col md={6}> empty column, as justify-content-center now handles alignment. */}
        </Row>

        {/* Bottom Bar: Legal Links and Copyright */}
        <div className="pt-3 border-top border-secondary">
          <Row className="align-items-center">
            {/* Left side: Legal Links */}
            <Col md={8} className="text-center text-md-start mb-2 mb-md-0" style={navAnimation(0.5)}>
              <Nav className="d-inline-flex flex-wrap justify-content-center justify-content-md-start">
                <Nav.Link href="#privacy" style={bottomLinkStyle} className="p-0 me-3">Privacy Policy</Nav.Link>
                <Nav.Link href="#terms" style={bottomLinkStyle} className="p-0 me-3">Terms of Service</Nav.Link>
                <Nav.Link href="#sale-terms" style={bottomLinkStyle} className="p-0 me-3">Terms & Conditions of Sale</Nav.Link>
                <Nav.Link href="#cookies" style={bottomLinkStyle} className="p-0 me-3">Cookies</Nav.Link>
              </Nav>
            </Col>

            {/* Right side: Copyright */}
            <Col md={4} className="text-center text-md-end" style={navAnimation(0.6)}>
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