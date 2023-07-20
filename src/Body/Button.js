import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./button.css";
import { languages } from "../Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import InfoDialog from "./aboutUs/InfoDialog";
export default function Button(props) {
  const { currentLanguage } = useContext(LanguageContext);
  const [showMore, setShowMore] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false); // State to manage the dialog

  const handleMouseOver = () => {
    setShowMore(true);
  };

  const handleMouseOut = () => {
    setShowMore(false);
  };

  const handleClick = () => {
    // Handle button click event
    setDialogOpen(true); // Open the dialog on button click
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog
  };

  return (
    <div>
      <Card
        sx={{
          m: { xs: "6px", sm: "6px" },
          width: { md: "350px", xs: "330px" },
          height: { md: "190px", xs: "170px" },
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={`highlighted-card ${showMore ? "show-more" : ""}`}
        elevation={showMore ? 3 : 1}
        onClick={handleClick}
      >
        <CardContent>

          {props.icon &&
            React.cloneElement(props.icon, {
              className: `icon ${showMore ? "show-more" : ""} ${
                showMore ? "fade-out" : ""
              }`,
              style: { fontSize: "3rem", marginLeft: "-210px" },
            })}
     

          <div className={`title ${showMore ? "show-more" : ""}`}>
            <Typography variant="h5" component="div">
              <b>{props.title}</b>
            </Typography>
          </div>
            
     
      

          <Typography
            sx={{
              fontSize: "1rem",
              marginLeft: "-150px",
            
              marginTop: "10px",
            }}
            variant="body2"
            className={`show-more-text ${showMore ? "show-more" : ""}`}
          >
            <b> {languages[currentLanguage].buttonDial.learn} -{">"}</b>
          </Typography>
        </CardContent>
      </Card>
      <InfoDialog
        additionaltitle={props.additionaltitle}
        open={dialogOpen}
        onClose={handleCloseDialog}
        additionalInfo={props.additionalInfo} // Pass the additional info as a prop
      />
    </div>
  );
}
