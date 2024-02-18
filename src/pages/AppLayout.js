import { Grid } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import { Outlet, useMatch } from "react-router-dom";

function AppLayout(){
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const match = useMatch("/devices");
    return (
        <Grid>
        <Grid container>
            <Grid item>
                {match ? <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>: ""}
            </Grid>
            <Grid item xs>
                <Outlet/>
            </Grid>
        </Grid>
        </Grid>
    )
}

export default AppLayout