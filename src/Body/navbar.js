import { Box, Button } from "@mui/material";
import Logo1 from "../img/Logo/YTBrokersLogoGrisClaro.png"
import Logo2 from "../img/Logo/YTBrokersLogoSinFondo.png" 
import DropdownMenu from "./menu";
import SwipeableTemporaryDrawer from "./drawer";
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';



const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(["background-color", "color","boxShadow"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  backgroundColor: "transparent",
  color: "#D3D3D3",
  padding:"6px 0px",
  boxShadow: '0px 0.5px 1px #D3D3D3',
  "&.solid": {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding:"6px 0px",
    elevation:1
  },
  
  fontFamily:"Rubik",
  Button:{
    fontFamily:"Rubik",
    fontSize:".8rem",
    color:"inherit"
  },
  components: {
    MenuItem:{
      fontWeight: 500,
    },
  }, 
}));


const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [logo, setLogo] = useState(Logo1);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    setIsTransparent(trigger);
    if(trigger){
      setLogo(Logo2)
    }else{
      setLogo(Logo1)
    }
  }, [trigger]);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar position="fixed" className={isTransparent ? "solid" : ""} >
        <Toolbar>
          <Box sx={{ display: "flex", width: "100%" ,justifyContent:"space-between"}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap:"10px",
              }}
            >
              <img src={logo} style={{ width: "60px", height: "60px"}} />
              <Typography
                variant="h6"
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Sweet Sans Pro",
                  fontWeight: 500,
                  fontSize:{xs:"1rem",md:"1.3rem"}
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
              <Button>INICIO</Button>
              <Button>SOBRE NOSOTROS</Button>
              <DropdownMenu/>
              <Button>CONTÁCTANOS</Button>
              <Button>RECURSOS LEGALES</Button>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
};

export default Navbar;
