import { Grid, Typography } from "@mui/material";
import React from "react";
import MobileApps from "../../Footer/MobileApps/MobileApps";


function Subheader() {
  return (
    <Grid className="subHeader" item>
          <Grid container rowGap={1} justifyContent={"space-between"}>
           <Grid item >
            <Typography variant="ManropeBold12">Free delivery and returns* | 24x7 delivery service* | +971-365-698-13 </Typography>
           </Grid>
           <Grid item>
            <Grid container columnGap={2} alignItems={"flex-end"}>
                <Grid item>
                    <Typography variant="ManropeBold12">Download App</Typography>
                </Grid>
                <Grid item>
                    <MobileApps size={"small"}/>
                </Grid>
            </Grid>
           </Grid>
          </Grid>
    </Grid>
  );
}

export default Subheader;
