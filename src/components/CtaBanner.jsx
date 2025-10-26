// src/components/CtaBanner.js
import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CtaBannerImage from '../assets/ctabanner.jpg'

// --- CSS Keyframes and Styles for the Crop Up Animation ---
const styles = `
    /* Keyframes for the Crop Up Open effect */
    @keyframes cropUpBanner {
        from {
            max-height: 0; /* Starts vertically hidden */
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            /* Needs to be larger than the max height of the content (400px image height + padding) */
            max-height: 600px; 
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Base wrapper for the animation */
    .banner-crop-wrapper {
        overflow: hidden;
        max-height: 0; /* Initial hidden state */
        opacity: 0;
        will-change: transform, opacity, max-height;
    }

    /* Animation class applied when visible */
    .banner-crop-wrapper.visible {
        /* Smooth, noticeable duration for a large element */
        animation: cropUpBanner 1.5s ease-out forwards;
    }
    
    /* Subtle hover effect for the button */
    .cta-button {
        transition: transform 0.2s ease-out, background-color 0.2s; /* Add transition for smoothness */
    }

    .cta-button:hover {
        background-color: #eee !important;
        transform: translateY(-2px);
    }
`;

const CtaBanner = () => {
    // 1. Setup Refs and State
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // 2. Intersection Observer Logic (FIXED)
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
                // 💡 FIX: Increased negative bottom margin to delay the trigger. 
                // The animation will now fire when the component is further in view.
                rootMargin: '0px 0px -250px 0px', 
                threshold: 0, 
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

    return (
        <section 
            className="cta-banner py-5"
            ref={sectionRef} // Attach ref for observation
        >
            <style>{styles}</style> 
            
            <Container>
                <Row>
                    <Col>
                        {/* The main container for the image and button */}
                        <div 
                            // Apply the animation wrapper class and conditional visibility
                            className={`position-relative overflow-hidden shadow-lg banner-crop-wrapper ${isVisible ? 'visible' : ''}`}
                            style={{ borderRadius: '10px' }}
                        >
                            {/* Image element */}
                            <img 
                                src={CtaBannerImage}
                                alt="Dramatic close-up model in white sunglasses" 
                                className="img-fluid w-100"
                                style={{ 
                                    height: '400px', 
                                    objectFit: 'cover', 
                                    objectPosition: 'center top'
                                }}
                            />
                            
                            {/* Button Overlay - Centered at the bottom half */}
                            <div 
                                className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-end p-5 "
                                style={{ pointerEvents: 'none' }}
                            >
                                <Button 
                                    variant="light" 
                                    size="sm" 
                                    className="rounded-1 text-uppercase fw-bold cta-button p-2 px-4" 
                                    style={{ pointerEvents: 'auto', fontSize:'10px' }}
                                >
                                    JOIN THE DROP
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaBanner;