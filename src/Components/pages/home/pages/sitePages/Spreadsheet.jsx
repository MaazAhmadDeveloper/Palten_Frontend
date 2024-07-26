import React, {useContext, useEffect, useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SecondRow from "../home/SecondRow";
import { message } from 'antd';
import {
  SpreadsheetXLSX,
  SpreadsheetCSV,
  SpreadsheetXLS,
  SpreadsheetODS,
} from "../home/dropdowns/SpreadSheetDropdown";
import { useDataSelection } from "../../../../../context/ContextApi";
import FileCoversionBox from "../../FileCoversionBox";
import SelectFileDropdown from "../../SelectFileDropdown";
import { getFileExtension } from "../../../../../functions/getLocalFileExtension";
import { getFileNameWithoutExtension } from "../../../../../functions/getLocalFileExtension";

function SpreadSheet({setUser}) {
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
      await setAcceptInput(".xls,.xlsx,.ods,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.oasis.opendocument.spreadsheet,text/csv");
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
          <Row className="spreadsheet-row-text">
            <Col lg={12}>
              <h2 className="mb-3"> 12 SpreadSheet Conversions </h2>
              <p className="mb-4">
              Manage your spreadsheets with ease using our comprehensive conversion tool. Convert between XLSX, XLS, CSV, and ODS formats seamlessly. Whether you’re updating data, preparing reports, or integrating with other software, our tool ensures that your spreadsheet conversions are handled accurately and efficiently.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={12} className=" mb-5"> 
              <div style={{display: "flex",justifyContent: "space-between",flexWrap: "wrap",}}>

                <SpreadsheetXLSX 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <SpreadsheetCSV 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <SpreadsheetXLS 
                  setFirstRowSelection={setFirstRowSelection}
                  setGetLocalFileFlag={setGetLocalFileFlag}
                />
                <SpreadsheetODS 
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

export default SpreadSheet;
