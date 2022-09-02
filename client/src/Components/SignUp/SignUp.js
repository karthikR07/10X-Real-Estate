import React, { useState } from "react";
import "./style.css"
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"


const SignUp =()=>{
    const [show ,setShow]= useState(false)
    const showPassword =()=>{
        setShow(prevState=>!prevState)
    }
    return(
        <body>
    <div className="signup-page">
        <h1>Sign up</h1>
        <h6>Create New Account</h6>
        <form method="post">
            <div className="text_field">
                <input type="text" placeholder="User ID" required/>
                <span></span>
            </div>
            <div className="text_field">
                <input type={show ? "text" : "password"} placeholder="Password" id="myInput" required/>
                <span className="eye1" onClick={showPassword}>
                    {
                        show ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
                    }
                </span>
            </div>
            <div className="text_field1">
                <input type={show ? "text" : "password"} placeholder="Confirm Password" id="myInput1" required/>
                <span className="eye2" onClick={showPassword}>
                    {
                        show ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
                    }
                </span>
            </div>
            <button type="submit">Sign up</button>
            <div className="sign-up">
                <a href="#">Sign in</a>
            </div>
        </form>
    </div>
</body>
    )
}

export default SignUp;