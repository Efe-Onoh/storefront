import React from "react";
import { LogoHeading } from "../Heading/LogoHeading";
import OffpageSlider from "../Slider/OffpageSlider";
import ProductCard from "./ProductCard";
import { isExtraSmallScreens, isMediumScreens, isSmallScreens, products } from "../../constants/Constants";
import { Grid, useMediaQuery } from "@mui/material";
import { BackArrow, NextArrow } from "../../assets/svg/General/General";

function ProductList({SideBarAd}) {
  const extraSmallScreen = useMediaQuery(isExtraSmallScreens);
  const smallScreen = useMediaQuery(isSmallScreens);
  const mediumScreen = useMediaQuery(isMediumScreens);

  const cardWidth = extraSmallScreen ? 250 : smallScreen ? 275 : mediumScreen ? 304 : 230;
  const cardHeight = extraSmallScreen ? 252 : smallScreen ? 282 : mediumScreen ? 354 : 374;

  const productsArray = products.map((product, index) => {
    return (
      <Grid key={product.id} item>
        <ProductCard
          rating={product.rating}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          name={product.name}
          image={product.imgPath}
          price={product.price}
          status={product.status}
        />
      </Grid>
    );
  });

  return (
    <Grid item p={2}>
      <Grid className="product-list-container" container columnGap={4}>
        {!smallScreen ? <Grid item>
          <SideBarAd/>
        </Grid> : " "}
        <Grid className="product-list" item xs>
          <Grid container position={"relative"}>
                {smallScreen ?
                <Grid item >
                  <SideBarAd/>
                </Grid> : " "}
                <OffpageSlider customClassName={smallScreen ? "product-list-slider-sm-50" : " "} items={productsArray} dots dark={false} itemWidth={cardWidth}  hover={true} nextItemIcon={<NextArrow/>} prevItemIcon={<BackArrow/>}/>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductList;
