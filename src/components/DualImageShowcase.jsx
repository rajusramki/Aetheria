import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// --- Import Images (Update these paths to your actual image locations) ---
import Accessories from '../assets/catagory/accessories.jpg'; 
import Editorial from '../assets/catagory/editorial.jpg';

// --- CSS Keyframes and Styles for SLOW CROP UP OPEN Animation (DURATION INCREASED) ---
const styles = `
    /* Keyframes for the Crop Up Open animation */
    @keyframes cropUpOpen {
        from {
            opacity: 0;
            max-height: 0; 
            transform: translateY(50px); 
        }
        to {
            opacity: 1;
            max-height: 800px; 
            transform: translateY(0);
        }
    }

    /* Style for the image container - defines the crop area and height */
    .dual-image-hover-container {
        height: 400px; 
        overflow: hidden; 
        border-radius: 8px;
    }

    /* Image style for the zoom effect */
    .dual-card-img-zoom {
        transition: transform 0.8s ease-out; 
    }
    .dual-card-img-zoom:hover {
        transform: scale(1.05); 
    }
    
    /* Initial hidden state for the scroll trigger */
    .dual-showcase-item {
        opacity: 0;
        max-height: 0; 
        overflow: hidden; 
        transform: translateY(50px); 
        will-change: opacity, transform, max-height; 
    }

    /* Animation class applied when visible */
    .dual-showcase-item.visible {
        /* KEY CHANGE: Increased duration to 2.0s for maximum slowness */
        animation: cropUpOpen 2.0s ease-out forwards;
    }
`;

// --- Component Data (No change) ---
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

// ----------------------------------------------------------------------
// --- React Component ---
// ----------------------------------------------------------------------
const DualImageShowcase = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer Logic to trigger when in view
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
                // Prevents premature firing by shrinking the observation area at the bottom
                rootMargin: '0px 0px -100px 0px', 
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

    return (
        <section className="dual-image-showcase py-4" ref={sectionRef}>
            <style>{styles}</style> 

            <Container>
                <Row className="justify-content-center">
                    {showcaseItems.map((item, index) => (
                        <Col md={6} key={index} className="mb-4">
                            
                            <div 
                                className={`dual-showcase-item ${isVisible ? 'visible' : ''}`}
                                style={{ 
                                    // KEY CHANGE: Increased stagger increment to 0.5s for a noticeable gap
                                    animationDelay: isVisible ? `${0.5 + index * 0.5}s` : '0s',
                                }}
                            >
                                <Card className="border-0 rounded-0 p-0 text-start">
                                    <a href={item.link} aria-label={`View ${item.title}`} className="text-decoration-none text-dark">
                                        
                                        <div className="dual-image-hover-container">
                                            <Card.Img 
                                                variant="top" 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="rounded-0 dual-card-img-zoom" 
                                                style={{ objectFit: 'cover', height: '100%', width: '100%'}}
                                            />
                                        </div>
                                    </a>
                                    
                                    <Card.Body className="px-0 pt-3 pb-0">
                                        <h4 className="fw-bold mb-1">{item.title}</h4>
                                        <p className="text-muted small">{item.subtitle}</p>
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

export default DualImageShowcase;