import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import Dropdown from 'react-bootstrap/Dropdown';

export const SpreadsheetXLSX = ({setFirstRowSelection, setGetLocalFileFlag})=>{
  
  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      type: ".xlsx, "
    })
  }

  return (
    <Dropdown className="mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size='lg'>
        XLSX to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler}>CSV</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>XLS</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>ODS</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const SpreadsheetCSV = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "text/csv",
      type: ".csv, "
    })
  }

  return (
    <Dropdown className="mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size='lg'>
        CSV to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler}>XLSX</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>XLS</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>ODS</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const SpreadsheetXLS = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "application/vnd.ms-excel",
      type: ".xls, "
    })
  }

  return (
    <Dropdown className="mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size='lg'>
        XLS to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler}>CSV</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>XLSX</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>ODS</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const SpreadsheetODS = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "application/vnd.oasis.opendocument.spreadsheet",
      type: ".ods, "
    })
  }

  return (
    <Dropdown className="mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size='lg'>
        ODS to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler}>CSV</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>XLS</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>XLSX</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
