import React, { useEffect, useState } from 'react'
import "./Banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
import me from '../assets/img/me-removebg-preview (1).png';

function Banner() {
  const [centerText, setCenterText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
     
      if (window.innerWidth <= 768) {
        setCenterText(true);
      } else {
        setCenterText(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className='banner' id='Home'>
      <Container>
        <Row className='align-items-center justify-content-between'>
          <Col className={`${centerText ? 'b2 text-center padding' : 'b2 '}`}xs={12} md={6}>
            <div className={`${centerText ? '' : 'text'}`}>
            <h3 className='hello'>Hello,</h3>
            <br />
            <h1 className='I'>I'm Nidhin</h1>
            <br />
            <h1>
            <span className='type'>
          <Typewriter
            words={['Flutter Developer','Web Developer','Frontend Developer','Android Designer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
            </h1>
            </div>
          </Col>
          <Col className='b1 d-none d-md-block ' xs={12} md={6}>
            <div className="img">
            <img src={me} alt="self" srcset="" className='img-fluid'/>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
