import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const DropdownMenu = () => {
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
        sx={{ fontSize: ".8rem" }}
        endIcon={<KeyboardArrowDownIcon />}
        onMouseEnter={handleOpenMenu}
        color="inherit"
      >
        Abrir Menú
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
        <MenuItem onClick={handleCloseMenu}>Opciónes Legales</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Opciónes Contables</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Opciónes Administracion Inmobiliaria</MenuItem>
      </Menu>
    </Box>
  );
};

export default DropdownMenu;
