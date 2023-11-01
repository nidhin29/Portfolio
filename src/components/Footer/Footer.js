import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col xs={12} sm={6} className="mb-3">
              <Container>
              <div className="soctext mb-3">
              <h2>
                ph:+91 8281096569 | email:nidhinvninan29@gmail.com
              </h2>
              </div>
              </Container>
              <div className="social-icon">
                <FontAwesomeIcon icon={faInstagram} className='icons' onClick={() =>
                    openLink('https://www.instagram.com/nidhin_ninan18/')
                  }/>
                <FontAwesomeIcon icon={faLinkedin} className='icons' onClick={() =>
                    openLink('https://www.linkedin.com/in/nidhin-ninan-b11b7226a')
                  }/>
                <FontAwesomeIcon icon={faGithub} className='icons' onClick={() =>
                    openLink('https://github.com/nidhin29')
                  }/>
              </div>
              <p>© Nidhin V Ninan. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
  
  export default Footer;