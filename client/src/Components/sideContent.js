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
            <li><img src=""className="home"/>&nbsp;&nbsp;<a href="#"> Property</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"> Assistance</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"> Received Interest</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"> Sent Interest</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"> Property Views</a></li><br/>
            <li><img src=""/>&nbsp;&nbsp;<a href="#" className="link5"> Tariff Plan</a></li><br/>
            </div>
        </div>
    </div>
    )
}

export default SideContent;