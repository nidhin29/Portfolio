import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import "./About.css"
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(()=>{AOS.init()},[])
  return (
   <section className='About' data-aos='fade-zoom-in' id='About'>
    <Container>
        <div className="header">
            <p className='who'>
                WHO AM I
            </p>
            <h2>
                About Me
            </h2>
            <Row className="content align-items-center">
                <div className="text">
                <p className='hi'>
                    HI, I'M NIDHIN,
                
                <br/>
                <br/>
                A PASSIONATE FULL-STACK ENGINEER SPECIALIZING IN BUILDING SCALABLE, HIGH-PERFORMANCE APPLICATIONS. I ARCHITECT END-TO-END SOLUTIONS USING FLUTTER, REACT, AND NODE.JS, ENSURING SEAMLESS USER EXPERIENCES ACROSS ALL PLATFORMS.
                <br/>
                <br/>
                MY EXPERTISE EXTENDS TO DEVOPS AND INFRASTRUCTURE, WHERE I LEVERAGE DOCKER AND GITHUB ACTIONS TO AUTOMATE DEPLOYMENTS ON AWS. I'M PARTICULARLY INTERESTED IN EVENT-DRIVEN ARCHITECTURES AND REAL-TIME SYSTEMS, UTILIZING TOOLS LIKE RABBITMQ AND SOCKET.IO TO BUILD RESPONSIVE AND RELIABLE BACKENDS.
                <br/>
                <br/>
                BEYOND CODING, I'M A FORMER GDG ON CAMPUS ORGANIZER AND MENTOR, DEDICATED TO EMPOWERING THE TECH COMMUNITY THROUGH COLLABORATION AND KNOWLEDGE SHARING. I BELIEVE IN CONTINUOUS LEARNING AND AM ALWAYS READY TO TACKLE COMPLEX ARCHITECTURAL CHALLENGES.
                <br/>
                <br/>
                IF YOU'RE INTERESTED IN DISCUSSING SYSTEM DESIGN, SCALABLE APPS, OR JUST WANT TO CONNECT, FEEL FREE TO REACH OUT!
                 <br/>
                 </p>

                </div>
               
            </Row>
        </div>
    </Container>

   </section>
  )
}

export default About
