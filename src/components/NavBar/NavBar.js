import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function CustomNavbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} sticky='top'>
      <Container className="nav-container">
        <Navbar.Brand href="#home" className="nav-logo">
          Nidhin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="nav-links-center">
            <Nav.Link 
              href="#services" 
              className={activeLink === 'services' ? 'active-link' : ''} 
              onClick={() => onUpdateActiveLink('services')}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link 
              href="#works" 
              className={activeLink === 'works' ? 'active-link' : ''} 
              onClick={() => onUpdateActiveLink('works')}
            >
              WORKS
            </Nav.Link>
            <Nav.Link 
              href="#experience" 
              className={activeLink === 'experience' ? 'active-link' : ''} 
              onClick={() => onUpdateActiveLink('experience')}
            >
              EXPERIENCE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-contact d-none d-lg-flex">
          <span className="contact-number">+91 8281096569</span>
          <a href="#contact" className="contact-btn">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
