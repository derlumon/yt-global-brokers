import * as React from "react";
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

const theme = createTheme({
  components: {
    fontFamily:"Rubik",
    // Name of the component ⚛️
    MuiListItemText: {
      fontFamily:"Rubik",
      fontWeight:500
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

  const list = (anchor) => (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ width: 290 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem key={"Home"} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"INICIO"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"AboutUs"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary={"SOBRE NOSOTROS"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"PracticeArea"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={"AREAS DE PRACTICA"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Contact"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary={"CONTACTANOS"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"LegalResources"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DownloadIcon />
              </ListItemIcon>
              <ListItemText primary={"RECURSOS LEGALES"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
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
