import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function BlogPost({ image, title, description, cardWidth }) {
  return (
    <Grid item>
        <Grid className="blog-container" container direction={"column"} width={cardWidth}>
            <Grid item alignSelf={"center"}>
                <img src={image} width={"100%"}/>
            </Grid>
            <Grid item>
                <Grid container direction={"column"} rowGap={2} p={2}>
                    <Grid item>
                        <Grid container>
                            <Grid className="title" item><Typography variant="ManropeBold16">{title}</Typography></Grid>
                            <Grid className="description" item>
                                <Typography variant="ManropeRegular12">{description}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button className="btn outlined blog" variant="outlined" size="small">Read more</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default BlogPost;
