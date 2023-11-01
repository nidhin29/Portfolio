import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldUseBgBodyTertiary, setShouldUseBgBodyTertiary] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); 
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShouldUseBgBodyTertiary(windowWidth <= 992 || (windowWidth > 992 && scrolled));
  }, [scrolled, windowWidth]);

  return (
    <Navbar expand="lg" className={shouldUseBgBodyTertiary ? "bg-body-tertiary" : "bg-initial"} sticky='top'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#Home" >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
