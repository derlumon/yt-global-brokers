import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { languages } from "../Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
const DropdownMenu = (props) => {
  const { currentLanguage } = useContext(LanguageContext);
 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    if(anchorEl==null)
    {
        setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    if(anchorEl){
         setAnchorEl(null);
    }
  };

  return (
    <Box
      position="center"
      display={"flex"}
    >
      <Button
        sx={{ fontSize: props.size ,paddingLeft:0,fontFamily:"Sweet Sans Pro"}}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleOpenMenu}
        color="inherit"
        component={Link}
        to="/practiceArea"
      >
        {languages[currentLanguage].navbar.practiceArea}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        sx={{marginTop:"10px"}}
        MenuListProps={{
            onMouseLeave:handleCloseMenu
        }}
      >
        <MenuItem onClick={handleCloseMenu} >Opciónes Legales</MenuItem>
        <MenuItem onClick={handleCloseMenu} >Opciónes Contables</MenuItem>
        <MenuItem onClick={handleCloseMenu} >Opciónes Administracion Inmobiliaria</MenuItem>
      </Menu>
    </Box>
  );
};

export default DropdownMenu;
