import { Box, Button } from "@mui/material";
import Logo1 from "../img/Logo/YTBrokersLogoGrisClaro.png";
import Logo2 from "../img/Logo/YTBrokersLogoSinFondo.png";
import DropdownMenu from "./menu";
import SwipeableTemporaryDrawer from "./drawer";
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import china from "../img/language/china.png";
import eua from "../img/language/eua.png";
import mexico from "../img/language/mexico.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { languages } from "../Languages/languages";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(
    ["background-color", "color", "boxShadow"],
    {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }
  ),
  backgroundColor: "transparent",
  color: "#D3D3D3",
  padding: "6px 0px",
  boxShadow: "0px 0.5px 1px #D3D3D3",
  "&.solid": {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "6px 0px",
    elevation: 1,
  },

  fontFamily: "Sweet Sans Pro",
  Button: {
    fontFamily: "Sweet Sans Pro",
    fontSize: ".8rem",
    color: "inherit",
  },
  components: {
    MenuItem: {
      fontWeight: 500,
    },
    Link: {
      Button: {
        fontFamily: "Sweet Sans Pro",
        fontSize: ".8rem",
        color: "inherit",
      },
    },
  },
}));

const Navbar = () => {
  const { currentLanguage, handleLanguageChange } = useContext(LanguageContext);

  const [isTransparent, setIsTransparent] = useState(true);
  const [logo, setLogo] = useState(Logo1);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [lenguage, setLenguage] = useState(mexico);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    setIsTransparent(trigger);
    if (trigger) {
      setLogo(Logo2);
    } else {
      setLogo(Logo1);
    }
  }, [trigger]);

  const theme = createTheme();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar position="fixed" className={isTransparent ? "solid" : ""}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={logo} style={{ width: "60px", height: "60px" }} />
              <Typography
                variant="h6"
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Sweet Sans Pro",
                  fontWeight: 500,
                  fontSize: { xs: "1rem", md: "1.3rem" },
                }}
              >
                YT, GLOBAL BROKER'S
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <SwipeableTemporaryDrawer />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: ".5rem",
              }}
            >
              <Button
                component={Link}
                to="/"
                sx={{
                  fontFamily: "Sweet Sans Pro",
                  fontSize: ".8rem",
                  color: "inherit",
                }}
              >
                {languages[currentLanguage].navbar.home}
              </Button>
              <Button
                sx={{
                  fontFamily: "Sweet Sans Pro",
                  fontSize: ".8rem",
                  color: "inherit",
                }}
                component={Link}
                to="/about"
              >
                {languages[currentLanguage].navbar.aboutUs}
              </Button>
              <DropdownMenu size=".8rem"/>
              <Button
                sx={{
                  fontFamily: "Sweet Sans Pro",
                  fontSize: ".8rem",
                  color: "inherit",
                }}
                component={Link}
                to="/contact"
              >
                {languages[currentLanguage].navbar.contactUs}
              </Button>
              <Button >
                {languages[currentLanguage].navbar.legalResources}
              </Button>
              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt="Remy Sharp" src={lenguage} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      setLenguage(china);
                      handleLanguageChange("chi");
                    }}
                  >
                    <IconButton sx={{ padding: "0", paddingRight: "20px" }}>
                      <Avatar alt="Remy Sharp" src={china} />
                    </IconButton>
                    <Typography textAlign="center" fontFamily={"Rubik"}>
                      {languages[currentLanguage].lenguage.chinese}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      setLenguage(eua);
                      handleLanguageChange("en");
                    }}
                  >
                    <IconButton sx={{ padding: "0", paddingRight: "20px" }}>
                      <Avatar alt="Remy Sharp" src={eua} />
                    </IconButton>
                    <Typography textAlign="center" fontFamily={"Rubik"}>
                      {languages[currentLanguage].lenguage.english}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      setLenguage(mexico);
                      handleLanguageChange("es");
                    }}
                  >
                    <IconButton sx={{ padding: "0", paddingRight: "20px" }}>
                      <Avatar alt="Remy Sharp" src={mexico} />
                    </IconButton>
                    <Typography textAlign="center" fontFamily={"Rubik"}>
                      {languages[currentLanguage].lenguage.spanish}
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
};

export default Navbar;
