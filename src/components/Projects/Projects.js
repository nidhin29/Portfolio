import React, { useEffect } from 'react'
import "./Projects.css"
import { Col, Container, Row } from 'react-bootstrap'
import p1 from "../assets/img/p5.png"
import p2 from "../assets/img/p4.png"
import catercraft_logo from "../assets/img/catercraft_logo.png"
import qflow_logo from "../assets/img/qflow_logo.png"
import expensify_logo from "../assets/img/expensify_logo.png"
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
            {/* Row 1: CaterCraft Ecosystem */}
            <Col xs={12} md={6} lg={4}>
            <div className="content">
             <div className="image1">
               <img src={catercraft_logo} alt="CaterCraft" className='card img-fluid'/>        
             </div>
             <div className="text">
               <h3>CaterCraft Backend</h3>
               <p>
               Event-driven Node.js backend using RabbitMQ for async notifications, Redis for caching, and Socket.io for real-time tracking.
               </p>
               <button className='button' onClick={() => openGitHubLink('https://github.com/nidhin29/catering-backend')}>Source Code</button>
             </div>
            </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <div className="content">
             <div className="image">
               <img src={catercraft_logo} alt="CaterCraft" className='card img-fluid'/>        
             </div>
             <div className="text">
               <h3>Customer Website</h3>
               <p>
               React-based portal for customers to browse services, manage bookings, and make secure payments via Razorpay.
               </p>
               <button className='button' onClick={() => openGitHubLink('https://github.com/nidhin29/customer-website')}>Source Code</button>
             </div>
            </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <div className="content">
             <div className="image1">
               <img src={catercraft_logo} alt="CaterCraft" className='card img-fluid'/>        
             </div>
             <div className="text">
               <h3>Owner Dashboard</h3>
               <p>
               A premium React admin dashboard for catering owners to manage staff, services, and live booking updates.
               </p>
               <button className='button' onClick={() => openGitHubLink('https://github.com/nidhin29/catering-website')}>Source Code</button>
             </div>
            </div>
            </Col>
         </Row>
         <Row className='align-items-center mt-4'>
            {/* Row 2: QFlow Ecosystem */}
            <Col xs={12} md={6} lg={4}>
            <div className="content">
             <div className="image1">
               <img src={qflow_logo} alt="QFlow" className='card img-fluid'/>        
             </div>
             <div className="text">
               <h3>QFlow App</h3>
               <p>
               A cross-platform Flutter application for patients to book appointments and track live queue token statuses.
               </p>
               <button className='button' onClick={() => openGitHubLink('https://github.com/nidhin29/Qflow')}>Source Code</button>
             </div>
            </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <div className="content">
             <div className="image">
               <img src={qflow_logo} alt="QFlow" className='card img-fluid'/>        
             </div>
             <div className="text">
               <h3>QFlow Backend</h3>
               <p>
               Scalable Express.js API using RabbitMQ for reminders and Socket.io for real-time queue synchronization.
               </p>
               <button className='button' onClick={() => openGitHubLink('https://github.com/nidhin29/Qflow-Backend')}>Source Code</button>
             </div>
            </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <div className="content">
             <div className="image1">
               <img src={qflow_logo} alt="QFlow" className='card img-fluid'/>        
             </div>
             <div className="text">
               <h3>Hospital Website</h3>
               <p>
               React-based management portal for hospitals to monitor live queues, manage doctors, and handle appointments.
               </p>
               <button className='button' onClick={() => openGitHubLink('https://github.com/nidhin29/qflow-hospital')}>Source Code</button>
             </div>
            </div>
            </Col>
         </Row>
         <Row className='align-items-center mt-4 justify-content-center'>
           <Col xs={12} md={6} lg={4}>
            <div className="content">
             <div className="image1">
               <img src={expensify_logo} alt="Expensify" className='card img-fluid'/>        
             </div>
             <div className="text">
               <h3>Expensify</h3>
               <p>
               Intelligent expenditure tracker with on-device LLM (Qwen) for secure offline categorization and bank SMS parsing.
               </p>
               <button className='button' onClick={() => openGitHubLink('https://github.com/nidhin29/Manager')}>Source Code</button>
             </div>
            </div>
            </Col>
        </Row>
        </Container> 
    </section>
  )
}

export default Projects
