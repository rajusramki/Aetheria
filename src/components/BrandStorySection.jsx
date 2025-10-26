import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AetheriaLogo from '../assets/logo/aetherialogo.png'

// --- CSS Keyframes and Styles for the Smooth Clip-Path Reveal ---
const styles = `
    /* Keyframes for the Smooth Bottom-to-Top Reveal */
    @keyframes smoothClipReveal {
        from {
            /* Text starts slightly below final position, hidden by the clip path */
            transform: translateY(100%) skewY(1deg); 
            opacity: 0;
        }
        to {
            /* Text slides smoothly into place */
            transform: translateY(0) skewY(0);
            opacity: 1;
        }
    }

    /* Shining Text Effect (No changes needed, kept for style) */
    @keyframes shine {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }

    .shining-text {
        background: linear-gradient(90deg, 
            #333 0%, 
            #ccc 20%, 
            #333 40%, 
            #333 100% 
        );
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-size: 200% 100%;
        animation: shine 6s ease-in-out infinite; 
    }

    /* Keyframes for the Image Fade-In (Slower, grounding effect) */
    @keyframes imageFadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 0.8;
            transform: translateY(0);
        }
    }

    /* Container for the text block to apply overflow: hidden for the masking effect */
    .text-reveal-container {
        overflow: hidden; /* This hides the content when translateY is 100% */
        display: block; 
    }
    
    /* Base class for elements that will be animated */
    .animated-content {
        /* Set initial position for the smooth reveal (this is what is animated) */
        transform: translateY(100%); 
        opacity: 0;
        will-change: transform, opacity;
    }

    /* Class applied when the text elements are visible */
    .visible-animation-text {
        /* Set duration to 1.2s and use cubic-bezier for a custom, exceptionally smooth feel */
        animation: smoothClipReveal 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    
    /* Class applied when the image element is visible */
    .visible-animation-image {
        animation: imageFadeIn 1.5s ease-out forwards;
    }
`;

const BrandStorySection = () => {
  // 1. Setup Refs
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 2. Intersection Observer Logic (Kept robust to prevent premature firing)
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
        // Ensures animation triggers only when clearly in view
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

  // Helper function to get the animation class and delay for TEXT elements
  const getTextAnimationClasses = (delay) => (
    `animated-content ${isVisible ? 'visible-animation-text' : ''}`
  );

  // Helper function to get the animation class and delay for the IMAGE element
  const getImageAnimationClasses = (delay) => (
    `animated-content ${isVisible ? 'visible-animation-image' : ''}`
  );

  // Helper function to get the animation style for staggering
  const getAnimationStyle = (delay) => ({
    animationDelay: isVisible ? `${delay}s` : '0s',
  });

  return (
    <section
      className="brand-story-section py-5"
      ref={sectionRef}
    >
      <style>{styles}</style>

      <Container style={{ backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
        <Row className="align-items-center">

          {/* Left Column: Text Content */}
          <Col md={6}>
            <div className="p-3 p-md-5">

              {/* Headline: Wrap text in a container for the overflow: hidden masking */}
              <div className="text-reveal-container mb-4">
                <h3
                  className={`fw-bold sm-js shining-text ${getTextAnimationClasses(0.2)}`}
                  style={getAnimationStyle(0.2)}
                >
                  The Code of Unapologetic Style
                </h3>
              </div>

              {/* Paragraph 1: Wrap text in a container for the overflow: hidden masking */}
              <div className="text-reveal-container mb-4">
                <p
                  className={`text-secondary sm-js ${getTextAnimationClasses(0.4)}`}
                  style={getAnimationStyle(0.4)}
                >
                  Crafted for creators, rebels, and dreamers — Aetheria represents a culture of expression. Every stitch, silhouette, and tone reflects a story of contrast: street meets sophistication, raw meets refined.
                </p>
              </div>

              {/* Paragraph 2: Wrap text in a container for the overflow: hidden masking */}
              <div className="text-reveal-container">
                <p
                  className={`text-secondary sm-js ${getTextAnimationClasses(0.6)}`}
                  style={getAnimationStyle(0.6)}
                >
                  Bold, modern, and cinematic — Aetheria clothes transcend fashion to become a movement. Step into unapologetic confidence with each piece you wear.
                </p>
              </div>
            </div>
          </Col>

          {/* Right Column: Image */}
          <Col md={6} className="text-center text-md-start pe-3">
            <img
              src={AetheriaLogo}
              alt="AETHERIA Brand Logo"
              className={`img-fluid pe-5 ${getImageAnimationClasses(0.8)}`}
              style={{ ...getAnimationStyle(0.8), maxWidth: '100%', height: 'auto' }}
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default BrandStorySection;