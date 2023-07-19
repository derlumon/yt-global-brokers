import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BookIcon from "@mui/icons-material/Book";
import ChatIcon from "@mui/icons-material/Chat";
import DownloadIcon from "@mui/icons-material/Download";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import china from "../img/language/china.png";
import eua from "../img/language/eua.png";
import mexico from "../img/language/mexico.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { LanguageContext } from "../Context/LanguageContext";
import { languages } from "../Languages/languages";
import DropdownMenu from "./menu";

const theme = createTheme({
  components: {
    fontFamily: "Rubik",
    // Name of the component ⚛️
    MuiListItemText: {
      fontFamily: "Rubik",
      fontWeight: 500,
    },
  },
});

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { currentLanguage, handleLanguageChange } = useContext(LanguageContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [lenguage, setLenguage] = useState(mexico);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const list = (anchor) => (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ width: 290 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={languages[currentLanguage].navbar.home} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"AboutUs"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary={languages[currentLanguage].navbar.aboutUs} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"PracticeArea"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <DropdownMenu size=".96rem"/>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Contact"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary={languages[currentLanguage].navbar.contactUs} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"LegalResources"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DownloadIcon />
              </ListItemIcon>
              <ListItemText primary={languages[currentLanguage].navbar.legalResources} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemButton sx={{gap:"20px"}} onClick={()=>{handleCloseUserMenu(); handleLanguageChange('es')}}>
            <ListItemIcon>
              <IconButton>
                <Avatar alt="Remy Sharp" src={mexico} />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={languages[currentLanguage].lenguage.spanish} />
          </ListItemButton>
          <ListItemButton sx={{gap:"20px"}} onClick={()=>{handleCloseUserMenu(); handleLanguageChange('en')}}>
            <ListItemIcon>
              <IconButton>
                <Avatar alt="Remy Sharp" src={eua} />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={languages[currentLanguage].lenguage.english} />
          </ListItemButton>
          <ListItemButton sx={{gap:"20px"}} onClick={()=>{handleCloseUserMenu(); handleLanguageChange('chi')}}>
            <ListItemIcon>
              <IconButton>
                <Avatar alt="Remy Sharp" src={china} />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={languages[currentLanguage].lenguage.chinese} />
          </ListItemButton>
        </List>
        
      </Box>
    </ThemeProvider>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("right", true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
