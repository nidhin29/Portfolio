import React from 'react';
import './Banner.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import me from '../assets/img/me-removebg-preview (1).png';

function Banner() {
  return (
    <section className='hero-section' id='home'>
      <Container className="hero-container h-100">
        <Row className="align-items-center position-relative hero-row h-100">
          
          {/* Left Content */}
          <Col lg={4} md={6} className="hero-left-content z-index-2">
            <h1 className="hero-greeting">Hey There,<br/>I'm Nidhin</h1>
            
            <a href="mailto:nidhinvninanwork@gmail.com" className="hero-email">
              nidhinvninanwork@gmail.com 
            </a>

            <div className="hero-resume-btn-container">
              <a href={process.env.PUBLIC_URL + "/nidhinvninan.pdf"} download="Nidhin_V_Ninan_Resume.pdf" className="resume-btn">
                Download Resume
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </Col>

          {/* Center Image */}
          <Col lg={4} md={12} className="hero-center-image text-center z-index-1 align-self-end">
            <div className="image-wrapper">
              
              {/* SVG Filter Definition for Brush Stroke Effect */}
              <svg width="0" height="0" className="d-none">
                <filter id="brush-texture">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </svg>
              
              {/* The Brush Stroke Element with multiple strokes */}
              <div className="brush-container">
                 <div className="stroke stroke-1"></div>
                 <div className="stroke stroke-2"></div>
                 <div className="stroke stroke-3"></div>
                 <div className="stroke stroke-4"></div>
                 <div className="stroke stroke-5"></div>
              </div>

              <img src={me} alt="Nidhin" className="profile-img" />
            </div>
          </Col>

          {/* Right Content */}
          <Col lg={4} md={6} className="hero-right-content z-index-2 text-end">
            <p className="hero-description">
              I develop beautifully simple things, <br/>And I love what I do.
            </p>
            
            <div className="hero-typewriter">
              <span className='type-text'>
                <Typewriter
                  words={['Full-Stack Developer','Flutter Developer','React Developer','DevOps Enthusiast']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <div className="hero-badge">
              <div className="badge-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <p className="badge-text">
                PROFESSIONAL<br/>SOFTWARE ENGINEER
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Banner;
