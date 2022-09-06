import "./listproperty.css"
import Header from "./header"
import SideContent from "./sideContent"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


function ListProp(){

    const authToken = localStorage.getItem("authorization");
    const [listData, setListdata] = useState([]);
    const [search, setSearch] = useState("");
    
    const navigate = useNavigate();

    function handelAddProp(e){
        navigate("/mainProp");
    }

    useEffect(()=>{
        fetch("http://localhost:3001/viewProperty/view",{method :"GET",headers:{authorization: authToken}})
        .then((res)=>{
            return res.json();
        }).then((uData)=>{
            setListdata(uData.reverse())
        }).catch((err)=>{
            navigate("/")
        });
    },[]);

    function handleStatus(e){
        if(e.target.value === "unsold"){
            e.target.value = "sold";
        }
    }

    return(
        <div>
            <SideContent/>
            <Header/>
            <div className="box1">
                <form className="searchBar">
                    <input onChange={(e)=>{setSearch(e.target.value)}} type = "text" placeholder="Search" name="q"></input>
                    <button><img src=""/></button>
                </form>
                <button style={{backgroundColor:"#284E91"}} type="submit" value="+Add Property" className="button07" onClick={handelAddProp}>+Add Property</button>
            </div>
            <div className="info">
                <TableContainer className="tc">
                    <Table sx={{minWidth:650}} aria-label="simple table">
                        <TableHead className="th">
                            <TableRow>
                                <TableCell style={{color:"#284E91"}} >PPDID</TableCell>
                                <TableCell style={{color:"#284E91"}}>Images</TableCell>
                                <TableCell style={{color:"#284E91"}}>Property</TableCell>
                                <TableCell style={{color:"#284E91"}}>Contact</TableCell>
                                <TableCell style={{color:"#284E91"}}>Area</TableCell>
                                <TableCell style={{color:"#284E91"}}>Views</TableCell>
                                <TableCell style={{color:"#284E91"}}>Status</TableCell>
                                <TableCell style={{color:"#284E91"}}>Days Left</TableCell>
                                <TableCell style={{color:"#284E91"}}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        
                        {listData.filter((user)=>{
                            const PPID = "PPD" + user._id[user._id.length - 4] + user._id[user._id.length - 3] + user._id[user._id.length - 2] + user._id[user._id.length - 1]
                            if(search === ""){
                                return user;
                            }else if(PPID.toLowerCase().includes(search.toLowerCase())){
                                return user;
                            }
                        }).map((user, i)=>{
                            const PPID = "PPD" + user._id[user._id.length - 4] + user._id[user._id.length - 3] + user._id[user._id.length - 2] + user._id[user._id.length - 1]
                            return(
                                <TableBody>
                                    <TableRow >
                                        <TableCell>{PPID}</TableCell>
                                        <TableCell><img src=""/></TableCell>
                                        <TableCell>{user.PropertyType}</TableCell>
                                        <TableCell>{user.Mobile}</TableCell>
                                        <TableCell>{user.TotalArea}</TableCell>
                                        <TableCell>{user.Views}</TableCell>
                                        <TableCell><input type="submit" value="unsold" className="status" onClick={handleStatus}/></TableCell>
                                        <TableCell>{user.DaysLeft}</TableCell>
                                        <TableCell><img src=""/><img src=""/></TableCell>
                                    </TableRow>
                                </TableBody>
                            )
                        })}
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default ListProp;