import { Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { Cart, DrugStoreLogo, Rewards, Wishlist } from "../../../assets/svg/General/General";
import { LogoHeading } from "../../Heading/LogoHeading";
import Search from "../../Search/Search";
import { isExtraSmallScreens, isMediumScreens, isSmallScreens } from "../../../constants/Constants";


function MainHeader() {
    const extraSmallScreen = useMediaQuery(isExtraSmallScreens);
    const smallScreen = useMediaQuery(isSmallScreens);
    const mediumScreen = useMediaQuery(isMediumScreens);
  
  return (
    <Grid className="mainHeader" item>
          <Grid container columnGap={2} rowGap={2} justifyContent={"space-between"} alignItems={"center"}>
           <Grid item xs={12} md={2}>
            <DrugStoreLogo/>
           </Grid>
           <Grid item xs={12} md minWidth={smallScreen?"":650}>
            <Search/>
           </Grid>
           <Grid item xs={12} md>
            <Grid container columnSpacing={2} justifyContent={"flex-end"} alignItems={"center"}>
                <Grid item>
                    <Grid container alignItems={"center"} spacing={2}>
                        <Grid item>
                                <LogoHeading Icon={Wishlist} variant={"ManropeBold12"} heading={"Wishlist"}/>
                        </Grid>
                        <Grid item>
                            |
                        </Grid>
                        <Grid item>
                                <LogoHeading Icon={Rewards} variant={"ManropeBold12"} heading={"Rewards"}/>
                        </Grid>
                        <Grid item>
                            |
                        </Grid>
                        <Grid item>
                            <LogoHeading Icon={Cart} variant={"ManropeBold12"} heading={"My Cart"}/>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item>
                    <Button className="btn contained login" variant="contained" size="large">Login</Button>
                </Grid>
            </Grid>
           </Grid>
          </Grid>
    </Grid>
  );
}

export default MainHeader;
