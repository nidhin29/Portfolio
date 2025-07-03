import React, { useEffect } from 'react'
import "./Projects.css"
import { Col, Container, Row } from 'react-bootstrap'
import p1 from "../assets/img/p5.png"
import p2 from "../assets/img/p4.png"
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(()=>{AOS.init()},[])
  const openGitHubLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <section className='Projects' data-aos='fade-zoom-in' id='Projects'>
        <div className="header">
        <h2>MY PROJECTS</h2>
      </div> 
      <Container>
        <Row className='align-items-center'>
           <Col xs={12} md={6} lg={6}>
           <div className="content">
            <div className="image1">
             
              <img src={p1} alt="" srcset="" className='card img-fluid'/>        
             
                  
            </div>
            <div className="text">
              <h3>
                Manager
              </h3>
              <p>
              A comprehensive personal finance management app built with Flutter that helps users track income and expenses across multiple bank accounts.
               The app features automatic SMS transaction parsing, visual insights through charts, Google Sign-In authentication,
                and cloud synchronization powered by Firebase
              </p>
              <button className='button' onClick={() =>
                    openGitHubLink('https://github.com/nidhin29/Manager')
                  }>Source Code</button>
            </div>
           </div>
           </Col>
           <Col xs={12} md={6} lg={6}>
           <div className="content">
            <div className="image">
             
              <img src={p2} alt="" srcset="" className='card img-fluid'/>        
              
                  
            </div>
            <div className="text">
              <h3>
              Q Flow
              </h3>
              <p>
              A comprehensive digital healthcare management application built with Flutter that revolutionizes the way patients interact
               with healthcare services. The app provides seamless appointment booking, prescription management, doctor consultations,
                and patient feedback systems
              </p>
              <button className='button' onClick={() =>
                    openGitHubLink('https://github.com/nidhin29/Qflow')
                  }>Source Code</button>
            </div>
           </div>
           </Col>
        </Row>
        </Container> 
    </section>
  )
}

export default Projects
