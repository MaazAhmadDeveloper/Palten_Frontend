import axios from "axios";
import { message } from "antd";


const xlsxConversion = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/spreadsheet-xlsxConversion", formData, {
            responseType: 'blob',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([data]));
        console.log(url);
        setConvertedFileUrl(url);

        console.log("Successfully image file converted !");

        setUser(prevUser => {
          if (prevUser.hasOwnProperty('credits') && typeof prevUser.credits === 'number' && prevUser.credits > 0) {
            return {
              ...prevUser,
              credits: prevUser.credits - 1
            };
          } else {
            return prevUser;
          }
        });
        setLoadingFlag(false);

    } catch (error) {
        if(error?.response?.status == 423){
          message.error("You have used your all credits !")
        }

        console.log("Error while Document " , error);
        setLoadingFlag(false);
    }
}


const csvConversion = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/spreadsheet-csvConversion", formData, {
            responseType: 'blob',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([data]));
        console.log(url);
        setConvertedFileUrl(url);

        console.log("Successfully image file converted !");

        setUser(prevUser => {
          if (prevUser.hasOwnProperty('credits') && typeof prevUser.credits === 'number' && prevUser.credits > 0) {
            return {
              ...prevUser,
              credits: prevUser.credits - 1
            };
          } else {
            return prevUser;
          }
        });
        setLoadingFlag(false);

    } catch (error) {
        if(error?.response?.status == 423){
          message.error("You have used your all credits !")
        }

        console.log("Error while Document " , error);
        setLoadingFlag(false);
    }
}


const xlsConversion = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/spreadsheet-xlsConversion", formData, {
            responseType: 'blob',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([data]));
        console.log(url);
        setConvertedFileUrl(url);

        console.log("Successfully image file converted !");

        setUser(prevUser => {
          if (prevUser.hasOwnProperty('credits') && typeof prevUser.credits === 'number' && prevUser.credits > 0) {
            return {
              ...prevUser,
              credits: prevUser.credits - 1
            };
          } else {
            return prevUser;
          }
        });
        setLoadingFlag(false);

    } catch (error) {
        if(error?.response?.status == 423){
          message.error("You have used your all credits !")
        }

        console.log("Error while Document " , error);
        setLoadingFlag(false);
    }
}



const odsConversion = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/spreadsheet-odsConversion", formData, {
            responseType: 'blob',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([data]));
        console.log(url);
        setConvertedFileUrl(url);

        console.log("Successfully image file converted !");

        setUser(prevUser => {
          if (prevUser.hasOwnProperty('credits') && typeof prevUser.credits === 'number' && prevUser.credits > 0) {
            return {
              ...prevUser,
              credits: prevUser.credits - 1
            };
          } else {
            return prevUser;
          }
        });
        setLoadingFlag(false);

    } catch (error) {
        if(error?.response?.status == 423){
          message.error("You have used your all credits !")
        }

        console.log("Error while Document " , error);
        setLoadingFlag(false);
    }
}



export const spreadsheetFilefunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser )=>{
 
  if (selectedExtension !== ''){
     
    if ( fileLocal.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            xlsxConversion(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
            
          }else if (fileLocal.type == "text/csv") {
            csvConversion(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
            
          }else if (fileLocal.type == "application/vnd.ms-excel") {
            xlsConversion(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);

          }else if (fileLocal.type == "application/vnd.oasis.opendocument.spreadsheet") {
            odsConversion(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);

          }
    
          }else{
              message.error("Please select file to convert ! ")
            }
    }