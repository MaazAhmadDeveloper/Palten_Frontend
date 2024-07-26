import React, { useState, useEffect, useRef, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FirstRow from './pages/home/FirstRow';
import SecondRow from './pages/home/SecondRow';
import { FileAddFilled, FolderOpenFilled, LinkOutlined, FileFilled, LoadingOutlined, LoginOutlined } from '@ant-design/icons';
import {Dropdown, DropdownButton, ButtonGroup, Button} from 'react-bootstrap';
import FileCoversionBox from './FileCoversionBox';
import { getFileNameWithoutExtension, getFileExtension } from '../../../functions/getLocalFileExtension';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDataSelection } from '../../../context/ContextApi';
import SelectFileDropdown from './SelectFileDropdown';

function Home({setUser}) {

const navigate = useNavigate();
const {
  fileInputRef, fileLocal,
  setFileLocal, fileExtenstion,
  setFileExtenstion, fileNameWithoutExtension,
  setFileNameWithoutExtension,
  dropDownFlag, setDropDownFlag,
  convertFlag, setConvertFlag,
  firstRowSelection, setFirstRowSelection,
  convertedFileUrl, setConvertedFileUrl,
  selectedExtension, setSelectedExtension,
  acceptInput, setAcceptInput
} = useDataSelection();

useEffect(()=>{
  console.log("useeffect due to firstRowSelection");
      if (firstRowSelection && typeof firstRowSelection === 'object') {
        // console.log(firstRowSelection.type+firstRowSelection.parentLabel);
        setAcceptInput(firstRowSelection.type == null?  "."+firstRowSelection.parentLabel : firstRowSelection.type+firstRowSelection.parentLabel  );
        setConvertFlag(false);
        setTimeout(() => {
          fileInputRef.current.click();
          setAcceptInput('');
        }, 600);
      }
}, [firstRowSelection])

const fromComputerHandler = ()=>{
  fileInputRef.current.click();
  setAcceptInput('');
}

const handleFileChange = (e) => {

  let selectedFile = e.target.files[0];

if (selectedFile.size < 10000000    ) {
  setConvertedFileUrl('');
  if (selectedFile) {
    // console.log(selectedFile);
    const extension = getFileExtension(selectedFile.name);

    
    setFileLocal(selectedFile)
    setDropDownFlag(false)
    setFirstRowSelection();
    setAcceptInput('');
    setFileExtenstion(extension);
    setFileNameWithoutExtension(getFileNameWithoutExtension(selectedFile.name));
    
    // its essential double due to firstRowSelection.itemLabel
    setSelectedExtension('')
    setSelectedExtension(firstRowSelection?.itemLabel ? firstRowSelection?.itemLabel.toLowerCase() : '' )
    
    if (['tiff', 'jpeg', 'png', 'webp', 'gif', 'svg'].includes(extension)) {
      navigate('/image', {});

    } else if (['xls', 'xlsx', 'csv', 'ods'].includes(extension)) {
      navigate('/spreadsheet', {});

    } else if (['pdf', 'txt', 'docx'].includes(extension)) {
      navigate('/document', {});

    } else {
      message.error("Unsupported format, try with another format");
    }
  }else{
    return ;
  }
  
}else{
  message.error("Sorry Your file size is too large !");
  e.target.value = null;
  return ;
}
};



  return (
    <>

    <div className='first-top-container'>
      <Container>
          <FirstRow
            setFirstRowSelection={setFirstRowSelection}
            firstRowSelection={firstRowSelection}
          />
      </Container>
    </div>

{/* DropDown */}

<SelectFileDropdown 
  fromComputerHandler={fromComputerHandler}
/>


    <div className=''>
      <Container >
          <SecondRow  />
      </Container>
    </div>
    

{/* Display NONE */}
    {<div>
          <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept={`${acceptInput}`}
      />

    </div>}
    </>
  )
}

export default Home