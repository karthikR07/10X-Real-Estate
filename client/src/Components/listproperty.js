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
            <div className="container">
                <form className="searchBar">
                    <input type = "text" placeholder="Search" name="q"></input>
                    <button><img src=""/></button>
                </form>
                <button type="submit" value="+Add Property" className="button07">+Add Property</button>
            </div>
            <div className="container2">
                <TableContainer className="TC">
                    <Table sx={{minWidth:650}} aria-label="simple table">
                        <TableHead className="TH">
                            <TableRow>
                                <TableCell >PPDID</TableCell>
                                <TableCell >Images</TableCell>
                                <TableCell >Property</TableCell>
                                <TableCell >Contact</TableCell>
                                <TableCell >Area</TableCell>
                                <TableCell >Views</TableCell>
                                <TableCell >Status</TableCell>
                                <TableCell >Days Left</TableCell>
                                <TableCell >Action</TableCell>
                            </TableRow>
                            <TableBody>
                                <TableRow>
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
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default ListProp;