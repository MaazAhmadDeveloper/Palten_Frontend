import axios from "axios";
import { message } from "antd";

const pdfToTxtfunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/document-pdfToTxt", formData, {
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

const txtToPdffunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/document-txtToPdf", formData, {
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

const txtToDocxfunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/document-txtToDocx", formData, {
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

const txtToHtmlfunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/document-txtToHtml", formData, {
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

const txtToPptxfunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/document-txtToPptx", formData, {
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

const docxToHtmlfunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/document-docxToHtml", formData, {
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

const docxToPdffunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/document-docxToPdf", formData, {
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

const docxToTxtfunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser)=>{

    setLoadingFlag(true)
    try {
        const formData = new FormData();
        formData.append('file', fileLocal);
        formData.append('userData', storedData); 
        formData.append('format', selectedExtension); 

        // console.log(formData);
        const {data} = await axios.post("/api/file/document-docxToTxt", formData, {
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


export const documentFilefunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser )=>{
// console.log(fileLocal);
    if (selectedExtension !== ''){

      if ( fileLocal.type == "application/pdf") {
        
        switch (selectedExtension) {
          case "txt":
            pdfToTxtfunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
            break;
          }

        }else if (fileLocal.type == "text/plain" ) {

          switch (selectedExtension) {
            case "pdf":
              txtToPdffunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
              break;

            case "docx":
              txtToDocxfunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
              break;

            case "html":
              txtToHtmlfunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
              break;
              
            case "pptx":
              txtToPptxfunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
              break;
            }
        }else if (fileLocal.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ) {

          switch (selectedExtension) {
            case "pdf":
              docxToPdffunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
              break;

            case "txt":
              docxToTxtfunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
              break;

            case "html":
              docxToHtmlfunc(setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser);
              break;
            }
        }


      }else{
          message.error("Please select file to convert ! ")
        }
}