import React from "react";
import { FileAddFilled, FolderOpenFilled, LinkOutlined, FileFilled, LoadingOutlined, LoginOutlined } from '@ant-design/icons';
import {Dropdown, DropdownButton, ButtonGroup, Button} from 'react-bootstrap';

function SelectFileDropdown({fromComputerHandler}) {
  return (
    <Dropdown
      className="select-file-dropdown"
    >
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size="lg">
        <FileAddFilled />
        &nbsp;&nbsp; Select File
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="dropdown-item" onClick={fromComputerHandler}>
          {" "}
          <FolderOpenFilled /> &nbsp;&nbsp; From my computer{" "}
        </Dropdown.Item>
        <Dropdown.Item className="dropdown-item" disabled={true}>
          {" "}
          <LinkOutlined /> &nbsp;&nbsp; By URL
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SelectFileDropdown;
