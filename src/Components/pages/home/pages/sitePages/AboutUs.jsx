import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
  return (
    <>
      <div className="first-top-container">
        <Container>
          <Row className="document-row-text">
            <Col lg={12}>
              <h2 className="mb-3"> About Us </h2>
              <p className="mb-4">
                Learn more about our mission, vision, and the services we offer. Discover what drives us and how we can help you achieve your goals.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className='content-container'>
      <Row className="document-row-text">
            <Col lg={12}>
              <h1> About Us </h1>
            </Col>
          </Row>
        <Row className='content-row'>
          <Col>
            <h3 className='content-heading mt-4'>Our Vision</h3>
            <p className='content-text'>
              Our vision is to empower users by providing intuitive and efficient tools for all their file conversion needs. We aim to make complex processes simple and accessible.
            </p>
            
            <h3 className='content-heading mt-4'>Our Goal</h3>
            <p className='content-text'>
              Our goal is to become the leading provider of file conversion solutions by constantly innovating and improving our tools to meet user demands and expectations.
            </p>
            
            <h3 className='content-heading mt-4'>Our Service</h3>
            <p className='content-text'>
              We offer a range of file conversion services, including image, document, and spreadsheet conversions. Our platform is user-friendly and designed to handle various file formats seamlessly.
            </p>
            
            <h3 className='content-heading mt-4'>Our Niche</h3>
            <p className='content-text'>
              Our niche is providing high-quality, reliable file conversion tools that cater to both individual and professional needs. We focus on delivering a user-centric experience with robust features.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
