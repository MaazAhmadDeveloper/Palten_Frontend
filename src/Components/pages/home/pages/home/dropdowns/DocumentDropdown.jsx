import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import Dropdown from 'react-bootstrap/Dropdown';


export const DocumentDOCX = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      type: ".docx, "
    })
  }  

  return (
    <Dropdown className="mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size='lg'>
        DOCX to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler} >HTML</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler} >PDF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler} >TXT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const DocumentTXT = ({setFirstRowSelection, setGetLocalFileFlag})=>{

const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "text/plain",
      type: ".txt, "
    })
  }
  
  return (
    <Dropdown className="mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size='lg'>
        TXT to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler} >HTML</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler} >PDF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler} >DOCX</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler} >PPTX</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const DocumentPDF = ({setFirstRowSelection, setGetLocalFileFlag})=>{


  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "application/pdf",
      type: ".pdf, "
    })
  }


  return (
    <Dropdown className="mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size='lg'>
        PDF to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler} >TXT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
