import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function FirstRow({firstRowSelection, setFirstRowSelection}) {
  const navigate = useNavigate();

const btnClickHandler = (e)=>{
  switch (e.target.innerText) {
    case 'Images':
      navigate('/image')
      break;
      case 'SpreadSheet':
        navigate("/spreadsheet")
        break;
        case 'Document':
          navigate('/document')
      break;
  }
}

  return (
    
    <Row className='home-row-text'>

        <Col lg={6}>
            <h2 className='mb-3'> Unlock Effortless File Conversions with Our Advanced Tool</h2>
            <p className='mb-4'>Transform your file management experience with our File Conversion Tool, designed for seamless, high-quality conversions across a range of formats. Whether you're working with images, documents, or spreadsheets, our user-friendly application ensures quick and precise results. Elevate your productivity and handle your file conversions with ease and confidence.</p>
        </Col>

        <Col lg={6}>
          <div style={{display:"flex", justifyContent: "space-between", flexWrap: "wrap",}}>

            <Button 
              className='btn-danger mt-3 mb-3'
              onClick={btnClickHandler}
              >
                Images
            </Button>
            <Button 
              className='btn-danger mt-3 mb-3'
              onClick={btnClickHandler}
              >
                SpreadSheet
            </Button>
            <Button 
              className='btn-danger mt-3 mb-3'
              onClick={btnClickHandler}
              >
                Document
            </Button>

            </div>
        </Col>
        
    </Row>
  )
}

export default FirstRow;