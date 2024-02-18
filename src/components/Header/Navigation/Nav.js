import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { headerNav, isExtraSmallScreens, isMediumScreens, isSmallScreens } from "../../../constants/Constants";
import { KeyboardArrowDown } from "@mui/icons-material";
import { BackArrow, NextArrow } from "../../../assets/svg/General/General";
import OffpageSlider from "../../Slider/OffpageSlider";


function Nav() {
    const extraSmallScreen = useMediaQuery(isExtraSmallScreens);
    const smallScreen = useMediaQuery(isSmallScreens);
    const mediumScreen = useMediaQuery(isMediumScreens);

    const cardWidth = extraSmallScreen ? 150 : smallScreen ? 175 : mediumScreen ? 204 : 230;
    const cardHeight = extraSmallScreen ? 252 : smallScreen ? 282 : mediumScreen ? 354 : 374;
  
    return smallScreen ? (
          <Grid className="nav" item>
          <Grid container columnGap={2} justifyContent={"center"}>
            <OffpageSlider 
                customClassName={"clientReviewSlider"} 
                items={headerNav.map((item,index)=>(
                    <Grid key={index}item xs={1}>
                        <Grid container direction={"column"} alignItems={"center"}>
                            <Grid item>{item.icon}</Grid>
                            <Grid item><Typography variant="ManropeBold12">{item.label}{item.dropdown ? <KeyboardArrowDown/> : ""}</Typography></Grid>
                        </Grid>
                    </Grid>
                ))} 
                dots 
                dark={false} 
                itemWidth={cardWidth} 
                hover={true} 
                nextItemIcon={<NextArrow/>} 
                prevItemIcon={<BackArrow/>}
                />
          </Grid>
          </Grid>
    ) :
   (
    <Grid className="nav" item>
    <Grid container columnGap={2} justifyContent={"center"}>
        {headerNav.map((item,index)=>(
            <Grid key={index} item xs={1}>
                
                <Grid container direction={"column"} alignItems={"center"}>
                    <Grid item>{item.icon}</Grid>
                    <Grid item><Typography variant="ManropeBold12">{item.label}{item.dropdown ? <KeyboardArrowDown/> : ""}</Typography></Grid>
                </Grid>
            </Grid>
        ))}
    </Grid>
    </Grid>
  );
}

export default Nav;
