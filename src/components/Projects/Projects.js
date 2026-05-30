import React, { useEffect, useState } from 'react';
import "./Projects.css";
import { Container, Row, Col } from 'react-bootstrap';
import catercraft_logo from "../assets/img/catercraft_logo.png";
import qflow_logo from "../assets/img/qflow_logo.png";
import expensify_logo from "../assets/img/expensify_logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => { AOS.init() }, []);

  const openGitHubLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className='projects-section' data-aos='fade-up' id='works'>
      <Container className="projects-container">
        <div className="projects-header">
          <div>
            <h2 className="projects-title">My Latest Works</h2>
            <p className="projects-subtitle">Perfect solution for digital experience</p>
          </div>
          <button 
            className="explore-link" 
            onClick={() => setShowMore(!showMore)}
            style={{background: 'none', border: 'none', padding: 0}}
          >
            {showMore ? 'Show Less' : 'Explore More Works'}
          </button>
        </div>

        <Row className='g-4 projects-row'>
          {/* Project 1 */}
          <Col lg={4} md={6}>
            <div className="project-card card-bg-yellow" onClick={() => openGitHubLink('https://github.com/nidhin29/Catercraft-Backend')}>
              <div className="project-image-container">
                <img src={catercraft_logo} alt="CaterCraft" className="project-image" />
              </div>
              <div className="project-info">
                <h3>CaterCraft Backend</h3>
                <p>Event-driven Node.js ecosystem</p>
              </div>
            </div>
          </Col>

          {/* Project 2 */}
          <Col lg={4} md={6}>
            <div className="project-card card-bg-green" onClick={() => openGitHubLink('https://github.com/nidhin29/Qflow')}>
              <div className="project-image-container">
                <img src={qflow_logo} alt="QFlow" className="project-image" />
              </div>
              <div className="project-info">
                <h3>QFlow App</h3>
                <p>Cross-platform Flutter queue management</p>
              </div>
            </div>
          </Col>

          {/* Project 3 */}
          <Col lg={4} md={6}>
            <div className="project-card card-bg-blue" onClick={() => openGitHubLink('https://github.com/nidhin29/Expencify')}>
              <div className="project-image-container">
                <img src={expensify_logo} alt="Expensify" className="project-image" />
              </div>
              <div className="project-info">
                <h3>Expensify</h3>
                <p>Intelligent expenditure tracker with on-device LLM</p>
              </div>
            </div>
          </Col>

          {/* Additional Projects (Shown when 'showMore' is true) */}
          {showMore && (
            <>
              {/* Project 4: CaterCraft App */}
              <Col lg={4} md={6}>
                <div className="project-card card-bg-purple" style={{backgroundColor: '#e6e6fa'}} onClick={() => openGitHubLink('https://github.com/nidhin29/CaterCraft-Mobile')}>
                  <div className="project-image-container">
                    <img src={catercraft_logo} alt="CaterCraft App" className="project-image" />
                  </div>
                  <div className="project-info">
                    <h3>CaterCraft Mobile App</h3>
                    <p>Flutter-based client application for CaterCraft</p>
                  </div>
                </div>
              </Col>

              {/* Project 5: CaterCraft Customer Web */}
              <Col lg={4} md={6}>
                <div className="project-card card-bg-yellow" style={{backgroundColor: '#fff0f5'}} onClick={() => openGitHubLink('https://github.com/nidhin29/Catercraft-Customer')}>
                  <div className="project-image-container">
                    <img src={catercraft_logo} alt="CaterCraft Web" className="project-image" />
                  </div>
                  <div className="project-info">
                    <h3>CaterCraft Customer Portal</h3>
                    <p>React-based platform for catering management</p>
                  </div>
                </div>
              </Col>

              {/* Project 6: QFlow Backend */}
              <Col lg={4} md={6}>
                <div className="project-card card-bg-orange" style={{backgroundColor: '#ffe4b5'}} onClick={() => openGitHubLink('https://github.com/nidhin29/Qflow-Backend')}>
                  <div className="project-image-container">
                    <img src={qflow_logo} alt="QFlow Backend" className="project-image" />
                  </div>
                  <div className="project-info">
                    <h3>QFlow Backend</h3>
                    <p>Node.js & Redis backend infrastructure for QFlow</p>
                  </div>
                </div>
              </Col>

              {/* Project 7: QFlow Admin */}
              <Col lg={4} md={6}>
                <div className="project-card card-bg-green" style={{backgroundColor: '#e0ffff'}} onClick={() => openGitHubLink('https://github.com/nidhin29/Qflow-Admin')}>
                  <div className="project-image-container">
                    <img src={qflow_logo} alt="QFlow Admin" className="project-image" />
                  </div>
                  <div className="project-info">
                    <h3>QFlow Admin Portal</h3>
                    <p>Administrative interface for managing QFlow</p>
                  </div>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Projects;
