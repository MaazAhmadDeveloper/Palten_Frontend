import React, { createContext, useState, useRef, useContext } from "react";

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const fileInputRef = useRef(null);
  const [fileLocal, setFileLocal] = useState(null);
  const [fileExtenstion, setFileExtenstion] = useState(null);
  const [fileNameWithoutExtension, setFileNameWithoutExtension] = useState(null);
  const [dropDownFlag, setDropDownFlag] = useState(true);
  const [convertFlag, setConvertFlag] = useState(true);
  const [firstRowSelection, setFirstRowSelection] = useState();
  const [convertedFileUrl, setConvertedFileUrl] = useState('');
  const [selectedExtension, setSelectedExtension] = useState('');
  const [acceptInput, setAcceptInput] = useState('');
  const [blogsData, setblogsData] = useState([]);

  return (
    <SelectionContext.Provider
      value={{
        fileInputRef,
        fileLocal, setFileLocal,
        fileExtenstion, setFileExtenstion,
        fileNameWithoutExtension, setFileNameWithoutExtension,
        dropDownFlag, setDropDownFlag,
        convertFlag, setConvertFlag,
        firstRowSelection, setFirstRowSelection,
        convertedFileUrl, setConvertedFileUrl,
        selectedExtension, setSelectedExtension,
        acceptInput, setAcceptInput,
        blogsData, setblogsData,

      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export const useDataSelection = () => useContext(SelectionContext);
