import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function DropdownMenu({ customClass, menuItems, defaultValue, children }) {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid item>
      <select className={`select-box ${customClass}`} name="dropdown" onChange={handleChange}>
      <option value={defaultValue}><Typography variant="ManropeBold">{defaultValue}</Typography></option>
          {
            menuItems.map((item,index)=>(
              <option value={item.label}><Typography variant="ManropeBold">{item.label}</Typography></option>
            ))
          }
      </select>
    </Grid>
    
  );
}
export default DropdownMenu;

// import { Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
// import React, { useState } from 'react';

// function DropdownMenu({ customClass, menuItems, children }) {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedItem, setSelectedItem] = useState("English");

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = (itemLabel) => {
//     setAnchorEl(null);
//     setSelectedItem(itemLabel);
//   };

//   return (
//     <div>
//       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//         {selectedItem}
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         {menuItems.map((item, index) => (
//           <MenuItem key={index} onClick={() => handleClose(item.label)}>
//             <Typography variant="ManropeRegular">{item.label}</Typography>
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }

// export default DropdownMenu;
