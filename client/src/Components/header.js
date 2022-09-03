import "./header.css";

function Header(){
    return(
        <div class = "headPage">
            <div class ="header">
                <div>
                    <div class = "heading">
                        <p>user</p>
                        <select className ="dropDown">
                            <option>Logout</option>
                        </select>
                    </div>
                    <div className="id">
                        <p>User Id</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;