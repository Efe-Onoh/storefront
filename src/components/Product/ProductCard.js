import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Bolt, FavoriteRed, RatingStar } from "../../assets/svg/General/General";

function ProductCard({ name, image, status, price, rating, cardWidth, cardHeight }) {
  return (
    <Grid item>
        <Grid className="product-container" container direction={"column"} rowGap={2} width={cardWidth}>
            <Grid item xs={12}>
                <Grid container alignItems={"center"} justifyContent={"space-between"}>
                    <Grid className="express-delivery" item>
                        <Typography variant="ManropeRegular12"><Bolt/> Express Delivery</Typography>
                    </Grid>
                    <Grid item>
                        <FavoriteRed/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item alignSelf={"center"}>
                <img src={image} width={"100%"}/>
            </Grid>
            <Grid item>
                <Grid container justifyContent={"space-between"}>
                    <Grid className="rating" item><Typography variant="ManropeRegular12"><RatingStar/>{" "+rating+ " "}(999999)</Typography></Grid>
                    <Grid className="discount" item><Typography variant="ManropeRegular12">50% OFF</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Typography variant="ManropeRegular12">{name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="ManropeRegular12" color={status === "Stock Available" ? "#108934" : "inherit"}>{status}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="ManropeRegular12">AED{" "}<Typography variant="ManropeBold22">{price}</Typography></Typography>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default ProductCard;
