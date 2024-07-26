import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

function NaveBar({user, setUser}) {
  const [modalFlag, setmodalFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // console.log(user);
      const storedData = localStorage.getItem('userEmail');

      if (storedData) {
        const userData = JSON.parse(storedData);
// console.log({ email: userData.email });
        try {
          const { data } = await axios.post("/api/credits/getCredits", { email: userData.email });
          console.log(data);
          setUser(data);
        } catch (error) {
          console.log("Error while getting credits", error.response.status);
          localStorage.removeItem('userEmail');
        }
      } else {
        console.log('No data found in local storage');
      }
    };

    fetchData();
  }, []);

  const clickHandler = (e)=>{
    switch (e.target.innerText) {
      case 'About Us':
        navigate('/login')
      break;
        case 'Pricing':
          navigate("/pricing")
      break;
        case 'Sign Up':
            navigate('/signup')
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
        case 'Login':
            navigate('/login')
      break;
    }
  }


  const logoutConfirmHandler = ()=>{
    message.success(`Successfully Logout ${user.userName}` );
    setmodalFlag(false);
    localStorage.removeItem('userEmail');
    window.location.href = "/";
  }

  return (
    <>
      <Navbar bg="dark" expand="sm" data-bs-theme="dark" id='top-navbar' className='position-sticky' style={{ position: "sticky", top: "0px", zIndex:2000 }}>
        <Container>
          <Navbar.Brand href="/">
            <div className='brandName'>
              <h1 className='brandNameText'>Palten</h1>
              {/* <img className='brandNameImage' src="image/brand_logo.png" alt="" /> */}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-lg-4">
              {/* <DropDown/> */}
              <Nav.Link onClick={clickHandler} >Pricing</Nav.Link>
              <Nav.Link onClick={clickHandler} >Blogs </Nav.Link>
              <Nav.Link onClick={clickHandler} >Docs </Nav.Link>
              <Nav.Link onClick={clickHandler} >FAQs </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
            <Nav.Link href="/pricing">Credits : <span style={{color:"#ff6d6b"}}>{user?.credits || 0}</span></Nav.Link>
              {user === "" ? <Nav.Link onClick={clickHandler} >Sign Up</Nav.Link> : null}
              {user === "" ? <Nav.Link onClick={clickHandler} >Login</Nav.Link> 
              :
                 <Dropdown className='me-2' style={{color:"white",}} >
                 <Dropdown.Toggle variant="" id="dropdown-basic" >
                   {user?.userName}
                 </Dropdown.Toggle>

                 <Dropdown.Menu  className='logout-item' style={{ }}>
                   <Dropdown.Item onClick={() => setmodalFlag(true)} className='logout-item' >Logout</Dropdown.Item>
                 </Dropdown.Menu>
                 </Dropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <Modal show={modalFlag} onHide={() => setmodalFlag(false)} style={{zIndex:2001}}>
        <Modal.Header closeButton>
          <Modal.Title>Logout {user?.userName} !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, are you sure {user?.userName} to logout your account </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setmodalFlag(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={logoutConfirmHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
}

export default NaveBar;
