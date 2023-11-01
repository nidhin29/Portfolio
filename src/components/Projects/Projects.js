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
    <section className='Projects' data-aos='fade-zoom-in'>
        <div className="header">
        <h2>MY PROJECTS</h2>
      </div> 
      <Container>
        <Row className='align-items-center'>
           <Col xs={12} md={6} lg={6}>
           <div className="content">
            <div className="image1">
             <img src={p1} alt="" srcset="" className='display-4'/>              
            </div>
            <div className="text">
              <h3>
                CINEPHILE
              </h3>
              <p>
              CINEPHILE is an app built with flutter that uses Firebase as the backend for data storage and authentication.
              It is an app that allows users to create a list of their favourite movies.
              </p>
              <button className='button' onClick={() =>
                    openGitHubLink('https://github.com/nidhin29/CINEPHILE-v.1.0')
                  }>Source Code</button>
            </div>
           </div>
           </Col>
           <Col xs={12} md={6} lg={6}>
           <div className="content">
            <div className="image">
             <img src={p2} alt="" srcset="" className='display-4'/>              
            </div>
            <div className="text">
              <h3>
              PIGGY BANK
              </h3>
              <p>
              It's a simple money management app, user can add expenses and categorize expenses. This app is built with Flutter
              </p>
              <button className='button' onClick={() =>
                    openGitHubLink('https://github.com/nidhin29/Piggy-Bank')
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
