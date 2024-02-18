import React from "react";
import { Button, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobileApps from "../Footer/MobileApps/MobileApps";
import { isExtraSmallScreens, isMediumScreens, isSmallScreens } from "../../constants/Constants";

const Subscribe = () => {

  const extraSmallScreen = useMediaQuery(isExtraSmallScreens);
  const smallScreen = useMediaQuery(isSmallScreens);
  const mediumScreen = useMediaQuery(isMediumScreens);

  const navigate = useNavigate();

  const handleSeoLinkClick = (data) => {
    navigate(`/Devices`);
  };

  return (
      <Grid container spacing={2} py={4} justifyContent={"space-between"}>
        <Grid item xs={12} md={6}>
          <Grid container direction={"column"} rowGap={2}>
            <Grid item>
              <Typography variant="ManropeBold16">Get latest deals and more</Typography>
            </Grid>
            <Grid item>
              <Grid container alignItems={"center"} columnGap={2}>
                <Grid item xs>
                  <TextField className="subscribe input" type="email" placeholder="Enter your email here" fullWidth size={smallScreen?"small":"medium"}></TextField>
                </Grid>
                <Grid item>
                  <Button className="btn contained subscribe" variant="contained" size="large">Send</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction={"column"} rowGap={2}>
            <Grid item>
              <Typography variant="ManropeBold16">Download the app</Typography>
            </Grid>
            <Grid item>
              <MobileApps/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default Subscribe;
