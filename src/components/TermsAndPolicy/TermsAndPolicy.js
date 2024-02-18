import React from "react";

import { Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function TermsAndPolicy() {
  return (
    <Grid className="termsPrivacyWrapper">
      <Stack direction="row" spacing={2}>
        <Typography variant="ManropeRegular12">
          <Link href="/" className="bottomGridFooter-links">
            Terms of use
          </Link>
        </Typography>
        <Typography variant="ManropeRegular12">
          <Link href="/" className="bottomGridFooter-links">
            Privacy Policy
          </Link>
        </Typography>
        <Typography variant="ManropeRegular12">
          
          <Link href="/" className="bottomGridFooter-links">
            Legal
          </Link>
        </Typography>
      </Stack>
    </Grid>
  );
}

export default TermsAndPolicy;
