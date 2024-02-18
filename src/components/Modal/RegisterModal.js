import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import DropdownMenu from "../Menu/DropdownMenu";
import { deviceTypes } from "../../constants/Constants";

function RegisterModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Grid className="register-modal" item>
        <Grid container direction={"column"} justifyContent={"space-between"} height={"100%"}>
          <Grid item>
            <Grid container direction={"column"} rowGap={2}>
              <Grid item>
                <Grid container direction={"column"}>
                  <Grid item>
                    <Typography variant="ManropeBold22">Register New Device</Typography>
                  </Grid>
                  <Grid item>
                  <Typography id="modal-modal-description">We will sent a verification code to the email address.</Typography>
                  </Grid>
                </Grid>
               
              </Grid>

              <Grid item>
                <Grid container columnGap={2}>
                  <Grid item>
                    <Typography variant="ManropeMedium15">1. Device Details</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="ManropeMedium15">
                      2. Generate Key Pairs
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="ManropeMedium15">
                      3. Download Key Pairs
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs={12} md={3}>
                    <Grid item>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Device Type
                      </Typography>
                    </Grid>
                    <Grid item>
                      <DropdownMenu customClass={"deviceType device-filter"} menuItems={deviceTypes} defaultValue="Device Type" />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Grid item>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Device Name
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField variant="outlined" fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item xs>
                    <Grid item>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Serial No
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField variant="outlined" fullWidth size="small"/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        <Grid item>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Button className="btn outlined red device-filter" variant="outlined" onClick={handleClose}>Cancel</Button>
            </Grid>
            <Grid item>
              <Button className="btn contained green device-filter" variant="contained" onClick={handleClose}>Generate Key Pairs</Button>
            </Grid>
          </Grid>
        </Grid>
        </Grid>

      </Grid>
    </Modal>
  );
}

export default RegisterModal;
