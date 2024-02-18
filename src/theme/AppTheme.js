import { createTheme } from "@mui/material/styles";

let customTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#ffffff",
      transparent: "red",
    },
  },

  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        ManropeRegular12: {
          fontFamily: "manrope-regular",
          fontSize: "12px",
          "@media (max-width: 1023px)": {
            fontSize: "9px",
          },
        },
        ManropeRegular15: {
          fontFamily: "manrope-regular",
          fontSize: "15px",
          "@media (max-width: 1023px)": {
            fontSize: "12px",
          },
        },
        ManropeRegular16: {
          fontFamily: "manrope-regular",
          fontSize: "16px",
          "@media (max-width: 1023px)": {
            fontSize: "12px",
          },
        },
        ManropeBold12: {
          fontFamily: "manrope-bold",
          fontSize: "12px",
          fontWeight: "bold",
          "@media (max-width: 1023px)": {
            fontSize: "12px",
          },
        },
        ManropeBold16: {
          fontFamily: "manrope-bold",
          fontSize: "16px",
          fontWeight: "bold",
          "@media (max-width: 1023px)": {
            fontSize: "12px",
          },
        },
        ManropeBold18: {
          fontFamily: "manrope-bold",
          fontSize: "18px",
          fontWeight: "bold",
          "@media (max-width: 1023px)": {
            fontSize: "16px",
          },
        },
        ManropeBold22: {
          fontFamily: "manrope-bold",
          fontSize: "22px",
          fontWeight: "bold",
          "@media (max-width: 1023px)": {
            fontSize: "12px",
          },
        },
        ManropeSemiBold12: {
          fontFamily: "manrope-semibold",
          fontSize: "12px",
          "@media (max-width: 1023px)": {
            fontSize: "11px",
          },
        },
        ManropeSemiBold16: {
          fontFamily: "manrope-semibold",
          fontSize: "16px",
          "@media (max-width: 1023px)": {
            fontSize: "13px",
          },
        },
        ManropeSemiBold18: {
          fontFamily: "manrope-semibold",
          fontSize: "18px",
          "@media (max-width: 1023px)": {
            fontSize: "13px",
          },
        },
        ManropeSemiBold22: {
          fontFamily: "manrope-semibold",
          fontSize: "22px",
          "@media (max-width: 1023px)": {
            fontSize: "13px",
          },
        },
        ManropeLight11: {
          fontFamily: "manrope-light",
          fontSize: "11px",
          "@media (max-width: 1023px)": {
            fontSize: "13px",
          },
        },
        ManropeLight15: {
          fontFamily: "manrope-light",
          fontSize: "15px",
          "@media (max-width: 1023px)": {
            fontSize: "13px",
          },
        },
        ManropeMedium15: {
          fontFamily: "manrope-medium",
          fontSize: "15px",
          "@media (max-width: 1023px)": {
            fontSize: "17px",
          },
        },
        ManropeMedium20: {
          fontFamily: "manrope-medium",
          fontSize: "20px",
          "@media (max-width: 1023px)": {
            fontSize: "17px",
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1, // Adjust the opacity as needed (1 for full opacity)
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // zIndex: 2301,
          color: "#122148 !important",
          backgroundColor: "#ffffff",
          fontFamily: "ManropeBold",
        },
      },
    },

    MuiTreeView: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          maxHeight: "56px",
          minWidth: "120px",
          letterSpacing: "0",
          textTransform: "none",
          borderRadius: "16px",
          padding: "22px",
          "@media (max-width: 523px)": {
            maxHeight: "17px",
            padding: "20px"
          },
          "&.customButtonDark:hover": {
            backgroundColor: "#FFFFFF",
            color: "#122148",
            border: "1px solid #122148",
          },
          "&.customButtonLight:hover": {
            backgroundColor: "#122148",
            color: "#fff",
          },
          "&.customButtonDark": {
            maxHeight: "2.3rem",
            color: "#fff",
            backgroundColor: "#122148",
          },
          "&.customButtonDark  svg": {
            fill: "#fff",
          },
          "&.customButtonDark:hover  svg": {
            fill: "#122148",
          },
          "&.customButtonLight": {
            maxHeight: "2.3rem",
            color: "#000",
            backgroundColor: "#fff",
          },
          "&.customButtonLight  svg": {
            fill: "#000",
          },
          "&.customButtonLight:hover  svg": {
            fill: "#fff",
          },
          "&.indicator": {
            fontFamily: "DubaiReqular",
            fontSize: "18px",
          },
          //   "&.Mui-disabled": {
          //     backgroundColor:'white', // Customize the disabled background color here
          //     color: 'white', // Custo
          // },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {},
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          // zIndex: 1301,
        },
      },
    },

    MuiPopper: {
      styleOverrides: {
        root: {
          // position: "relative",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          // zIndex: 1099,
          borderRadius: 0,
          "& .MuiMenu-list": {
            padding: "0 0",
          },
          "& .MuiMenuItem-root.Mui-selected": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
        },
        dot: {
          height: "12px",
          width: "12px",
          backgroundColor: "transparent",
        },
        positionStatic: {
          paddingTop: "1.5rem",
        },
      },
    },
  },
});

export default customTheme;
