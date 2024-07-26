import axios from "axios";
import { message } from "antd";

export const imageFilefunc = async (setLoadingFlag, selectedExtension, fileLocal, storedData, setConvertedFileUrl, setUser )=>{

    if (selectedExtension !== ''){
        setLoadingFlag(true)
        try {
            const formData = new FormData();
            formData.append('file', fileLocal);
            formData.append('userData', storedData); 

            // console.log(formData);
            const {data} = await axios.post("/api/file/image-converter", formData, {
                responseType: 'blob',
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([data]));
            // console.log(url);
            setConvertedFileUrl(url);

            // console.log("Successfully image file converted !");
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
            if(error.response.status == 423){
              message.error("You have used your all credits !")
            }

            console.log("Error while image " , error);
            setLoadingFlag(false);
        }
      }else{
          message.error("Please select file to convert ! ")
        }
}