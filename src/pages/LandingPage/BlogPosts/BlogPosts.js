import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { blogs, isExtraSmallScreens, isMediumScreens, isSmallScreens } from "../../../constants/Constants";
import BlogPost from "../../../components/Card/Blog/BlogPost";
import OffpageSlider from "../../../components/Slider/OffpageSlider";
import { BackArrow, NextArrow } from "../../../assets/svg/General/General";



function BlogPosts() {
  const extraSmallScreen = useMediaQuery(isExtraSmallScreens);
  const smallScreen = useMediaQuery(isSmallScreens);
  const mediumScreen = useMediaQuery(isMediumScreens);
  
  const cardWidth = extraSmallScreen ? 150 : smallScreen ? 275 : mediumScreen ? 304 : 330;
  const cardHeight = extraSmallScreen ? 252 : smallScreen ? 282 : mediumScreen ? 354 : 374;
  
  const blogPostsArray = blogs.map((post, index) => {
    return (
      <Grid key={post.id} item>
        <BlogPost image={post.imgPath} title={post.title} description={post.description} cardWidth={cardWidth}/>
      </Grid>
    );
  });
  return (
    <Grid item px={3}>
    <Grid container rowGap={2} direction={"column"}>
        <Grid item>
          <Grid container alignItems={"center"} justifyContent={"space-between"}>

          <Grid item>
            <Typography variant="ManropeBold22">Blog Post</Typography>
          </Grid>
          <Grid item>
            <Button className="btn contained" variant="contained" size="small">View All</Button>
          </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container columnGap={4}>
            <Grid className="blog-list" item xs>
                <OffpageSlider customClassName={"blogs"} items={blogPostsArray} dots dark={false} itemWidth={cardWidth} hover={true} nextItemIcon={<NextArrow/>} prevItemIcon={<BackArrow/>}/>
            </Grid>
          </Grid>
      </Grid>
  </Grid>
    </Grid>
  );
}

export default BlogPosts;
