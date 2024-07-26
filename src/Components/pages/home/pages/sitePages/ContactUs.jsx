import { Container, Col, Form, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { message } from 'antd';

function ContactUs() {

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const userName = e.target.elements.userName.value;
    const email = e.target.elements.email.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const address = e.target.elements.address.value;
    const userMessage = e.target.elements.message.value;

    try {
      const {data} = await axios.post("/api/users/contactus", {userName, email, zip, city, address, message:userMessage});
      message.success("You have successfully submit your message with contact info !");
      e.target.reset();
    } catch (error) {
      message.error("Error while submit your message, try later !");
    }

  }

  return (
    <>
      <Container className='mt-3'>
        <Row>
          <h1 className='mb-4'>Contact Us</h1>
          <h5 className='mt-3'>Please use the contact form below.</h5>
        </Row>

        <Row>
          <div className="contact-form-container mt-4 mb-4">
            <Form onSubmit={formSubmitHandler}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridUserName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control className='input-Field' required id='userName' type="text" placeholder="User Name" />
                </Form.Group> 

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control className='input-Field' required id='email' type="email" placeholder="Enter email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control className='input-Field' required id='address' placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control className='input-Field' required id='city'/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control className='input-Field' required id='zip'/>
                </Form.Group>
              </Row>

              <Row>
              <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Message</Form.Label>
                  <Form.Control className='input-Field' required id='message' as="textarea"/>
                </Form.Group>
              </Row>

              <Button variant="outline-danger" className='btn-outline-danger button-c mt-2' type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
