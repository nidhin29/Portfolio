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
                A FLUTTER DEVELOPER WITH A PASSION FOR BUILDING BEAUTIFUL AND FUNCTIONAL APPLICATIONS. I'M ALSO EXPERIENCED IN WEB DEVELOPMENT USING HTML, CSS AND REACT 
                <br/>
                <br/>
                IN ADDITION TO CODING, I'M ALSO A COMMUNITY BUILDER AND LOVE CONNECTING WITH OTHERS IN THE TECH INDUSTRY. I BELIEVE IN THE POWER OF COLLABORATION AND AM ALWAYS LOOKING FOR WAYS TO BRING PEOPLE TOGETHER TO LEARN, GROW, AND INNOVATE
                <br/>
                <br/>
                AS A TECH ENTHUSIAST, I'M CONSTANTLY EXPLORING NEW TECHNOLOGIES AND STAYING UP-TO-DATE WITH INDUSTRY TRENDS. I BELIEVE THAT THE BEST WAY TO STAY AHEAD IS TO NEVER STOP LEARNING, AND I'M ALWAYS LOOKING FOR NEW CHALLENGES TO TACKLE AND SKILLS TO MASTER.
                <br/>
                <br/>
                IF YOU'RE INTERESTED IN WORKING TOGETHER OR JUST WANT TO SAY HI, FEEL FREE TO REACH OUT!
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
