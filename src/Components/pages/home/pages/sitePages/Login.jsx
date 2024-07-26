import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EyeOutlined, EyeInvisibleOutlined, LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';

function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [verifyFlag, setVerifyFlag] = useState(true);
  const [otpValue, setOtpValue] = useState('');
  const [otpLoadingFlagSignup, setOtpLoadingFlagSignup ] = useState(false);
  const [loadingFlagSignup, setLoadingFlagSignup ] = useState(false);
  const [userMail, setUserMail] = useState();
  const navigate = useNavigate();

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const navigateHandler = ()=>{
    message.warn("You can sign up here !")
    return navigate("/signup");
  }

  const formSubmitHandler = async (e)=>{
    e.preventDefault();
    setLoadingFlagSignup(true);
    const email = e.target.elements.email.value;
    setUserMail(email);
  
    const dataObj = {
      email,
      password 
    }

      try {
        const {data} = await axios.post("/api/users/getuser", dataObj);
        message.info(" You are successfully log in !");
        setVerifyFlag(true);
        localStorage.setItem('userEmail', JSON.stringify(data));

        // console.log(data);
        window.location.href = "/";
        
      } catch (error) {

        if (error.response) {

          if (error.response.status === 401) {
            message.error("Login failed. Incorrect email or password.");
          } else if (error.response.status === 404) {
            message.error("Login failed. User not found.");
            navigate("/signup");
          }else if (error.response.status === 403) {
            message.info("You are not verified OTP sent to your mail again by 'zaccyname1125@gmail.com'");
            setVerifyFlag(false);
            setLoadingFlagSignup(false);
          } else {
            message.error("Login failed. Please try again later.");
            setLoadingFlagSignup(false)
          }
        }else if (error.request) {

          message.error("No response received. Please try again later.");
          setLoadingFlagSignup(false)
        } else {

          message.error("Error setting up the request. Please try again later.");
          setLoadingFlagSignup(false)
        }
      }
  }

  const otpSubmitHandler = async (e)=>{
    e.preventDefault();
    setOtpLoadingFlagSignup(true)
    try {
      const {data} = await axios.post("/api/users/verifyOtp", {otpValue, userMail});
  
      // Store data in local storage
      localStorage.setItem('userEmail', JSON.stringify(data));
  
      window.location.href = "/";
      setOtpLoadingFlagSignup(false)
      message.success("You have successfully Verified your email !");
      
    } catch (error) {
      message.error("Failed to verification, Try agian ! ");
      console.log(error);
    }
  }

  return (
    <div className="form-container mt-4 mb-4 p-2 p-sm-5">
        
    {verifyFlag ? <Form onSubmit={formSubmitHandler}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='input-Field' id='email' type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          className='input-Field'
          type={showPassword ? "text" : "password"} 
          placeholder="Password" 
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      <button onClick={togglePasswordVisibility} className='hide-button'>
        {showPassword ? <EyeInvisibleOutlined style={{fontSize:"20px"}}/> : <EyeOutlined style={{fontSize:"20px"}} /> }
          &nbsp;&nbsp;
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      </Form.Group>
      <a  className='forgot-button'>
        Forgot Your Password?
      </a>
      <a  className='forgot-button ms-4' onClick={navigateHandler}>
        I have no account?
      </a>
      <Button variant="" className='btn-outline-danger button-c mt-2' type="submit">
      {loadingFlagSignup && <LoadingOutlined style={{fontSize:"2em", marginRight:"10%"}}/>}
        Login
      </Button>
    </Form>
    
    :
    <Form onSubmit={otpSubmitHandler}>

            <Form.Group className="mb-3" id='otp'>
        <Form.Label>OTP</Form.Label>
        <Form.Control type="text" maxLength={6} required value={otpValue} placeholder="Enter your 6 digit OTP" onChange={(e)=>{setOtpValue(e.target.value)}}/>
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

export default Login;