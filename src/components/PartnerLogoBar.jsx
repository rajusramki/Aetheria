// src/components/PartnerLogoBar.js
import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InspirationOne from '../assets/inspiringlogo/cred.png';
import InspirationTwo from '../assets/inspiringlogo/noon.png';
import InspirationThree from '../assets/inspiringlogo/yellowface.png'

// --- CSS Keyframes and Styles for Animation ---
const styles = `
    /* Keyframes for a gentle fade-in and slide up */
    @keyframes logoFadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Base hidden state for all animated elements */
    .logo-animated-item {
        opacity: 0;
        transform: translateY(20px);
        will-change: opacity, transform;
    }

    /* Animation class applied when visible */
    .logo-animated-item.visible {
        /* Smooth, slow animation duration */
        animation: logoFadeInUp 1.0s ease-out forwards;
    }
`;

const logos = [
    { src: InspirationOne, alt: "CRED Logo" },
    { src: InspirationTwo, alt: "Noon Logo" },
    { src: InspirationThree, alt: "Yellow Face Logo" },
];

const PartnerLogoBar = () => {
    // 1. Setup Refs and State
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // 2. Intersection Observer Logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null, // Use the viewport
                // Ensures animation triggers only when clearly in view
                rootMargin: '0px 0px -50px 0px', 
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Helper function to get classes and staggering style
    const getAnimationStyle = (delay) => ({
        animationDelay: isVisible ? `${delay}s` : '0s',
    });
    const getAnimationClasses = () => (
        `logo-animated-item ${isVisible ? 'visible' : ''}`
    );

    return (
        <section 
            className="partner-logo-bar py-5"
            ref={sectionRef} // Attach ref for observation
        >
            <style>{styles}</style> 
            
            <Container>
                {/* Title (Stagger 1: 0.2s) */}
                <Row className="justify-content-center mb-4">
                    <Col md={12} className="text-center">
                        <h5 
                            className={`text-uppercase text-secondary fw-normal ${getAnimationClasses()}`}
                            style={getAnimationStyle(0.2)}
                        >
                            our inspiration
                        </h5>
                    </Col>
                </Row>
                
                {/* Logos */}
                <Row className="align-items-center justify-content-center">
                    {logos.map((logo, index) => (
                        <Col xs={4} sm={3} md={2} key={index} className="text-center p-3">
                            <div 
                                // Wrapper for the staggered animation
                                className={getAnimationClasses()}
                                // Stagger 2, 3, 4: Start at 0.4s and increment by 0.15s
                                style={getAnimationStyle(0.4 + index * 0.15)}
                            >
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    className="img-fluid"
                                    style={{ maxHeight: '60px', width: 'auto' }} 
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PartnerLogoBar;