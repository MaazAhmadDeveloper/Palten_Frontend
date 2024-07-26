import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { message } from "antd";
import { useNavigate } from 'react-router-dom';

const styleObj = {
    backgroundColor: "#b53836",
    borderRadius: "5px",
    color: "white"
}

function Pricing({user}) {

    const [credits, setCredits] = useState(10);
    const navigate = useNavigate();

    const handleSliderChange = (event) => {
        setCredits(event.target.value);
    };
    const creditBuyHandler = () => {
        if (user == '') {
            navigate("/signup")
            message.warning("You can get only 10 Credits free by Sign Up !")
        }else{
            message.warning("Contact with admin +923239697203 / maazdeveloper404@gmail.com to get more credits ")
        }
    };

    return (
        <>

            <div className='p-sm-5 ' style={{ backgroundColor: "#2e3338", color: "white" }}>

                <Col className='p-4 text-center'>
                    <h1 className='mb-3'> Fair & Flexible Pricing </h1>
                    <p>Discover our fair and flexible pricing options tailored to suit various needs. We offer transparent pricing with no hidden fees, ensuring that you get the best value for your file conversion needs. Choose a plan that fits your requirements and enjoy high-quality conversions without breaking the bank.</p>
                </Col>
            </div>

            <div className="credit-container">

                <div className="slider-container">
                    <div className="credits-display">
                        Conversion Credits: {credits}
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={credits}
                        onChange={handleSliderChange}
                        className="slider"
                    />
                </div>

                <div className='package mt-5 mb-5 m-auto'>
                    <b style={{color:"#5a5a5a"}}>PACKAGE</b>
                    <h3 className='pt-4' >US${Math.round(credits * 0.05 *100)/100}</h3>
                    <p style={{color:"#adadad"}}> Price of 1 credit is $0.05 / Sign Up for to get free 10 Credits </p>

                    <button onClick={creditBuyHandler} className='btn btn-lg btn-outline-danger mt-4'><ShoppingCartOutlined style={{fontSize: "30px"}} /> &nbsp;&nbsp; BUY </button>
                    
                </div>
            </div>
        </>
    )
}

export default Pricing;