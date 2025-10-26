// src/components/SimpleNavBar.jsx
import React from 'react';
// Import only the necessary components
import { Container, Nav, Button, Row, Col, Navbar } from 'react-bootstrap'; 
// Assuming your logo is correctly placed and imported
import AetheriaLogo from '../assets/logo/logo.png'; 

// --- CSS Keyframes and Styles for the Drop-Down Fade-In Animation ---
const styles = `
    /* Keyframes for a smooth fade-in and slight drop-down */
    @keyframes navDropDown {
        from {
            transform: translateY(-20px); /* Start slightly above its final position */
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    /* Base class for the animated container */
    .animated-navbar {
        animation: navDropDown 0.6s ease-out forwards; /* Apply animation */
        opacity: 0; /* Initial state (will be overridden by 'to' in the keyframe) */
        will-change: transform, opacity; /* Optimization for smooth animation */
    }

    /* Basic button hover for elegance */
    .navbar-button:hover {
        background-color: #333 !important;
        transition: background-color 0.2s;
    }
`;

const SimpleNavBar = () => {
    return (
        // The animation is applied to the outer Container, which also sets the sticky position
        <Container className="py-4 sticky-top">
            <style>{styles}</style> 
            
            {/* Apply the animated-navbar class to the rounded div */}
            <div className="rounded-1 border p-3 bg-white animated-navbar"> 
                <Row className="align-items-center justify-content-between">
                    
                    {/* Left Column (Desktop Links) */}
                    <Col xs={4} className="d-none d-md-block">
                        <Nav className="gap-4">
                            <Nav.Link href="#aetheria" className="text-dark fw-bold px-0">
                                About
                            </Nav.Link>
                            {/* Add more links here if needed */}
                        </Nav>
                    </Col>

                    {/* Center Column (Logo) */}
                    <Col xs={2} md={4} className="text-center">
                        <a href="#home" className="navbar-brand">
                            <img 
                                src={AetheriaLogo} 
                                alt="Aetheria Logo" 
                                style={{ height: '40px', width: 'auto' }} 
                                className="d-inline-block align-top"
                            />
                        </a>
                    </Col>

                    {/* Right Column (CTA Button) */}
                    <Col xs={6} md={4} className="text-end">
                        <Button 
                            variant="dark" 
                            className="rounded-1 text-uppercase px-4 py-2 navbar-button" 
                            style={{fontSize:'10px'}}
                        >
                            JOIN THE DROP
                        </Button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default SimpleNavBar;