import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {SettingOutlined, FileFilled, FundFilled, FileAddFilled} from '@ant-design/icons';

function SecondRow() {
  return (
    <>
    <Row className='second-row-content'>

        <Col sm={6}>
            <div style={{display:"flex"}}>

                <SettingOutlined className='icon-class'/>
                <div>
                    <h3 className='mb-3'> Formats Supported </h3>
                    <p>Explore a vast array of file formats we support, from common image formats like JPEG and PNG to complex spreadsheet and document types. Our tool provides comprehensive compatibility to meet all your file conversion needs.</p>
                </div>

            </div>
        </Col>


        <Col sm={6}>
            <div style={{display:"flex"}}>

                <FileFilled className='icon-class'/>
                <div>
                    <h3 className='mb-3'> High-Quality Conversions </h3>
                    <p>Experience top-notch conversion quality with every file processed. Our tool maintains the integrity of your data, ensuring that conversions are accurate and professional, preserving the quality and formatting of your original files.</p>
                </div>

             </div>
        </Col>
        
    </Row>
    <Row className='second-row-content'>

        <Col sm={6}>
            <div style={{display:"flex"}}>

                <FundFilled className='icon-class'/>
                <div>
                    <h3 className='mb-3'> Easy to Use </h3>
                    <p>Simplify your file conversion process with our user-friendly interface. Designed for efficiency, our tool makes it easy to convert files without any hassle. Just select your file, choose the desired format, and let our application handle the rest.</p>
                </div>

            </div>
        </Col>


        <Col sm={6}>
            <div style={{display:"flex"}}>

                <FileAddFilled className='icon-class'/>
                <div>
                    <h3 className='mb-3'> Easy File Add </h3>
                    <p>Adding files is a breeze with our intuitive upload options. Whether you’re dragging and dropping or selecting from your file explorer, our tool makes file addition quick and straightforward, so you can focus on what matters most.</p>
                </div>

             </div>
        </Col>
        
    </Row>
    </>
  )
}

export default SecondRow;