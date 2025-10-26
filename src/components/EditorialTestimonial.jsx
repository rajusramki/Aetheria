// src/components/EditorialTestimonial.js
import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CEO from '../assets/ceo.jpg'
import CeoSignature from '../assets/ceosignature.png'

// --- CSS Keyframes and Styles for Crop Up Image Animation ---
const styles = `
    /* Keyframes for the Smooth Bottom-to-Top Reveal (Text) */
    @keyframes smoothClipReveal {
        from {
            transform: translateY(100%) skewY(1deg); 
            opacity: 0;
        }
        to {
            transform: translateY(0) skewY(0);
            opacity: 1;
        }
    }
    
    /* Keyframes for the Image Crop Up effect */
    @keyframes imageCropUp {
        0% {
            max-height: 0; 
            opacity: 0;
            transform: translateY(30px);
            filter: grayscale(100%); 
        }
        50% {
            filter: grayscale(100%); 
        }
        100% {
            max-height: 500px; /* Expands to full height (needs to be generous) */
            opacity: 1;
            transform: translateY(0);
            filter: grayscale(0%); /* Animate to color */
        }
    }

    /* Container for the text block to apply overflow: hidden for the masking effect */
    .text-reveal-container {
        overflow: hidden; 
        display: block; 
    }

    /* Wrapper for the image to apply the initial max-height/overflow: hidden */
    .image-crop-wrapper {
        overflow: hidden;
        max-height: 0; /* Initial hidden state for the animation */
        opacity: 0;
        will-change: transform, opacity, max-height, filter;
    }
    
    /* Base class for elements that will be animated */
    .animated-content {
        transform: translateY(100%); 
        opacity: 0;
        will-change: transform, opacity;
    }
    
    /* Base class for elements that use simple fade-in (like signature) */
    .animated-fade {
        opacity: 0;
        transform: translateY(10px); 
        will-change: transform, opacity;
    }

    /* Class applied when the text elements are visible */
    .visible-animation-text {
        animation: smoothClipReveal 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    
    /* Class applied when the image element is visible */
    .visible-animation-image-crop {
        /* Adjusted duration for smooth, noticeable crop effect and color transition */
        animation: imageCropUp 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards; 
    }

    /* Class applied for simple fade-in elements (like signature) */
    .visible-animation-fade {
        animation: smoothClipReveal 0.7s ease-out forwards;
    }
`;

const EditorialTestimonial = () => {
    // 1. Setup Refs
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
                root: null, 
                // 💡 FIX: Using a larger negative rootMargin (e.g., -200px) 
                // ensures the animation triggers later, when the section is more visible.
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

    // Helper functions
    const getTextAnimationClasses = () => (
        `animated-content ${isVisible ? 'visible-animation-text' : ''}`
    );
    
    const getImageCropAnimationClasses = () => (
        `${isVisible ? 'visible-animation-image-crop' : ''}`
    );

    const getFadeAnimationClasses = () => (
        `animated-fade ${isVisible ? 'visible-animation-fade' : ''}`
    );
    
    const getAnimationStyle = (delay) => ({
        // Apply delay only when visible to control the stagger
        animationDelay: isVisible ? `${delay}s` : '0s', 
    });

    return (
        <section 
            className="editorial-testimonial py-4 bg-white" 
            ref={sectionRef} 
        >
            <style>{styles}</style> 
            
            <Container style={{backgroundColor:'#f7f7f7', borderRadius:'8px'}}>
                <Row className="align-items-center justify-content-center">
                    
                    {/* Left Column: Text Content and Signature */}
                    <Col md={6}>
                        <div className="p-3 p-md-5">

                            {/* Text blocks remain the same (smooth reveal) */}
                            <div className="text-reveal-container">
                                <h3 
                                    className={`mb-4 fw-bold ${getTextAnimationClasses()}`} 
                                    style={getAnimationStyle(0.1)} // Staggered delay 0.1s
                                >
                                    The Aetheria Edit
                                </h3>
                            </div>
                            
                            <div className="text-reveal-container">
                                <p 
                                    className={`text-secondary mb-3 sm-js ${getTextAnimationClasses()}`}
                                    style={getAnimationStyle(0.2)} // Staggered delay 0.2s
                                >
                                    Visual storytelling meets design precision. From city lights to timeless silhouettes — experience fashion beyond the surface.
                                </p>
                            </div>
                            
                            <div className="text-reveal-container">
                                <p 
                                    className={`text-secondary mb-3 sm-js ${getTextAnimationClasses()}`}
                                    style={getAnimationStyle(0.3)} // Staggered delay 0.3s
                                >
                                    Editorial images highlight sharp contrasts, glassy overlays, and a neon-lit perspective, offering a magazine-quality journey through the world of Aetheria.
                                </p>
                            </div>
                            
                            <div className="text-reveal-container">
                                <p 
                                    className={`text-secondary mb-5 sm-js ${getTextAnimationClasses()}`}
                                    style={getAnimationStyle(0.4)} // Staggered delay 0.4s
                                >
                                    Each frame evokes mood, movement, and the allure of the street, all refined with premium aesthetics.
                                </p>
                            </div>
                            
                            {/* Signature */}
                            <div className="signature-area mt-4">
                                <img 
                                    src={CeoSignature}
                                    alt="Signature" 
                                    className={getFadeAnimationClasses()} 
                                    style={{ 
                                        ...getAnimationStyle(0.6), // Delay after all text
                                        width: '150px', 
                                        height: 'auto', 
                                        filter: 'invert(0)' 
                                    }} 
                                />
                            </div>
                        </div>
                    </Col>

                    {/* Right Column: Portrait Image (NOW WITH CROP UP) */}
                    <Col md={6}>
                        {/* Wrapper for the crop-up effect */}
                        <div 
                            // Applied the animation delay to the image wrapper
                            className={`image-wrapper p-3 p-md-5 image-crop-wrapper ${getImageCropAnimationClasses()}`} 
                            style={getAnimationStyle(0.5)} // Starts after the main text (0.4s) and before the signature
                        >
                            <img 
                                src={CEO} 
                                alt="Portrait of Team Member/Model" 
                                className="img-fluid rounded shadow-lg" 
                                style={{ 
                                    objectFit: 'cover', 
                                    width: '100%', 
                                    height: 'auto',
                                    borderRadius: '8px', 
                                    // Image itself starts grayscale via the keyframes '0%' state
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