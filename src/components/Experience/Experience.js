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
              <div className="timeline-date">2024-2025</div>
              <h3>Former Campus Organizer</h3>
              <h4>GDG on Campus CEC</h4>
              <p>
                Led the Google Developer Group on Campus at CEC, organizing technical events and fostering a developer community.
              </p>
            </div>
          </div>

          {/* Experience 3 - Left */}
          <div className="timeline-item left" data-aos='fade-right'>
            <div className="timeline-content">
              <div className="timeline-date">2024-2025</div>
              <h3>Former App Development Mentor</h3>
              <h4>Proddec</h4>
              <p>
                Mentored students in mobile application development, guiding them through Flutter best practices and real-world project builds.
              </p>
            </div>
          </div>

          {/* Experience 2 - Right */}
          <div className="timeline-item right" data-aos='fade-left'>
           <div className="timeline-content">
              <div className="timeline-date">2024 - Jan 2026</div>
              <h3>Freelance Frontend Developer</h3>
              <h4>LogicCraft</h4>
              <p>
                Collaborating on various client projects to build responsive and high-performance web and mobile frontends.
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
                Collaborated on the official college application, implementing core features and UI using Flutter.
              </p>
            </div>
          </div>
        </div>
      </Container>
      
    </section>
  )
}

export default Experience
