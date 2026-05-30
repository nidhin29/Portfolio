import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <footer className="footer-bar">
      <Container className="footer-container">
        <div className="footer-left">
          <span className="footer-brand">Nidhin</span> 
          <span className="footer-copy">| ©2026. All Rights Reserved</span>
        </div>
        
        <div className="footer-right">
          <div className="footer-socials">
            <FontAwesomeIcon icon={faInstagram} className='social-icon' onClick={() => openLink('https://www.instagram.com/nidhin_ninan18/')}/>
            <FontAwesomeIcon icon={faLinkedin} className='social-icon' onClick={() => openLink('https://www.linkedin.com/in/nidhin-v-ninan-b11b7226a')}/>
            <FontAwesomeIcon icon={faGithub} className='social-icon' onClick={() => openLink('https://github.com/nidhin29')}/>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;