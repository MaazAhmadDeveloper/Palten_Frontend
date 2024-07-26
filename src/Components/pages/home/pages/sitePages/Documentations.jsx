import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Documentations() {
  return (
    <>
      <div className="first-top-container">
        <Container>
          <Row className="document-row-text">
            <Col lg={12}>
              <h2 className="mb-3">Documentation</h2>
              <p className="mb-4">
                Explore our comprehensive documentation to learn how to use our File Conversion Tool effectively. Our guide covers all the features of the app, step-by-step instructions, and best practices to ensure you get the most out of your file conversions.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col lg={12}>
            <div className="documentation-content">
              <h3>How to Use the File Conversion Tool</h3>
              <ol>
                <li>
                  <strong>Sign Up / Log In:</strong>
                  <p>To get started, sign up for an account or log in if you already have one. An OTP will be sent to your email for verification. Once verified, log in to receive 10 credits for future premium use. Currently, all conversions are free.</p>
                </li>
                <li>
                  <strong>Pre-Defined Conversion:</strong>
                  <p>Navigate to the desired conversion type page (Image, Spreadsheet, Document). Use the dropdown menus to select the "From" and "To" formats. For example, on the Image page, select "JPEG to PNG". Then, choose your file from the gallery and click the "Convert" button to start the conversion.</p>
                </li>
                <li>
                  <strong>Auto-Detect Conversion:</strong>
                  <p>From the Home page, click the "Add" button to select any file. The app will automatically detect the file's extension and display all possible conversion options. Select your desired conversion and click "Convert" to complete the process.</p>
                </li>
                <li>
                  <strong>Accessing Blogs:</strong>
                  <p>Visit the Blog section for the latest updates and related content about file conversions and app features.</p>
                </li>
                <li>
                  <strong>Contact Us / About Us / FAQs / Terms of Services:</strong>
                  <p>Navigate to these pages for more information about our app, how to contact us, frequently asked questions, and our terms of service.</p>
                </li>
              </ol>
              <h3>Features</h3>
              <ul>
                <li>User-friendly interface</li>
                <li>Support for various image, spreadsheet, and document formats</li>
                <li>High-quality conversion</li>
                <li>Fast and reliable processing</li>
                <li>Secure and private</li>
                <li>Blog section with latest updates</li>
                <li>Contact Us, About Us, FAQs, and Terms of Services pages</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Documentations;
