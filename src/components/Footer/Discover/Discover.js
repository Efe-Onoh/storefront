import React from "react";
import { Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isEqual } from "lodash";

function Discover({ items }) {
  const navigate = useNavigate();
  const handleExclusives = (path) => {
    navigate(`/Devices`);
  };
  return (
    <Box mt={3}>
      {items.map((item, id) =>
        isEqual(item.name, "Exclusives") ? (
          <Link className="footerLinks" key={id} onClick={() => handleExclusives(item.path)}>
            <Typography key={item} variant="ManropeRegular12" className="company-item">
              {item.name}
            </Typography>
          </Link>
        ) : (
          <Link className="footerLinks" key={id} href={item.path}>
            <Typography key={item} variant="ManropeRegular12" className="company-item">
              {item.name}
            </Typography>
          </Link>
        )
      )}
    </Box>
  );
}

export default Discover;
