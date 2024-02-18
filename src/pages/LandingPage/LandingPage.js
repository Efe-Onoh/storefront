import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { isExtraSmallScreens, isMediumScreens, isSmallScreens } from "../../constants/Constants";
import Header from "../../components/Header/Header";
import Banner from "./Banner/Banner";
import ProductList from "../../components/Product/ProductList";
import { RecommendationsIcon, ShopByConditionsIcon, SpecialOffersIcon } from "../../assets/svg/General/General";
import BlogPosts from "./BlogPosts/BlogPosts";

function LandingPage() {
    const extraSmallScreen = useMediaQuery(isExtraSmallScreens);
    const smallScreen = useMediaQuery(isSmallScreens);
    const mediumScreen = useMediaQuery(isMediumScreens);
  
    const cardWidth = extraSmallScreen ? "100%" : smallScreen ? "100%" : mediumScreen ? 216 : 216;
    const cardHeight = extraSmallScreen ? "50vh" : smallScreen ? 500 : mediumScreen ? 270 : 270;

    
const SpecialOffers = ()=>(
    <Grid item >
        <Grid container className="sidebar-ad" style={{background: 'linear-gradient(180deg, #E0A30B 0%, #FFCF57 100%)'}} direction={"column"} rowGap={2} alignItems={"center"} justifyContent={"space-between"}>
            <Grid item>
                <Grid container direction={"column"} textAlign={"center"} rowGap={2}>
                    <Grid item><Typography variant="ManropeBold18">Special offers</Typography></Grid>
                    <Grid item>
                        <Button className="btn contained sidebarad" variant="contained">View All</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <SpecialOffersIcon width={cardWidth} height={cardHeight}/>
            </Grid>
        </Grid>
    </Grid>
)
const Recommendations = ()=>(
    <Grid item >
        <Grid container className="sidebar-ad"  style={{background: 'linear-gradient(180deg, #E17838 0%, #EB8F58 100%)'}} direction={"column"} rowGap={2} alignItems={"center"}>
            <Grid item>
                <Grid container direction={"column"} textAlign={"center"} rowGap={2}>
                    <Grid item><Typography variant="ManropeBold18">Product<br/>Recommendations</Typography></Grid>
                    <Grid item>
                        <Button className="btn contained sidebarad" variant="contained">View All</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <RecommendationsIcon width={cardWidth} height={cardHeight}/>
            </Grid>
        </Grid>
    </Grid>
)
const ShopByConditions = ()=>(
    <Grid item >
        <Grid container className="sidebar-ad"  style={{background: 'linear-gradient(180deg, #0AA79F 0%, #63CCC7 100%)'}} direction={"column"} rowGap={2} alignItems={"center"}>
            <Grid item>
                <Grid container direction={"column"} textAlign={"center"} rowGap={2}>
                    <Grid item><Typography variant="ManropeBold18">Shop by<br/>Conditions</Typography></Grid>
                    <Grid item>
                        <Button className="btn contained sidebarad" variant="contained">View All</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <ShopByConditionsIcon width={cardWidth} height={cardHeight}/>
            </Grid>
        </Grid>
    </Grid>
)


const AdsArray = [SpecialOffers, Recommendations, ShopByConditions]

  return (
    <Grid className="landingPageBody">
      <Header/>
      <Banner/>
      {AdsArray.map((Ad,index)=>(<ProductList SideBarAd={Ad}/>))}
      <BlogPosts/>
      <Footer />
    </Grid>
  );
}

export default LandingPage;
