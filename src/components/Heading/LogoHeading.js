import React from "react";
import { Grid, Typography } from "@mui/material";

//accepts a string name for a listing card icon, and a heading string
export const LogoHeading = ({ Icon, heading, variant }) => {
  return (
    <Grid container spacing={1} alignItems={"center"}>
      <Grid item>
        <Icon/>
      </Grid>
      <Grid item>
        <Typography variant={variant}>{heading}</Typography>
      </Grid>
    </Grid>
  );
};
