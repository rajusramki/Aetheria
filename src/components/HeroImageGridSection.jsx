// src/components/HeroImageGridSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ModelOne from '../assets/bannermodels/model1.png';
import ModelTwo from '../assets/bannermodels/model2.png';
import ModelThree from '../assets/bannermodels/model3.png';
import ModelFour from '../assets/bannermodels/model4.png';
import ModelFive from '../assets/bannermodels/model5.png';
import ModelSix from '../assets/bannermodels/model6.png';

const HeroImageGridSection = () => {
  return (
    <section className="hero-image-grid-section py-5 position-relative overflow-hidden">
      <Container className="my-0">
        {/* Scattered Images - Absolute positioning (Ensure your Model paths are correct) */}
        {/* Hiding on extra small screens to prevent overflow issues */}
        <div className="position-absolute d-none d-sm-block" style={{ top: '0%', left: '25%', width: '100px', height: '100px', zIndex: 1 }}>
          <img src={ModelOne} alt="Model 1" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="position-absolute d-none d-sm-block" style={{ top: '3%', right: '10%', width: '120px', height: '120px', zIndex: 1 }}>
          <img src={ModelTwo} alt="Model 2" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="position-absolute d-none d-sm-block" style={{ top: '30%', left: '5%', width: '110px', height: '110px', zIndex: 1 }}>
          <img src={ModelThree} alt="Model 3" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="position-absolute d-none d-sm-block" style={{ top: '45%', right: '5%', width: '100px', height: '100px', zIndex: 1 }}>
          <img src={ModelFour} alt="Model 4" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="position-absolute d-none d-sm-block" style={{ bottom: '5%', left: '15%', width: '120px', height: '120px', zIndex: 1 }}>
          <img src={ModelFive} alt="Model 5" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="position-absolute d-none d-sm-block" style={{ bottom: '10%', right: '18%', width: '90px', height: '90px', zIndex: 1 }}>
          <img src={ModelSix} alt="Model 6" className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>

        {/* Central Content */}
        <Row className="justify-content-center text-center position-relative" style={{ zIndex: 2 }}>
          <Col md={10} lg={24}>
            {/* 🚨 SYNTAX FIX: Changed 'style="..."' to 'style={{...}}' with camelCase property */}
            {/* Using a larger display class for main headline clarity */}
            <h2 className="display-6 fw-bold mt-0 mb-0" style={{ letterSpacing: '-2.5px',fontSize: '36px', maxWidth:'1000px'}}>
              Born to Break the pattern
            </h2>
            
            <h2 className="display-6 fw-bold mb-3 text-secondary" style={{ letterSpacing: '-2.5px', fontSize: '36px', maxWidth:'1000px' }}>
              Aetheria fuses street energy, high-end elegance, and everyday comfort — redefining what bold truly means.
            </h2>
            
            <p className="lead text-muted mb-2 fw-normal" style={{letterSpacing: '-1px'}}>
              Our unique inner fleece lining dries 8x quicker than the nearest competitor.
            </p>
            
            <div className="d-flex justify-content-center gap-3 mt-4">
              {/* Note: If you added custom letter-spacing utilities (like ls-2), use them here: */}
              <Button variant="dark" size="m" className="rounded-0 text-uppercase px-4 py-2" style={{fontSize:'10px'}}>
                EXPLORE COLLECTION
              </Button>
              <Button variant="outline-secondary" size="m" className="rounded-0 text-uppercase px-4 py-2" style={{fontSize:'10px'}}>
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