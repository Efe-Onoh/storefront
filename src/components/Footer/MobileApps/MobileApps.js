import React from "react";
import { Box, Grid } from "@mui/material";
import MobileImages from "./MobileImages";
import { AppleStore, AppleStoreSmall, HuaweiStore, PlayStore, PlayStoreSmall } from "../../../assets/svg/General/General";

function MobileApps({width=170, height=70, size}) {
  const appstore = [
    {
      name: "Apple Store",
      icon: size==="small"? <AppleStoreSmall/> :<AppleStore width={width} height={height} />,
    },
    {
      name: "Google Play",
      icon: size==="small"? <PlayStoreSmall/> :<PlayStore width={width} height={height} />,
    },
  ];

  return (
    <Grid container>
      {appstore.map((item, index) => {
        return <Grid key={index} item><MobileImages key={item.name} name={item.name} icon={item.icon} /></Grid>;
      })}
    </Grid>
  );
}

export default MobileApps;
