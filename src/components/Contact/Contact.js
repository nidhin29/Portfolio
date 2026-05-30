import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => { AOS.init() }, []);

    return (
        <section className="contact-cta" data-aos='fade-up' id='contact'>
            <Container className="contact-container">
                <Row className="align-items-center">
                    <Col lg={7} md={12}>
                        <h2 className="cta-heading">Let's make something<br/>amazing together.</h2>
                        <div className="cta-link-wrapper">
                            <span className="cta-text">Start by </span>
                            <a href="mailto:nidhinvninan29@gmail.com" className="cta-link">saying hi</a>
                        </div>
                    </Col>
                    
                    <Col lg={5} md={12} className="cta-info-col">
                        <div className="cta-info">
                            <h4 className="info-title">Information</h4>
                            <p className="info-address">Chengannur, Alappuzha, Kerala, India</p>
                            
                            <ul className="footer-nav">
                                <li><a href="#services">SERVICES</a></li>
                                <li><a href="#works">WORKS</a></li>
                                <li><a href="#experience">EXPERIENCE</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
