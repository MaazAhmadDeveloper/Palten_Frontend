import { Button, Col, Container, Row, Collapse } from 'react-bootstrap';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Faqs() {
  return (
    <>
      <div className="first-top-container">
        <Container>
          <Row className="document-row-text">
            <Col lg={12}>
              <h2 className="mb-3">FAQs</h2>
              <p className="mb-4">
                Find answers to the most frequently asked questions about our File Conversion Tool. Whether you’re looking for information on how to use the app, troubleshoot issues, or understand our features better, our FAQs page provides clear and concise answers to help you out.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className='mt-5 mb-5'>
          <FaqColumn />
        </Row>
      </Container>
    </>
  );
}

export default Faqs;

const FaqColumn = () => {
  const [allFaqs, setAllFaqs] = useState([]);
  const [openFaqs, setOpenFaqs] = useState({});

  useEffect(() => {
    const getFaqs = async () => {
      try {
        const { data } = await axios.post("/api/textContent/getFaqs");
        console.log(data);
        setAllFaqs(data.allFaqs);
      } catch (error) {
        console.log("Error While getting FAQs from DB");
      }
    };
    getFaqs();
  }, []);

  const handleToggle = (index) => {
    setOpenFaqs(prevOpenFaqs => ({
      ...prevOpenFaqs,
      [index]: !prevOpenFaqs[index]
    }));
  };

  return (
    <>
      {allFaqs.length === 0 ? (
        <div className='not-found text-center mt-5 mb-5'>
          <h1 className='text-404'>No FAQs Found</h1>
          <h3 style={{ color: "#5a5a5a" }}>There are no FAQs available at the moment!</h3>
        </div>
      ) : (
        <Col>
          {allFaqs.map((faq, index) => (
            <div className='faqs-div' key={index}>

              <div className="faqs-headingWITHbtn">
                <h4 className='faqs-question'>{faq.question}</h4>

                <Button onClick={() => handleToggle(index)} className='faqs-expand-btn' aria-expanded={openFaqs[index]}>
                  {openFaqs[index] ? <>Collapse &nbsp;&nbsp;&nbsp; <ArrowUpOutlined /></> : <>Expand &nbsp;&nbsp;&nbsp; <ArrowDownOutlined /></>}
                </Button>
              </div>

              <Collapse in={!!openFaqs[index]}>
                <p className='faqs-answer'>{faq.answer}</p>
              </Collapse>
            </div>
          ))}
        </Col>
      )}
    </>
  );
};
