import "./SignUp.css";
import {useState}from "react";
import axios from "axios";
import{Link, useNavigate}from "react-router-dom";

const SignUp =()=>{
    const [data,setData] = useState({mail:"", password:"", confirmpassword:""});
    const navigate = useNavigate();
    
    function handlemail(e){
        const mail = e.target.value;
        setData(form =>({...form,mail:mail}));
    }
    function handlepassword(e){
        const pw = e.target.value;
        setData(form=>({...form,password:pw}));
    }
    function handleConfirmPass(e){
        const cpw = e.target.value;
        setData(form=>({...form,confirmpassword:cpw}));
    }

    function handlesignup(e){
        e.preventDefault();
        if(data.mail.length == 0){
            alert("Enter your email");
        }else if(data.password.length<7){
            alert("Minimum 7 letters required for password");
        }else if(data.password !== data.confirmpassword){
            alert("Password does not match")
        }else{
            axios({
                url:"http://localhost:3001/signup/reg",
                method:"POST",
                headers:{

                },
                data:data
            }).then((res)=>{
                navigate("/");
                setData({mail:"",password:"",confirmpassword:""})
                console.log(res);
                alert("User craeted sucessfully")
            }).catch((err)=>{
                alert("User Already Exist")
            })
        }
    }

    return(
        <div className="mainpage">
            <div className="container">
                <div className="logo">
                    <div>
                        <h1>10X Real Estate</h1>
                    </div>
                </div>
                <form className="mainform" onSubmit={handlesignup}>
                    <div >
                        <p style={{opacity:"0.6"}}>Create New Account</p>
                    </div>
                    <br/> 
                    <div className="form-all">  
                        <input className="mail" type="email" placeholder="Mail ID" onChange={handlemail}></input>
                    </div>
                    <br/> 
                    <div className="form-all">
                        <input className="password" type="password" placeholder="Password" onChange = {handlepassword}></input>
                    </div>
                    <br/> 
                    <div className="form-all">
                        <input className="confirm" type="password" placeholder="Confirm Password" onChange= {handleConfirmPass} ></input>
                    </div>
                    <br/> 
                    <br/>
                    <div className="form-all">
                        <input className="btn" value="Signup" type="submit" />
                    </div>
                    <br/> 
                    <div className="form-all">
                    <Link to="/"><a className="sign">Sign in</a></Link>
                    </div>        
                </form>
            </div>

            
        </div>
    )
}

export default SignUp;