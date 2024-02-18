import React from "react";
import { Grid } from "@mui/material";
import Carousel from "../../../components/Carousel/Carousel";
import { BackArrow, NextArrow } from "../../../assets/svg/General/General";

export const bannerItems = [
    {
      icon: <img src={"/images/bannerimage.png"} width={"100%"} alt="banner"/>,
      label: (
        <>
          Get a free
          <br />
          valuation
        </>
      ),
      btnLabel: "Book now",
    },
    {
        icon: <img src={"/images/bannerimage.png"} width={"100%"} alt="banner"/>,
        label: (
        <>
          Increase
          <br />
          the revenue
          <br />
          of your
          <br />
          property
        </>
      ),
      btnLabel: "Learn more",
    },
    {
        icon: <img src={"/images/bannerimage.png"} width={"100%"} alt="banner"/>,
        label: (
        <>
          Are you
          <br />
          relocating
        </>
      ),
      btnLabel: "Get a quotation",
    },
  ];
  
const sliderComponentsArray = bannerItems.map((item, index) => (
    <Grid key={index} container justifyContent={"center"} alignItems={"center"} py={4}>
      <Grid className="" item>
        {item.icon}
      </Grid>
    </Grid>
));

function Banner() {
  return (
    <Grid item className="BannerBody">
      <Grid container direction={"column"}>
        <Grid item>
          <Carousel customClassName={"bannerCarousel"} items={sliderComponentsArray} nextItemIcon={<NextArrow />} prevItemIcon={<BackArrow />} dark={false} dots />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Banner;
