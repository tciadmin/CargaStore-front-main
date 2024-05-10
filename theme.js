import createTheme from "@mui/material/styles/createTheme";
import { Colors } from "./src/Utils/Colors.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary.main,
      contrastText: Colors.primary.contrastText,
    },
    secondary: {
      main: Colors.secondary.main,
      contrastText: Colors.secondary.contrastText,
    },
    terciary: {
      main: Colors.terciary.main,
      contrastText: Colors.terciary.contrastText,
    },
    cuaternary: {
      main: Colors.cuaternary.main,
      contrastText: Colors.cuaternary.contrastText,
    },
    badgeColor: {
      main: "#FF0000",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
      styleOverrides: {
        root: {
          "-webkit-transform": "scale(1)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontWeight: 600,
            color: "#5c5c5c",
            "&.Mui-disabled": {
              backgroundColor: "#6e6e6e42",
            },
          },
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#5c5c5c",
          fontWeight: 600,
          minWidth: 223,
        },
        filled: {
          fontWeight: 600,
          color: "#5c5c5c",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          minWidth: 223,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          borderRadius: 5,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
