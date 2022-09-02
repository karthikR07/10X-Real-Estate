import React, { useState } from "react";
import "./style.css"
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

const Login =()=>{
    const [show ,setShow]= useState(false)
    const showPassword =()=>{
        setShow(prevState =>!prevState)
    }
    return(
    <body>
        <div className="login-page">
        <h1>Login</h1>
            <form method="post">
                <div className="text_field">
                    <input type="text" placeholder="User ID" className="myInput" required/>
                    <span></span>
                </div>
                <div className="text_field">
                    <input type={show ? "text" :"password"} placeholder="Password" className="myInput" required/>
                    <span className="eye" onClick={showPassword}>
                        {
                            show ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
                        }
                    </span>
                </div>
            <div className="forgot-pass">Forgot Password?</div>
                <button type="submit">Login</button>
                <div className="sign-up">
                    Not a member? <a href="#">Sign Up</a>
                </div>
            </form>
        </div>
</body>
    )
}

export default Login;