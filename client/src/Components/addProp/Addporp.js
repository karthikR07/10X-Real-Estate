import React from "react";
import Header from "../header";
import SideContent from "../sideContent"
import { Grid,Box } from "@material-ui/core";
import "./style.css"

const Addprop =()=>{
    return(
        <div>
            <SideContent/>
            <Header/>
            <div className="slider">
                <Grid container>
                    <Box>
                        ADD NEW PROPERTY
                    </Box>
                    <form className="form">
                        <Box>
                            
                        </Box>
                    </form>
                </Grid>
            </div>
        </div>
    )
}