import React, { useState,useRef, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";


function Contact() {
    useEffect(()=>{AOS.init()},[])
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_m2g0ayv', 'template_18l4esx', form.current, '8FV1XXoS1rrGkAwft')
    .then((result) => {
        console.log(result.text);
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
  
  };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.name === '') {
            newErrors.name = 'Please enter your name';
        }
        if (formData.email === '') {
            newErrors.email = 'Please enter your email';
        }
        if (formData.subject === '') {
            newErrors.subject = 'Please enter a subject';
        }
        if (formData.message === '') {
            newErrors.message = 'Please enter your message';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form is valid, you can perform your success action here
            setSuccessMessage('Form submitted successfully.');
            sendEmail(e);
        }
    };

    return (
        <section className="contact" data-aos='fade-right' id='Contact'>
            <Container className="box">
                <Container>
                    <Row className="padding justify-content-center align-items-center">
                        <Col>
                            <div className="contents">
                                <form ref={form} name="sentMessage" id="contactForm" noValidate>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            required="required"
                                            value={formData.name}
                                            name='from_name'
                                            onChange={handleInputChange}
                                        />
                                        <p className="help-block">{errors.name}</p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your Email"
                                            required="required"
                                            name='from_email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        <p className="help-block">{errors.email}</p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="Subject"
                                            required="required"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                        />
                                        <p className="help-block">{errors.subject}</p>
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="Message"
                                            required="required"
                                            name='message'
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        />
                                        <p className="help-block">{errors.message}</p>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit" id="sendMessageButton" onClick={handleSubmit}>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                {successMessage && <p className="success-message">{successMessage}</p>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Contact;
