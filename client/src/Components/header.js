import "./header.css";

// import Nav from "react-bootstrap/Nav"
// import NavDropdown from "react-bootstrap/NavDropdown"
import {useState, useEffect}from "react";
import {useNavigate, useHistory} from "react-router-dom";
// import {AiOutlineUser} from "react-icons/ai"

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
                                {/* <Nav>
                                    <AiOutlineUser className="icon"/>
                                    <NavDropdown title="User">
                                        <NavDropdown.Item className="dropDown" onChange={handleLogout}>Logout</NavDropdown.Item>
                                        <NavDropdown.Item className="dropDown">{user.mail}</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav> */}
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