import React, {useContext, useEffect, useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { message } from 'antd';
import {
  DocumentDOCX,
  DocumentTXT,
  DocumentPDF,
} from "../home/dropdowns/DocumentDropdown";
import SecondRow from "../home/SecondRow";
import { useDataSelection } from "../../../../../context/ContextApi";
import FileCoversionBox from "../../FileCoversionBox";
import { getFileExtension } from "../../../../../functions/getLocalFileExtension";
import { getFileNameWithoutExtension } from "../../../../../functions/getLocalFileExtension";
import SelectFileDropdown from "../../SelectFileDropdown";

function Document({setUser}) {
  const [getLocalFileFlag, setGetLocalFileFlag] = useState(false);

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
      setAcceptInput(firstRowSelection.type == null?  "."+firstRowSelection.parentLabel : firstRowSelection.type+firstRowSelection.parentLabel  );
      setConvertFlag(false);
      setTimeout(() => {
        fileInputRef.current.click();
        setAcceptInput('');
      }, 600);
    }
  }, [getLocalFileFlag])
  
  const fromComputerHandler = async()=>{
    if (fileInputRef.current) {
      await setAcceptInput(".pdf, .docx, .txt, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/plain");
      fileInputRef.current.click();
    } else {
      console.log(dropDownFlag);
      console.error('fileInputRef is not available');
    }
    // setAcceptInput('');
  }

  const handleFileChange = (e)=>{
    const selectedFile = e.target.files[0];

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
    }else{
      return ;
    }
  }else{
    message.error("Sorry Your file size is too large !");
    e.target.value = null;
    return ;
  }
  }

  return (
    <>
      <div className="first-top-container">
        <Container>
          <Row className="document-row-text">
            <Col lg={12}>
              <h2 className="mb-3"> 8 Document Conversions </h2>
              <p className="mb-4">
              Effortlessly convert your documents with our versatile tool. Whether you need to transform PDFs into editable formats like TXT, or convert TXT and DOCX files into different formats, we’ve got you covered. Our service supports a variety of document conversions to streamline your workflow and enhance productivity.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={12} className=" mb-5">
              <div style={{display: "flex",justifyContent: "space-between",flexWrap: "wrap",}}>

                <DocumentDOCX 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <DocumentTXT 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <DocumentPDF 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

<SelectFileDropdown 
  fromComputerHandler={fromComputerHandler}
/>

  {dropDownFlag? null : 

    <FileCoversionBox 
        fileExtenstion={fileExtenstion}
        fileLocal={fileLocal}
        setConvertedFileUrl={setConvertedFileUrl}
        convertedFileUrl={convertedFileUrl}
        fileNameWithoutExtension={fileNameWithoutExtension}
        setSelectedExtension={setSelectedExtension}
        selectedExtension={selectedExtension}
        firstRowSelection={firstRowSelection}
        setConvertFlag={setConvertFlag}
        convertFlag={convertFlag}
        setUser={setUser}
    />

  }

      <Container>
        <SecondRow />
      </Container>


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
  );
}

export default Document;
