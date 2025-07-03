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
        <div className="timeline">
         

          {/* Experience 4 - Right */}
          <div className="timeline-item right" data-aos='fade-left'>
            <div className="timeline-content">
              <div className="timeline-date">2024-present</div>
              <h3>Campus Organizer</h3>
              <h4>GDG on Campus CEC</h4>
              <p>
                Organizing events and workshops for Google Developer Group on Campus at CEC
              </p>
            </div>
          </div>

          {/* Experience 3 - Left */}
          <div className="timeline-item left" data-aos='fade-right'>
            <div className="timeline-content">
              <div className="timeline-date">2024-present</div>
              <h3>App Development Mentor</h3>
              <h4>Proddec</h4>
              <p>
                Mentoring and guiding students in our college in mobile app development, 
                helping them learn Flutter and best practices in software development
              </p>
            </div>
          </div>

          {/* Experience 2 - Right */}
          <div className="timeline-item right" data-aos='fade-left'>
           <div className="timeline-content">
              <div className="timeline-date">2024-present</div>
              <h3>Flutter Developer</h3>
              <h4>LogicCraft</h4>
              <p>
                Developing cross-platform mobile applications using Flutter framework, 
                creating innovative solutions for various client projects
              </p>
            </div>
          </div>

           {/* Experience 1 - Left */}
          <div className="timeline-item left" data-aos='fade-right'>
            <div className="timeline-content">
              <div className="timeline-date">2023-2024</div>
              <h3>App Developer</h3>
              <h4>V CEC App Developing Team</h4>
              <p>
                Working as an app developer to build our official college app using Flutter
              </p>
            </div>
          </div>
        </div>
      </Container>
      
    </section>
  )
}

export default Experience
