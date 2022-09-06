// import Header from "./header";
import "./sideContent.css";
import {AiFillHome,AiOutlineBell} from "react-icons/ai"
import {GrDownload,GrFormUpload} from "react-icons/gr"
import {IoMdEye} from "react-icons/io"
import {BsTag} from "react-icons/bs"
function SideContent(){
    return(
    <div class = "side">
        <div class="sideBar">
            <div className = "container1">
                <div>
                    <div>
                        <h1 className = "log">10X Real Estate</h1>
                    </div>
                </div>
            </div>
            <div className = "container2">
            <li><img src=""/>&nbsp;&nbsp;<a href="#"><AiFillHome/> Property</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"><AiOutlineBell/>PPD Assistance</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"><GrDownload/> Received Interest</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"> <GrFormUpload/>Sent Interest</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"><IoMdEye/> Property Views</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"><BsTag/> Tariff Plan</a></li><br/>
            </div>
        </div>
    </div>
    )
}

export default SideContent;