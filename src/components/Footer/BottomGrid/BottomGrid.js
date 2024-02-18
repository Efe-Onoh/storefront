import React from "react";
import { Grid, Typography } from "@mui/material";
import TermsAndPolicy from "../../TermsAndPolicy/TermsAndPolicy";

function BottomGrid() {
  // const countryCode = useSelector((state) => state.selectedCountry.initial);
  return (
    <Grid container className="bottomGridFooter" justifyContent={"space-between"}>
      <Grid item>
        <TermsAndPolicy />
      </Grid>
      <Grid item>
        <Typography variant="ManropeRegular12" gutterBottom>
          Copyright © 2023-{new Date().getFullYear()} All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default BottomGrid;
