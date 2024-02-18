import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { FileDownloadOutlined, LocalPrintshopOutlined } from "@mui/icons-material";
import DropdownMenu from "../Menu/DropdownMenu";
import { deviceTypes } from "../../constants/Constants";
import Date from "../Date/Date";
import RegisterModal from "../Modal/RegisterModal";

function DeviceFilter() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Grid item>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <DropdownMenu customClass={"deviceType device-filter"} menuItems={deviceTypes} defaultValue="Device Type" />
        </Grid>
        <Grid item>
          <TextField className="device-filter input" variant="outlined" placeholder="Enter device name here" size="small"/>
        </Grid>

        <Grid item>
          <Date customClass="device-filter" />
        </Grid>

        <Grid item>
          <Button className="btn search device-filter" variant="outlined">
            Search
          </Button>
        </Grid>

        <Grid item>
          <Button className="btn outlined green device-filter" variant="outlined" startIcon={<FileDownloadOutlined />}>
            Export
          </Button>
        </Grid>

        <Grid item>
          <Button className="btn outlined green device-filter" variant="outlined" startIcon={<LocalPrintshopOutlined />}>
            Print All
          </Button>
        </Grid>

        <Grid item>
          <Button className="btn contained green device-filter" variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
            Register new device
          </Button>
        </Grid>
      </Grid>
      <RegisterModal open={openModal} handleClose={handleClose} />
    </Grid>
  );
}

export default DeviceFilter;
