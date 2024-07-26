import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {message} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

message.config({
  duration: 5,
  getContainer: () => document.getElementById('top-navbar'),
  style: {
    zIndex: 9099, 
  },
});

function SignUp() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [verifyFlag, setVerifyFlag] = useState(true);
  const [loadingFlagSignup, setLoadingFlagSignup ] = useState(false);
  const [otpLoadingFlagSignup, setOtpLoadingFlagSignup ] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [userMail, setUserMail] = useState();
  const navigate = useNavigate();

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

const formSubmitHandler = async (e)=>{
  e.preventDefault();
  setLoadingFlagSignup(true);
  const userName = e.target.elements.userName.value;
  const email = e.target.elements.email.value;
  setUserMail(email)

  const dataObj = {
    userName,
    email,
    password
  }

  if (password.length >= 8) {
    try {
      const {data} = await axios.post("/api/users/addusers", dataObj);
      message.info(`Verify your Email, We have send code to your Email by 'zaccyname1125@gmailcom' !`);
      setVerifyFlag(false);
      setLoadingFlagSignup(false);
      // console.log(data);
      
    } catch (error) {
      if (error.response.data?.user) {
        message.error("User already exist !")
        navigate("/login")
      }else{ 
      message.error("Sign Up failed. Please try again.")
      setLoadingFlagSignup(false);
      console.log("Sign Up failed. Please try again. ", error);
      }
    }
  }else{
    message.error("Your Password in too short, it should at least 8 characters !")
    setLoadingFlagSignup(false);
  }

}

const otpSubmitHandler = async (e)=>{
  e.preventDefault();
  setOtpLoadingFlagSignup(true)

  try {
    const {data} = await axios.post("/api/users/verifyOtp", {otpValue,userMail});

    // Store data in local storage
    localStorage.setItem('userEmail', JSON.stringify(data));
    setOtpLoadingFlagSignup(false)
    window.location.href = "/";
    message.success("You have successfully Verified your email !");
    
  } catch (error) {
    message.error("Failed to verification, Try agian ! ");
    setOtpLoadingFlagSignup(false)
    console.log(error);
  }
}

  return (
    <div className="form-container mt-4 mb-4 p-2 p-sm-5">
        
    {verifyFlag ? <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control className='input-Field' type="text" id='userName' placeholder="Enter User Name" required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control className='input-Field' type="email" id='email' placeholder="Please Enter Valid email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control 
          className='input-Field'
          type={showPassword ? "text" : "password"} 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
           id='password'
          />
        <Form.Text className="text-muted">
          At least 8 characters.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      <button onClick={togglePasswordVisibility} className='hide-button'>
        {showPassword ? <EyeInvisibleOutlined style={{fontSize:"20px"}}/> : <EyeOutlined style={{fontSize:"20px"}} /> }
          &nbsp;&nbsp;
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      </Form.Group>
      <Button variant="" className='btn-outline-danger button-c' type="submit">
        {loadingFlagSignup && <LoadingOutlined style={{fontSize:"2em", marginRight:"10%"}}/>}
        Sign Up
      </Button> 
    </Form> 
    
    :

    <Form onSubmit={otpSubmitHandler}>

            <Form.Group className="mb-3" id='otp'>
        <Form.Label>OTP</Form.Label>
        <Form.Control type="text" maxLength={6} value={otpValue} placeholder="Enter your 6 digit OTP" onChange={(e)=>{setOtpValue(e.target.value)}}/>
      </Form.Group>

      <Button variant="" className='btn-outline-danger button-c' type="submit">
      {otpLoadingFlagSignup && <LoadingOutlined style={{fontSize:"2em", marginRight:"10%"}}/>}
        Verify
      </Button>
    </Form>
    }
    </div>
  );
}

export default SignUp