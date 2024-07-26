import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Dropdown, DropdownButton, ButtonGroup, Button} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { FileAddFilled, FolderOpenFilled, LinkOutlined, FileFilled, LoadingOutlined, DownloadOutlined } from '@ant-design/icons';
import { JPEG, PNG, SVG, GIF, WEBP, TIFF, PDF, TXT, DOCX, XLSX, CSV, XLS, ODS, Unsupporting} from './FilesTypeDropdown';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { imageFilefunc } from './pages/sitePages/ConvertButtonHandler/ImageFile';
import { documentFilefunc } from './pages/sitePages/ConvertButtonHandler/documentFile';
import { spreadsheetFilefunc } from './pages/sitePages/ConvertButtonHandler/spreadsheetFile';

function FileCoversionBox({fileLocal, fileExtenstion, convertedFileUrl, setConvertedFileUrl, fileNameWithoutExtension, selectedExtension, setSelectedExtension, convertFlag, setConvertFlag, setUser,}) {
    const [loadingFlag, setLoadingFlag] = useState(false);
    const navigate = useNavigate();
    
    const convertButtonHandler = async()=>{
      setConvertedFileUrl('')
      // const storedData = localStorage.getItem('userEmail');
      const storedData = "faq storedData";
      // if (storedData) {      
      // }else{
      //   message.error("Please Sign up to get free credits ! ")
      //   return navigate("/signup");
      // }

        // Image Converion Via API
        if (fileLocal.type.split('/')[0] === "image") {
          imageFilefunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);

        }
        // Document Converion Via API
        documentFilefunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
        
        // SpreadSheet Converion Via API
        spreadsheetFilefunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
      
    };

    const dropDownChangeHandler = (e)=>{
      
      setSelectedExtension(e.target.textContent.trim().toLowerCase());
      setConvertFlag(false);
    }
    
  return (
    <> 
          <Container  className='file-converting-box mt-5 mb-5'>
    <Row>
      <Col md={4} >
           <div className='filename-div'>
              <FileFilled style={{fontSize: "1.5rem"}} className='me-4'/>
             {fileLocal?.name }
           </div>
       </Col>

      <Col md={4} className='dropdown-div-conversion'>
      
              <DropdownButton id="dropdown-basic-button"  title={`Convert to ${selectedExtension?.toUpperCase()}`} variant='danger '>
                  
                      {/* IMAGES */}
                  {fileExtenstion === "jpeg" && <JPEG dropDownChangeHandler={dropDownChangeHandler}/>}
                  {fileExtenstion === "png" && <PNG dropDownChangeHandler={dropDownChangeHandler}/>}
                  {fileExtenstion === "svg" && <SVG dropDownChangeHandler={dropDownChangeHandler}/>}
                  {fileExtenstion === "gif" && <GIF dropDownChangeHandler={dropDownChangeHandler}/>}
                  {fileExtenstion === "webp" && <WEBP dropDownChangeHandler={dropDownChangeHandler}/>}
                  {fileExtenstion === "tiff" && <TIFF dropDownChangeHandler={dropDownChangeHandler}/>}

                      {/* DOCUMENT */}
                  {fileExtenstion === "pdf" && <PDF dropDownChangeHandler={dropDownChangeHandler}/>}
                  {fileExtenstion === "txt" && <TXT dropDownChangeHandler={dropDownChangeHandler}/>}                  
                  {fileExtenstion === "docx" && <DOCX dropDownChangeHandler={dropDownChangeHandler}/>}  

                      {/*SPREADSHEET */}
                  {fileExtenstion === "xlsx" && <XLSX dropDownChangeHandler={dropDownChangeHandler}/>}  
                  {fileExtenstion === "csv" && <CSV dropDownChangeHandler={dropDownChangeHandler}/>}  
                  {fileExtenstion === "xls" && <XLS dropDownChangeHandler={dropDownChangeHandler}/>}
                  {fileExtenstion === "ods" && <ODS dropDownChangeHandler={dropDownChangeHandler}/>}

                      {/* FALLBACK */}
                  {!["jpeg", "png", "svg", "gif", "webp", "tiff", "pdf", "txt", "docx", "xlsx", "csv", "xls", "ods"].includes(fileExtenstion) && <Unsupporting />}

              </DropdownButton>
       </Col>
         {/* <LoadingOutlined style={{fontSize:"2.5em"}}/>  */}
        <Col md={2} >  
        <button   onClick={convertButtonHandler} disabled={convertFlag} className='convert-button-in-box convert-box-buttons btn btn-outline-danger '> 
          Convert
        </button>
        </Col>

        <Col md={2}>
          {loadingFlag && <LoadingOutlined className=' loading-spinner ms-4' style={{fontSize:"2.5em"}}/>} 
          {convertedFileUrl && (
            // {fileNameWithoutExtension}.{selectedExtension}
          <a href={convertedFileUrl} className=' convert-box-buttons btn btn-success download-div-conversion ' download={`${fileNameWithoutExtension}.${selectedExtension}`}>Download<div className='file-txt-for-mobile'> File</div><DownloadOutlined className='download-icon' style={{fontSize:"1.5rem"}} /></a>
          )}

        </Col>

    </Row>
    </Container>
    
    </>
  )
}

export default FileCoversionBox;