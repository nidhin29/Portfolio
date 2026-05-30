import React, { useEffect } from 'react';
import "./Experience.css";
import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => { AOS.init() }, []);
  return (
    <section className='experience-section' id='experience'>
      <Container className="exp-container">
        <div className="exp-header" data-aos='fade-up'>
          <h2 className="exp-title">My Work Experience</h2>
        </div>
        
        <div className="exp-timeline">
          
          {/* Experience Item 1 */}
          <div className="exp-item" data-aos='fade-up'>
            <div className="exp-left">
              <h4>SDE Intern</h4>
              <p>2024 - Jan 2026</p>
            </div>
            <div className="exp-center">
              <div className="exp-dot dot-blue"></div>
              <div className="exp-line"></div>
            </div>
            <div className="exp-right">
              <h3>LogicCraft</h3>
              <p>Collaborating on various client projects to build responsive and high-performance web and mobile frontends using modern frameworks.</p>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="exp-item" data-aos='fade-up' data-aos-delay="100">
            <div className="exp-left">
              <h4>Former Campus Organizer</h4>
              <p>2024 - 2025</p>
            </div>
            <div className="exp-center">
              <div className="exp-dot dot-red"></div>
              <div className="exp-line"></div>
            </div>
            <div className="exp-right">
              <h3>GDG on Campus CEC</h3>
              <p>Led the Google Developer Group on Campus at CEC, organizing technical events and fostering a developer community.</p>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="exp-item" data-aos='fade-up' data-aos-delay="200">
            <div className="exp-left">
              <h4>App Development Mentor</h4>
              <p>2024 - 2025</p>
            </div>
            <div className="exp-center">
              <div className="exp-dot dot-yellow"></div>
              <div className="exp-line"></div>
            </div>
            <div className="exp-right">
              <h3>Proddec</h3>
              <p>Mentored students in mobile application development, guiding them through Flutter best practices and real-world project builds.</p>
            </div>
          </div>

          {/* Experience Item 4 */}
          <div className="exp-item" data-aos='fade-up' data-aos-delay="300">
            <div className="exp-left">
              <h4>App Developer</h4>
              <p>2023 - 2024</p>
            </div>
            <div className="exp-center">
              <div className="exp-dot dot-green"></div>
              <div className="exp-line d-none"></div> {/* Hide line for last item */}
            </div>
            <div className="exp-right">
              <h3>V CEC App Developing Team</h3>
              <p>Collaborated on the official college application, implementing core features and UI using Flutter.</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Experience;
