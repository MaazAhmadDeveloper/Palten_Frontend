import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AlignCenterOutlined, SecurityScanOutlined } from '@ant-design/icons';

function TermsOfService() {
  return (
    <>
      <div className="first-top-container">
        <Container>
          <Row className="document-row-text">
            <Col lg={12}>
              <h2 className="mb-3"> Terms and Policy </h2>
              <p className="mb-4">
                By using our file converter app, you agree to these terms and conditions. If you do not agree with any part of these terms, you should not use our services.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className='content-container'>
      <Row className='content-row mt-5'>
          <Col>
            <h3 className='content-heading mt-4'><SecurityScanOutlined /> Data Security</h3>
            <p className='content-text'>Your data security is our top priority. We employ advanced encryption and security measures to ensure that your files are handled with the utmost care and confidentiality throughout the conversion process.</p>
          </Col>
        </Row>
        <Row className='content-row'>
          <Col>
            <h3 className='content-heading mt-4'><AlignCenterOutlined /> Acceptance of Terms</h3>
            <p className='content-text'>By using our File Conversion Tool, you agree to our terms and conditions. Please review our policies to understand your rights and responsibilities, and how we handle your data.</p>
          </Col>
        </Row>
        <Row className='content-row'>
          <Col>
            <h3 className='content-heading mt-4'><AlignCenterOutlined /> User Responsibilities</h3>
            <p className='content-text'>As a user, you are responsible for ensuring that the files you upload and convert comply with applicable laws and do not infringe on any intellectual property rights. Please use our tool responsibly and in accordance with our terms.</p>
          </Col>
        </Row>
        <Row className='content-row'>
          <Col>
            <h3 className='content-heading mt-4'><AlignCenterOutlined /> Limitation of Liability</h3>
            <p className='content-text'>Our liability is limited to the extent permitted by law. While we strive to provide accurate and high-quality conversions, we are not liable for any damages or losses arising from the use of our tool or any errors in file conversions.</p>
          </Col>
        </Row>   
      </Container>
    </>
  );
}

export default TermsOfService;
