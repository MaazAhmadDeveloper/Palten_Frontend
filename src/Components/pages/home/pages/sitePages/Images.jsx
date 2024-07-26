import React, {useContext, useEffect, useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { message } from 'antd';
import {
  ImageJPEG,
  ImagePNG,
  ImageWEBP,
  ImageGIF,
  ImageTIFF,
  ImageSVG,
} from "../home/dropdowns/ImageDropDowns";
import SecondRow from "../home/SecondRow";
import FileCoversionBox from "../../FileCoversionBox";
import { useDataSelection } from "../../../../../context/ContextApi";
import { getFileExtension } from "../../../../../functions/getLocalFileExtension";
import { getFileNameWithoutExtension } from "../../../../../functions/getLocalFileExtension";
import SelectFileDropdown from "../../SelectFileDropdown";

function Images({setUser}) {
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
      await setAcceptInput("image/tiff,image/jpeg,image/png,image/webp,image/gif,image/svg+xml");
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
          <Row className="image-row-text">
            <Col lg={12}>
              <h2 className="mb-3"> 49 Image Conversions </h2>
              <p className="mb-4">
              Transform your images effortlessly with our versatile conversion options. Convert between popular formats such as JPEG, PNG, WEBP, and more. Whether you need to change an image to a different format for web optimization, printing, or sharing, our tool provides high-quality conversions across 49 formats to meet your every need.              
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={12} className=" mb-5">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <ImageJPEG 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <ImagePNG 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <ImageWEBP 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <ImageGIF 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <ImageTIFF 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <ImageSVG 
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

export default Images;
