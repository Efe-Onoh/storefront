import React, { useState } from "react";

import { Drawer, Grid, IconButton, ListItem, ListItemButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/svg/logo";
import { HelpCenter, Management, TechLogo } from "../../assets/svg/General/General";
import { ArrowDownward, ArrowForwardIos, CenterFocusWeakTwoTone, KeyboardArrowDown, KeyboardArrowRight, KeyboardArrowUp } from "@mui/icons-material";
import { sidebarMenu1, sidebarMenu2 } from "../../constants/Constants";

function SideBar({ sideBarOpen, setSideBarOpen }) {
  const [open , setOpen] = useState(false)
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(`${path}`);
  };

  const handleDropDown = () => {
    setOpen((prev)=>!prev)
  };

  return (
    <Grid item className={`sideBarDrawer ${sideBarOpen ? "expanded" : ""}`}>
      <Grid container direction={"column"} rowGap={4} >
        <Grid item>
          <Grid container columnGap={2} alignItems={"center"} justifyContent={"center"}>
            {/* logo and menu button */}
            <Grid item>
              {/* menu icon */}
              <IconButton
                aria-label={"menu-icon"}
                size="small"
                color="#000"
                onClick={() => {
                  setSideBarOpen((prev) => !prev);
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item style={{ display: !sideBarOpen ? "none" : "block" }}>
              <Logo />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* tech logo */}
        {sideBarOpen ? <Grid className="techLogoContainer" container alignItems={"center"} justifyContent={"space-between"}>
          {/* logo icon */}
          <Grid item style={{ display: !sideBarOpen ? "none" : "block" }}>
            <TechLogo />
          </Grid>
          <Grid item>
            <IconButton aria-label={"menu-icon"} size="small" color="#000" onClick={() => {}}>
              <KeyboardArrowRight />
            </IconButton>
          </Grid>
        </Grid>: " "}
        </Grid>
        <Grid item>
          <Grid container direction={"column"} >
            <Grid item>
              {sidebarMenu1?.map((item, index) => {
                if(item.subMenu?.length > 0){
                  return(
                    <Grid item>
                    <ListItem key={index} disablePadding>
                      <ListItemButton className="menuItemBtn" disableGutters>
                        <Grid key={item.label} container alignItems={"center"} justifyContent={"space-between"}>
                          <Grid item>
                            <Grid container alignItems={"center"} justifyContent={"space-between"}>
                              <Grid item>
                                <IconButton className="menuIcon" aria-label={item.label} size="small" disabled>
                                  {item.icon}
                                </IconButton>
                              </Grid>
  
                              {sideBarOpen ? (
                                <Grid
                                  className={`menuItemLabel`}
                                  item
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    item.onClick();
                                    handleMenuClick(item.path);
                                  }}
                                >
                                  <Typography variant="ManropeRegular">{item.label}</Typography>
                                </Grid>
                              ) : (
                                ""
                              )}
                            </Grid>
                          </Grid>
                          <Grid item>
                            <IconButton aria-label={"menu-icon"} size="small" color="#000" onClick={handleDropDown}>
                              {open?<KeyboardArrowUp/>:<KeyboardArrowDown />}
                            </IconButton>
                          </Grid>
                        </Grid>
                      </ListItemButton>
                    </ListItem>
                    {open && item.subMenu.map((subItem,index)=>(
                    <ListItem key={index} disablePadding>
                    <ListItemButton className="menuItemBtn" disableGutters>
                      <Grid key={subItem.label} container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                          <Grid container alignItems={"center"} justifyContent={"space-between"}>
                            <Grid item>
                              <IconButton className="menuIcon" aria-label={subItem.label} size="small" disabled>
                                {subItem.icon}
                              </IconButton>
                            </Grid>
  
                            {sideBarOpen ? (
                              <Grid
                                className={`menuItemLabel`}
                                item
                                onClick={(e) => {
                                  e.stopPropagation();
                                  item.onClick();
                                  handleMenuClick(subItem.path);
                                }}
                              >
                                <Typography variant="ManropeRegular">{subItem.label}</Typography>
                              </Grid>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItemButton>
                    </ListItem>
                    ))}
                    </Grid>
                  )
                }
                else{
                  return(
                    <Grid item>
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="menuItemBtn" disableGutters>
                      <Grid key={item.label} container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                          <Grid container alignItems={"center"} justifyContent={"space-between"}>
                            <Grid item>
                              <IconButton className="menuIcon" aria-label={item.label} size="small" disabled>
                                {item.icon}
                              </IconButton>
                            </Grid>

                            {sideBarOpen ? (
                              <Grid
                                className={`menuItemLabel`}
                                item
                                onClick={(e) => {
                                  e.stopPropagation();
                                  item.onClick();
                                  handleMenuClick(item.path);
                                }}
                              >
                                <Typography variant="ManropeRegular15">{item.label}</Typography>
                              </Grid>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItemButton>
                  </ListItem>
                  </Grid>
                  )
                }
              })}
            </Grid>

            <Grid item>
              {sidebarMenu2?.map((item, index) => {
                if(item.subMenu?.length > 0){
                  return(
                    <Grid item>
                    <ListItem key={index} disablePadding>
                      <ListItemButton className="menuItemBtn" disableGutters>
                        <Grid key={item.label} container alignItems={"center"} justifyContent={"space-between"}>
                          <Grid item>
                            <Grid container alignItems={"center"} justifyContent={"space-between"}>
                              <Grid item>
                                <IconButton className="menuIcon" aria-label={item.label} size="small" disabled>
                                  {item.icon}
                                </IconButton>
                              </Grid>
  
                              {sideBarOpen ? (
                                <Grid
                                  className={`menuItemLabel`}
                                  item
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    item.onClick();
                                    handleMenuClick(item.path);
                                  }}
                                >
                                  <Typography variant="ManropeRegular15">{item.label}</Typography>
                                </Grid>
                              ) : (
                                ""
                              )}
                            </Grid>
                          </Grid>
                          <Grid item>
                            <IconButton aria-label={"menu-icon"} size="small" color="#000" onClick={handleDropDown}>
                              {open?<KeyboardArrowUp/>:<KeyboardArrowDown />}
                            </IconButton>
                          </Grid>
                        </Grid>
                      </ListItemButton>
                    </ListItem>
                    {open && item.subMenu.map((subItem,index)=>(
                    <ListItem key={index} disablePadding>
                    <ListItemButton className="menuItemBtn" disableGutters>
                      <Grid key={subItem.label} container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                          <Grid container alignItems={"center"} justifyContent={"space-between"}>
                            <Grid item>
                              <IconButton className="menuIcon" aria-label={subItem.label} size="small" disabled>
                                {subItem.icon}
                              </IconButton>
                            </Grid>
  
                            {sideBarOpen ? (
                              <Grid
                                className={`menuItemLabel`}
                                item
                                onClick={(e) => {
                                  e.stopPropagation();
                                  item.onClick();
                                  handleMenuClick(subItem.path);
                                }}
                              >
                                <Typography variant="ManropeRegular15">{subItem.label}</Typography>
                              </Grid>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItemButton>
                    </ListItem>
                    ))}
                    </Grid>
                  )
                }
                else{
                  return(
                    <Grid>
                  <ListItem key={index} disablePadding>
                    <ListItemButton className="menuItemBtn" disableGutters>
                      <Grid key={item.label} container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                          <Grid container alignItems={"center"} justifyContent={"space-between"}>
                            <Grid item>
                              <IconButton className="menuIcon" aria-label={item.label} size="small" disabled>
                                {item.icon}
                              </IconButton>
                            </Grid>

                            {sideBarOpen ? (
                              <Grid
                                className={`menuItemLabel`}
                                item
                                onClick={(e) => {
                                  e.stopPropagation();
                                  item.onClick();
                                  handleMenuClick(item.path);
                                }}
                              >
                                <Typography variant="ManropeRegular15">{item.label}</Typography>
                              </Grid>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItemButton>
                  </ListItem>
                  </Grid>
                  )
                }
              })}
            </Grid>

            <Grid item>
              <ListItem disablePadding>
                <ListItemButton disableGutters>
                  <Grid container alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item>
                      <Grid container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                          <IconButton className="menuIcon" aria-label={"help-center"} size="small" disabled>
                          <Management />
                          </IconButton>
                        </Grid>

                        {sideBarOpen ? (
                          <Grid
                            className={`menuItemLabel`}
                            item
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMenuClick();
                            }}
                          >
                            <Typography variant="ManropeRegular15">Help Center</Typography>
                          </Grid>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default SideBar;
