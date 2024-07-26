import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDataSelection } from '../../../../../context/ContextApi';

function Footer() {
  const navigate = useNavigate();
  const {setblogsData} = useDataSelection();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await axios.post("/api/textContent/getBlogs");
        console.log(data);
        setblogsData(data.allBlogs);
      } catch (error) {
        console.log("Error While getting blogs from DB");
      }
    };
    getBlogs();
  }, []); 
  
const clickHandler = (e)=>{
  switch (e.target.innerText) {
    case 'About Us':
      navigate('/aboutus')
    break;
      case 'Pricing':
        navigate("/pricing")
    break;
      case 'Sign Up':
          navigate('/signup')
    break;
      case 'Terms of Service':
        navigate('/termsofservice')
    break;
      case 'Blogs':
        navigate("/blogs")
    break;
      case 'Docs':
          navigate('/documentation')
    break;
    break;
      case 'FAQs':
        navigate("/faqs")
    break;
      case 'Contact Us':
          navigate('/contactus')
    break;
  }
}

  return (
    <div className='footer'>
      <Container>
        <Row >
          <Col sm={4}>
            <h5>Quick Links</h5>
            <Nav className='flex-column '>
              <Nav.Link className='footer-links' href='/'>Home</Nav.Link>
              <Nav.Link className='footer-links' onClick={clickHandler} >About Us</Nav.Link>
              <Nav.Link className='footer-links' onClick={clickHandler} >Pricing</Nav.Link>
              <Nav.Link className='footer-links' onClick={clickHandler} >Sign Up</Nav.Link>
            </Nav>
          </Col>
          <Col sm={4}>
            <h5>Legal</h5>
            <Nav className='flex-column'>
              <Nav.Link className='footer-links' onClick={clickHandler} >Terms of Service</Nav.Link>
              <Nav.Link className='footer-links' onClick={clickHandler} >Blogs</Nav.Link>
              <Nav.Link className='footer-links' onClick={clickHandler} >Docs</Nav.Link>
              <Nav.Link className='footer-links' onClick={clickHandler} >FAQs</Nav.Link>
            </Nav>
          </Col>
          <Col sm={4}>
            <h5>Contact</h5>
            <Nav className='flex-column '>
              <Nav.Link className='footer-links' onClick={clickHandler} >Contact Us</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr />
        <Row className='pb-4 text-center '>
            <p className='m-0'> Copyright &copy; 2024 | <b>All Data Reserved </b> |  </p>
            <p>Powered By <b> Palten team</b> </p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
