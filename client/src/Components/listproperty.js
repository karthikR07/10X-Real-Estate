import "./listproperty.css"
import Header from "./header"
import SideContent from "./sideContent"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ListProp(){
    return(
        <div>
            <SideContent/>
            <Header/>
            <div className="box1">
                <form className="searchBar">
                    <input type = "text" placeholder="Search" name="q"></input>
                    <button><img src=""/></button>
                </form>
                <button style={{backgroundColor:"#284E91"}} type="submit" value="+Add Property" className="button07">+Add Property</button>
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
                        <TableBody>
                                <TableRow >
                                    <TableCell>PPDID</TableCell>
                                    <TableCell><img src=""/></TableCell>
                                    <TableCell>PropertyType</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>TotalArea</TableCell>
                                    <TableCell>Views</TableCell>
                                    <TableCell><input type="submit" value="Unsold" className="status"/></TableCell>
                                    <TableCell>DaysLeft</TableCell>
                                    <TableCell><img src=""/><img src=""/></TableCell>
                                </TableRow>
                            </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default ListProp;