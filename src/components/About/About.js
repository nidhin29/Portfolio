import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => { AOS.init() }, []);
  return (
    <section className='services-section' data-aos='fade-up' id='services'>
      <Container className="services-container">
        <Row className="align-items-center">
          
          {/* Left Column - Service Cards */}
          <Col lg={5} className="services-cards">
            
            <div className="service-card">
              <div className="service-icon icon-web">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <div className="service-info">
                <h4>Website Design</h4>
               
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon icon-mobile">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <div className="service-info">
                <h4>Mobile App Design</h4>
                
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon icon-brand">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <div className="service-info">
                <h4>Full-Stack Solutions</h4>
                
              </div>
            </div>

          </Col>

          {/* Right Column - Text & Stats */}
          <Col lg={{span: 6, offset: 1}} className="services-text">
            <h2 className="services-title">What do I help?</h2>
            
            <p className="services-desc">
              I will help you with finding a solution and solve your problems. We use process design to create digital products. Besides that also help their business.
            </p>
            <p className="services-desc mb-5">
              My expertise extends to building scalable, high-performance applications utilizing Flutter, React, and Node.js, ensuring seamless user experiences.
            </p>

          

          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default About;
