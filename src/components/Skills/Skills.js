import React, { useEffect } from 'react';
import './Skills.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptop, faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(()=>{AOS.init()},[])
  return (
    <section className='Skills' id='Skills'>
      <div className="header" data-aos='fade-zoom-in'>
        <p className='who'>WHAT I DO</p>
        <h2>MY SKILLS</h2>
      </div>
      <Container>
        <Row className='padding align-items-center justify-content-center'>
          <Col  xs={12} md={6} lg={6} data-aos='fade-up'>
            <div className="skill-content">
              <div className="skill-icon">
               <FontAwesomeIcon icon={faAndroid} className='icon'/>
              </div>
              <div className="skill-text">
              <h3 className='h'>Android Development</h3>
              <p>
                I am mainly focussed on <strong>Flutter</strong>
              </p>
              </div>
            </div>
          </Col>
          <Col  xs={12} md={6} lg={6} data-aos='fade-up'>
            <div className="skill-content">
              <div className="skill-icon1">
               <FontAwesomeIcon icon={faLaptop} className='icon'/>
              </div>
              <div className="skill-text">
              <h3 className='h'>Web Development</h3>
              <p>
                I use React Js For making websites
              </p>
              </div>
            </div>
          </Col>
          <Col  xs={12} md={6} lg={6} data-aos='fade-up'>
            <div className="skill-content">
              <div className="skill-icon2">
               <FontAwesomeIcon icon={faMobileAndroid} className='icon'/>
              </div>
              <div className="skill-text">
              <h3 className='h'>Apps Design</h3>
              <p>
              Use Figma for making simple UI/UX designs
              </p>
              </div>
            </div>
          </Col>
          <Col  xs={12} md={6} lg={6} data-aos='fade-up'>
            <div className="skill-content">
              <div className="skill-icon1">
               <FontAwesomeIcon icon={faLaptop} className='icon'/>
              </div>
              <div className="skill-text">
              <h3 className='h'>Backend Development</h3>
              <p>
                Architecting scalable APIs with <strong>Node.js</strong> and <strong>RabbitMQ</strong>
              </p>
              </div>
            </div>
          </Col>
          <Col  xs={12} md={6} lg={6} data-aos='fade-up'>
            <div className="skill-content">
              <div className="skill-icon2">
               <FontAwesomeIcon icon={faLaptop} className='icon'/>
              </div>
              <div className="skill-text">
              <h3 className='h'>DevOps & Cloud</h3>
              <p>
                Deployment automation with <strong>Docker</strong>, <strong>GitHub Actions</strong>, and <strong>AWS</strong>
              </p>
              </div>
            </div>
          </Col>
          <Col  xs={12} md={6} lg={6} data-aos='fade-up'>
            <div className="skill-content">
              <div className="skill-icon">
               <FontAwesomeIcon icon={faGlobe} className='icon'/>
              </div>
              <div className="skill-text">
              <h3 className='h'>Community Leader</h3>
              <p>
              Former GDG Organizer and Technical Mentor
              </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
