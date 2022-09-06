// import Header from "./header";
import "./sideContent.css";

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
            <li><img src="./Images/img1.png"/>&nbsp;&nbsp;<a href="#"> Property</a></li><br/>
            <li><img src="./Images/img2.png"/>&nbsp;&nbsp;<a href="#" className="link5">PPD Assistance</a></li><br/>
            <li><img src="./Images/img3.png"/>&nbsp;&nbsp;<a href="#" className="link5">Received Interest</a></li><br/>
            <li><img src="./Images/img4.png"/>&nbsp;&nbsp;<a href="#" className="link5">Sent Interest</a></li><br/>
            <li><img src="./Images/img5.png"/>&nbsp;&nbsp;<a href="#" className="link5">Property Views</a></li><br/>
            <li><img src="./Images/img6.png"/>&nbsp;&nbsp;<a href="#" className="link5">Tariff Plan</a></li><br/>
            </div>
        </div>
    </div>
    )
}

export default SideContent;