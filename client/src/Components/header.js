import "./header.css";
import {useState, useEffect}from "react";
import {useNavigate, useHistory} from "react-router-dom";

function Header(){
    const authToken = localStorage.getItem("authorization");
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/logout/done",{method:"GET",headers:{authorization:authToken}})
        .then((res)=>{
            return res.json();
        }).then((uData)=>{
            setData(uData);
        })
    })

    const navigate = useNavigate();
    function handleLogout(e){
        localStorage.setItem("authorization","");
        navigate("/")
        function preventBack(){window.history.forward();}
        setTimeout(preventBack(),0);
        window.onunload = ()=>{""};
    }

    return(
        <div class = "headPage">
            <div class ="header">
                {data.map((user, i)=>{
                    return(
                        <div>
                            <div class = "heading">
                                <p>{user.mail}</p>
                                <select className ="dropDown" onChange = {handleLogout}>
                                    <option></option>
                                    <option>Logout</option>
                                </select>
                            </div>
                            <div className="id">
                                <p>User Id:{user._id}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Header;