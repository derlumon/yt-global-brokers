import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D3D3D3",
      dark: "#B2431E",
      light: "#FF8055",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#44311B",
      dark: "#001A53",
      light: "#D9F6FA",
      contrastText: "#FFFFFF",
      shades: {
        "4p": "rgba(0, 0, 0, 0.04)",
      },
    },
    error: {
      main: "#D32F2F",
    },
    background: {
      paper: "#FFFFFF",
      default: "#FAFAFA",
    },
    success: {
      main: "#002677",
    },
  },
  spacing: 4,
  typography: {
    fontFamily: "Sweet Sans Pro",
  },
  components: {
    MenuItem: {
      fontWeight: 500,
    },
    MuiListItemText: {
      defaultProps: {
        fontFamily: "Sweet Sans Pro",
        fontWeight: 600,
      },
    },
  },
  
});
