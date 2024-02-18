import { Grid } from "@mui/material";
import React from "react";
import MainHeader from "./MainHeader/MainHeader";
import Subheader from "./Subheader/Subheader";
import Nav from "./Navigation/Nav";


function Header() {
  return (
    <Grid item>
          <Grid container direction={"column"}>
           <MainHeader/>
           <Subheader/>
           <Nav/>
          </Grid>
    </Grid>
  );
}

export default Header;
