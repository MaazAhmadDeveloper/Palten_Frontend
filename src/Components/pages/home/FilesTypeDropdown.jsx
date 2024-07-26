import React from 'react';
import {Dropdown, DropdownButton, ButtonGroup, Button} from 'react-bootstrap';

export function JPEG({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> PNG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> WEBP</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> TIFF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> AVIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> HEIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> GIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> RAW</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> BMP</Dropdown.Item>
    </>
  )
}

export function PNG({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> JPEG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> TIFF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> WEBP</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> AVIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> HEIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> GIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> RAW</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> BMP</Dropdown.Item>
    </>
  )
}

export function SVG({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> JPEG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> PNG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> WEBP</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> TIFF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> AVIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> HEIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> GIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> RAW</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> BMP</Dropdown.Item>
    </>
  )
}

export function GIF({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> JPEG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> PNG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> TIFF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> WEBP</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> AVIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> HEIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> RAW</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> BMP</Dropdown.Item>
    </>
  )
}

export function WEBP({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> JPEG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> PNG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> TIFF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> GIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> AVIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> HEIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> RAW</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> BMP</Dropdown.Item>
    </>
  )
}

export function TIFF({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> JPEG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> PNG</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> WEBP</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> GIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> AVIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> HEIF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> RAW</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> BMP</Dropdown.Item>
    </>
  )
}

export function TXT({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> HTML</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> PDF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> DOCX</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> PPTX</Dropdown.Item>
    </>
  )
}

export function DOCX({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> HTML</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> PDF</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> TXT</Dropdown.Item>
    </>
  )
}

export function XLS({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> XLSX</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> CSV</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> ODS</Dropdown.Item>
    </>
  )
}

export function XLSX({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> CSV</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> XLS</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> ODS</Dropdown.Item>
    </>
  )
}

export function CSV({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> XLSX</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> XLS</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> ODS</Dropdown.Item>
    </>
  )
}

export function ODS({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> XLSX</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> XLS</Dropdown.Item>
        <Dropdown.Item  onClick={dropDownChangeHandler}> CSV</Dropdown.Item>
    </>
  )
}

export function PDF({dropDownChangeHandler}) {
  return (
    <>
        <Dropdown.Item  onClick={dropDownChangeHandler}> TXT</Dropdown.Item>
    </>
  )
}

export function Unsupporting() {
  return (
    <>
        <Dropdown.Item disabled> Unsupported format ! </Dropdown.Item>
    </>
  )
}
