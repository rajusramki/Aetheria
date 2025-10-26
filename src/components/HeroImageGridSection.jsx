// src/components/HeroImageGridSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ModelOne from '../assets/bannermodels/model1.png';
import ModelTwo from '../assets/bannermodels/model2.png';
import ModelThree from '../assets/bannermodels/model3.png';
import ModelFour from '../assets/bannermodels/model4.png';
import ModelFive from '../assets/bannermodels/model5.png';
import ModelSix from '../assets/bannermodels/model6.png';

// Function to split text into spans for per-character animation
const splitText = (text, baseDelay) => {
    // KEY CHANGE 2: Reduced the stagger increment from 0.03s to 0.015s
    const staggerIncrement = 0.015; 
    
    return text.split('').map((char, index) => (
        <span
            key={index}
            className="d-inline-block"
            style={{
                // KEY CHANGE 1: Reduced duration from 0.8s to 0.5s for faster entry
                animation: 'fadeInUp 0.5s ease-out forwards', 
                animationDelay: `${baseDelay + index * staggerIncrement}s`, // Sped-up staggered delay
                opacity: 0, 
            }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

// --- CSS Keyframes (Updated fadeInUp duration) ---
const keyframes = `
    @keyframes float {
        0% { transform: translate(0, 0); }
        50% { transform: translate(-5px, -5px); }
        100% { transform: translate(0, 0); }
    }
    @keyframes floatReverse {
        0% { transform: translate(0, 0); }
        50% { transform: translate(5px, 5px); }
        100% { transform: translate(0, 0); }
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const HeroImageGridSection = () => {
    const mainTitleText = "Born to Break the pattern";
    const subTitleText = "Aetheria fuses street energy, high-end elegance, and everyday comfort — redefining what bold truly means.";

    return (
        <section className="hero-image-grid-section py-5 position-relative overflow-hidden">
            
            {/* Inject the Keyframes CSS */}
            <style>{keyframes}</style> 

            <Container className="my-0">
                
                {/* Scattered Images with Floating Animation (Logic remains the same) */}
                <div className="position-absolute d-none d-sm-block" style={{ top: '0%', left: '25%', width: '100px', height: '100px', zIndex: 1, animation: 'float 6s ease-in-out infinite' }}>
                  <img src={ModelOne} alt="Model 1" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="position-absolute d-none d-sm-block" style={{ top: '3%', right: '10%', width: '120px', height: '120px', zIndex: 1, animation: 'floatReverse 8s ease-in-out infinite' }}>
                  <img src={ModelTwo} alt="Model 2" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="position-absolute d-none d-sm-block" style={{ top: '30%', left: '4%', width: '110px', height: '110px', zIndex: 1, animation: 'float 7s ease-in-out infinite' }}>
                  <img src={ModelThree} alt="Model 3" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="position-absolute d-none d-sm-block" style={{ top: '45%', right: '5%', width: '100px', height: '100px', zIndex: 1, animation: 'floatReverse 9s ease-in-out infinite' }}>
                  <img src={ModelFour} alt="Model 4" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="position-absolute d-none d-sm-block" style={{ bottom: '5%', left: '15%', width: '120px', height: '120px', zIndex: 1, animation: 'float 6.5s ease-in-out infinite' }}>
                  <img src={ModelFive} alt="Model 5" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="position-absolute d-none d-sm-block" style={{ bottom: '10%', right: '18%', width: '90px', height: '90px', zIndex: 1, animation: 'floatReverse 7.5s ease-in-out infinite' }}>
                  <img src={ModelSix} alt="Model 6" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>

                {/* Central Content */}
                <Row className="justify-content-center text-center position-relative" style={{ zIndex: 2 }}>
                    
                    <Col xs={12} md={10} lg={24}> 
                        
                        {/* Main Headline with Sped-up Staggered Text Effect */}
                        <h2 className="display-6 fw-bold mt-0 mb-0 text-dark" 
                            style={{ letterSpacing: '-2.5px', fontSize: '36px', overflow: 'hidden' }}
                        >
                            {/* Base delay reduced from 0.1s to 0s */}
                            {splitText(mainTitleText, 0.0)} 
                        </h2>
                        
                        {/* Sub Headline with Sped-up Staggered Text Effect (Delayed Start) */}
                        <h2 className="display-6 fw-bold mb-0 text-secondary" 
                            style={{ letterSpacing: '-2.5px', fontSize: '36px', overflow: 'hidden' }}
                        >
                            {/* KEY CHANGE 3: Reduced base delay from 1.0s to 0.5s */}
                            {splitText(subTitleText, 0.5)} 
                        </h2>
                        
                        {/* Paragraph Text Animation */}
                        <p className="lead text-muted mb-2 fw-normal" 
                            style={{ 
                                letterSpacing: '-1px', 
                                // Reduced animation duration from 0.8s to 0.5s
                                animation: 'fadeInUp 0.5s ease-out forwards', 
                                // KEY CHANGE 3: Reduced base delay from 2.0s to 1.2s
                                animationDelay: '1.2s', 
                                opacity: 0 
                            }}
                        >
                            Our unique inner fleece lining dries 8x quicker than the nearest competitor.
                        </p>
                        
                        <div className="d-flex justify-content-center gap-3 mt-4">
                            {/* Button Animation */}
                            <Button 
                                variant="dark" 
                                size="m" 
                                className="rounded-1 text-uppercase px-4 py-2" 
                                style={{ 
                                    fontSize: '10px', 
                                    // Reduced animation duration from 0.8s to 0.5s
                                    animation: 'fadeInUp 0.5s ease-out forwards', 
                                    // KEY CHANGE 3: Reduced base delay from 2.3s to 1.5s
                                    animationDelay: '1.5s', 
                                    opacity: 0 
                                }}
                            >
                                EXPLORE COLLECTION
                            </Button>
                            <Button 
                                variant="outline-secondary" 
                                size="m" 
                                className="rounded-1 text-uppercase px-4 py-2" 
                                style={{ 
                                    fontSize: '10px', 
                                    // Reduced animation duration from 0.8s to 0.5s
                                    animation: 'fadeInUp 0.5s ease-out forwards', 
                                    // KEY CHANGE 3: Reduced base delay from 2.5s to 1.7s
                                    animationDelay: '1.7s', 
                                    opacity: 0 
                                }}
                            >
                                JOIN THE DROP
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroImageGridSection;