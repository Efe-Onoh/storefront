import { Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { LogoHeading } from "../../components/Heading/LogoHeading";
import { Management, Notification } from "../../assets/svg/General/General";
import DropdownMenu from "../../components/Menu/DropdownMenu";
import { headerDropdownItems } from "../../constants/Constants";
import { KeyboardArrowDown } from "@mui/icons-material";
import DeviceFilter from "../../components/DeviceFilter/DeviceFilter";
import Table from "../../components/Table/Table";

function DeviceManagement() {
  return (
    <Grid item p={2}>
        <Grid container direction={"column"} rowGap={1}> 
            <Grid item>
                <Grid container alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item>
                    <LogoHeading Icon={Management} heading={"Management - Device List"} variant={"ManropeBold22"} />
                    </Grid>

                    <Grid item>
                    <Grid container columnGap={2}>
                        <Grid item>
                        <DropdownMenu menuItems={headerDropdownItems} defaultValue={"English"} />
                        </Grid>
                        <Grid className="clickable-bar" item>
                        <IconButton aria-label={"menu-icon"} size="small" color="#000">
                            <Notification />
                        </IconButton>
                        </Grid>
                        <Grid item>
                        <Grid className="img-bar" container justifyContent={"space-between"} alignItems={"center"} pr={2}>
                            <Grid item>
                            <img className="user-img" src={"/images/user.png"} height="100%" alt="My Image" />
                            </Grid>
                            <Grid item px={2}>
                            <Typography variant="ManropeBold16">M. Karavidas</Typography>
                            </Grid>
                            <Grid item>
                            <IconButton aria-label={"menu-icon"} size="small" color="#000">
                                <KeyboardArrowDown />
                            </IconButton>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="device-filter-container" item>
                <DeviceFilter/>
            </Grid>
            <Grid className="device-management-table" item>
                <Table/>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default DeviceManagement;
