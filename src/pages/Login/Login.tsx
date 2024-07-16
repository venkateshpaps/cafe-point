import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './Login.scss'

function Login() {
    const [mobileNumber, setVal] = useState("");
    const [isShowPassword, handleShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleMobileNumber = (e: any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value.length < 11 && (e.target.value === "" || regex.test(e.target.value))) {
            setVal(e.target.value);
        }
    };
    const handleLoginSubmit = () => {
        const userInfo = {
            firstName: 'Venkatesh',
            lastName: 'Saiprasath',
            mobileNumber: '9176812395',
            Gender: 'Male'
        };
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <div className="mobile-number-container">
                    <input
                        className="mobile-number-input"
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChange={handleMobileNumber}
                    />
                </div>
                <div className="password-container">
                    {isShowPassword ?
                        <div onClick={()=>handleShowPassword(!isShowPassword)}>
                            <span className="eye-icon" style={{ color: '#000000', fontSize: '18px', marginRight: '4px' }}>
                                <i className="fa-solid fa-eye"></i>
                            </span>
                        </div> :
                        <div onClick={()=>handleShowPassword(!isShowPassword)}>
                            <span className="eye-slash-icon" style={{ color: '#000000', fontSize: '18px', marginRight: '4px' }}>
                                <i className="fa-solid fa-eye-slash"></i>
                            </span>
                        </div>
                    }
                    <input
                        className="password-input"
                        type={isShowPassword ? "text" : "password"}
                        placeholder="Password"
                    />
                </div>
                <button onClick={handleLoginSubmit} >
                    Submit
                </button>
            </div>
           
        </div>
    );
}
export default Login;