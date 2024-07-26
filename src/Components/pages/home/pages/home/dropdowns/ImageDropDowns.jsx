import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import Dropdown from 'react-bootstrap/Dropdown';


export const ImageJPEG = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    
    setGetLocalFileFlag(prev => !prev)
      setFirstRowSelection({
        itemLabel: e.target.innerText.toLowerCase(),
        parentLabel: "jpeg",
        type: "image/"
      })
  }

  return (
    <Dropdown className="m-auto mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
        JPEG to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler}>PNG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>WEBP</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>TIFF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>AVIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>HEIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>GIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>RAW</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>BMP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const ImagePNG = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "png",
      type: "image/"
    })
  }

  return (
    <Dropdown className="m-auto mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
        PNG to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler}>JPEG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>WEBP</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>TIFF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>AVIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>HEIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>GIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>RAW</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>BMP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const ImageWEBP = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "webp",
      type: "image/"
    })
  }

  return (
    <Dropdown className="m-auto mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
        WEBP to
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={currentClickHandler}>PNG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>JPEG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>TIFF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>AVIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>HEIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>GIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>RAW</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>BMP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const ImageGIF = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "gif",
      type: "image/"
    })
  }

  return (
    <Dropdown className="m-auto mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
        GIF to
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={currentClickHandler}>PNG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>WEBP</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>TIFF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>AVIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>HEIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>JPEG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>RAW</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>BMP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const ImageTIFF = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "tiff",
      type: "image/"
    })
  }

  return (
    <Dropdown className="m-auto mt-3 mb-3">
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
        TIFF to
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={currentClickHandler}>PNG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>WEBP</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>JPEG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>AVIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>HEIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>GIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>RAW</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>BMP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export const ImageSVG = ({setFirstRowSelection, setGetLocalFileFlag})=>{

  const currentClickHandler = (e)=>{
    setGetLocalFileFlag(prev => !prev)
    setFirstRowSelection({
      itemLabel: e.target.innerText.toLowerCase(),
      parentLabel: "svg+xml",
      type: "image/"
    })
  }

  return (
    <Dropdown className="m-auto mt-3 mb-3" >
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
        SVG to
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={currentClickHandler}>PNG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>WEBP</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>JPEG</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>AVIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>HEIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>GIF</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>RAW</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>BMP</Dropdown.Item>
        <Dropdown.Item onClick={currentClickHandler}>TIFF</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
