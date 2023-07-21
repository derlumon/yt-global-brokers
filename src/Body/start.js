import React from "react";
import "./Start.css";
import Logo1 from "../img/Logo/YTBrokersLogoSuperiorDerechaNegro.png";
import { Box, Typography, Button } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { languages } from "../Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Link } from "react-router-dom";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#B2431E",
      light: "#FF8055",
      contrastText: "#FFFFFF",
    },
  },
});
theme = responsiveFontSizes(theme);

const Start = (props) => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <ThemeProvider theme={theme}>
      <div className="image-overlay-container">
        <Box sx={{ width: "100%", height: "100%" }} position="relative">
          <img className="background-image" src={props.Fondo} alt="Image1" />
          <img className="foreground-image" src={Logo1} alt="Image2" />
          <Box
            sx={{
              top: "35%",
              left: { xs: "5%", md: "8%" },
              right: { xs: "5%", md: "8%" },
            }}
            position="absolute"
          >
            <Typography
              variant="h3"
              gutterBottom
              color={"white"}
              fontWeight={700}
            >
              {props.title}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color={"white"}
              fontWeight={500}
              paddingBottom="1.5rem"
            >
              {props.subtitle}
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              component={Link}
              to="/contact"
              sx={{ fontWeight: 600, borderWidth: "2.5px" }}
            >
              {languages[currentLanguage].navbar.contactUs}
            </Button>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Start;
