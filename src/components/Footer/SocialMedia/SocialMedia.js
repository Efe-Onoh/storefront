import React from "react";
import { Box, Link } from "@mui/material";
import { Facebook, Instagram, LinkedIn, TikTok, Twitter, YouTube } from "../../../assets/svg/General/General";

const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <Facebook width="16px" height="16px" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <Instagram width="16px" height="16px" />,
  },
  { name: "Twitter", url: "#", icon: <Twitter width="16px" height="16px" /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/Efe-Onoh",
    icon: <LinkedIn width="16px" height="16px" />,
  },
];

function SocialMedia() {
  return (
    <Box>
      {socialMediaLinks.map((link, id) => (
        <Link target="_blank" href={link.url} color="inherit" key={id} mr={2}>
          {link.icon}
        </Link>
      ))}
    </Box>
  );
}

export default SocialMedia;
