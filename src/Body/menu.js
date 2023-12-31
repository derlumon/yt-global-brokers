import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Tooltip } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { languages } from "../Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
import Sound from "../img/sound.mp3";

const DropdownMenu = (props) => {
  const { currentLanguage } = useContext(LanguageContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    if (anchorEl == null) {
      setAnchorEl(event.currentTarget);
      const audio = new Audio(Sound);
      audio.play();
    }
  };

  const handleCloseMenu = () => {
    if (anchorEl) {
      setAnchorEl(null);
      const audio = new Audio(Sound);
      audio.play();
    }
  };

  return (
    <Box position="center" display={"flex"}>
      <Button
        sx={{ fontSize: props.size, fontFamily: "Sweet Sans Pro" }}
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
        sx={{ marginTop: "10px" }}
        MenuListProps={{
          onMouseLeave: handleCloseMenu,
        }}
      >
        <Tooltip
          title={
            <span style={{ fontSize: "18px" }}>
              {languages[currentLanguage].navbar.tooltip}
            </span>
          }
          placement="left"
          arrow
        >
          <MenuItem
            onClick={handleCloseMenu}
            component={Link}
            to="practiceArea/legalOptions"
          >
            {languages[currentLanguage].navbar.legal_options}
          </MenuItem>
        </Tooltip>

        <MenuItem
          onClick={handleCloseMenu}
          component={Link}
          to="/practiceArea/accountingOptions"
        >
          {languages[currentLanguage].navbar.Accounting_Options}
        </MenuItem>
        <MenuItem
          onClick={handleCloseMenu}
          component={Link}
          to="/practiceArea/administrativeOptions"
        >
          {languages[currentLanguage].navbar.Real_Estate_Management_Options}
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default DropdownMenu;
