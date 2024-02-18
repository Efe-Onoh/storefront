import React from "react";
import { Typography, Box, Link } from "@mui/material";

function Company({ items }) {
  return (
    <Box id="footer-company-section" mt={3}>
      {items.map((item, id) => (
        <Link className="footerLinks" key={id} href={item.path}>
          <Typography key={item.name} variant="ManropeRegular12" className="company-item company-footer-label">
            {item.name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}

export default Company;
