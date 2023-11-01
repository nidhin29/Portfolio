import React, { useEffect } from 'react'
import "./Experience.css"
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(()=>{AOS.init()},[])
  return (
    <section className='Experience' id='Experience'>
       <div className="header" data-aos='fade-zoom-in'>
        <p className='who'>THE PATH</p>
        <h2>MY EXPERIENCE</h2>
      </div>
      <Container>
      <div className="tree">
        <div className="body" data-aos='fade-right'>
        <div className="content" >
            <div className="text">
                <div className='date'>2022-present</div>
                <h2>App Developer</h2>
                <h4>V CEC App Developing Team</h4>
                <p>
                    Working as an app develop to build our official college app using Flutter
                </p>
            </div>
          </div>
        </div> 
      </div>
      </Container>
      
    </section>
  )
}

export default Experience
