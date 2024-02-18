import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Company from "./Company/Company";
import Discover from "./Discover/Discover";
import SocialMedia from "./SocialMedia/SocialMedia";
import BottomGrid from "./BottomGrid/BottomGrid";
import Subscribe from "../Subscribe/Subscribe";


const items = [
  {
    id: 1,
    name: "Medical Essentials",
    component: Company,
    items: [
      { name: "Nutrition", path: "/" },
      { name: "Mom & Baby Care", path: "/" },
      { name: "Home Care Equipments", path: "/" },
    ],
  },
  {
    id: 2,
    name: "Personal Care",
    component: Discover,
    items: [
      { name: "Beauty", path: "/" },
      { name: "Lifestyle", path: "/" },
    ],
  },
  {
    id: 3,
    name: "Track Orders",
    component: Discover,
    items: [
      { name: "Shipping", path: "/" },
      { name: "Returns & Exchange", path: "/" },
      { name: "Cancellation", path: "/" },

    ],
  },
  {
    id: 4,
    name: "About us",
    component: Discover,
    items: [
      { name: "Contact us", path: "/" },
      { name: "FAQ", path: "/" },
      { name: "Careers", path: "/" },

    ],
  },
  {
    id: 4,
    name: "Talk to us",
    component: Discover,
    items: [
      { name: "+971-365-698-13", path: "/" },
      { name: "Help Center", path: "/" },
      { name: "support@gogopharma.com", path: "/" },

    ],
  },
  {
    id: 5,
    name: "Follow us",
    component: SocialMedia,
  },
];

function Footer() {
  return (
    <Grid item>
      <footer className="footerStyles">
        <Container>
          <Grid container>
            {items.map((item, id) => (
              <Grid key={id} item xs={6} md={2}>
                <Grid container direction={"column"} rowGap={2}>
                    <Grid item>
                        <Typography variant="ManropeRegular12">{item.name}</Typography>
                    </Grid>
                    {item.items? item.items.map((i, index)=>{
                        return( 
                        <Grid key={index} item>
                          
                            <Typography variant="ManropeRegular12">{i.name}</Typography>
                        </Grid>)
                    }) : <Grid item><item.component/></Grid>}
                    </Grid>
              </Grid>
            ))}
          </Grid>
          <Subscribe/>
          <BottomGrid />
        </Container>
      </footer>
    </Grid>
  );
}

export default Footer;
