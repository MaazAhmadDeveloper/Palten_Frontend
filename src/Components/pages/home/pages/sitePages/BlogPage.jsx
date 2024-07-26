import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function BlogPage({ date, content, title, route }) {
  return (
    <>
      <div className="first-top-container">
        <Container>
          <Row className="document-row-text">
            <Col lg={12}>
              <h2 className="mb-3"> {title} </h2>
              <p className="mb-4">
                {new Date(date).toISOString().slice(0, 10)}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className='content-container mt-5 mb-5'>
        <Row className='content-row'>
          <Col>
            <div className='blog-content' dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BlogPage;
