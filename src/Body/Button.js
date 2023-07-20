import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./button.css";
import { languages } from "../Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
export default function Button(props) {
  const [showMore, setShowMore] = useState(false);
  const { currentLanguage } = useContext(LanguageContext);

  const handleMouseOver = () => {
    setShowMore(true);
  };

  const handleMouseOut = () => {
    setShowMore(false);
  };

  const handleClick = () => {
    // Handle button click event
  };

  return (
    <div>
      <Card
        sx={{
          m: { xs: "6px", sm: "6px" },
          width: { md: "350px", xs: "330px" },
          height: { md: "290px", xs: "270px" },
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

          <ul className={`feature-list ${showMore ? "show-more" : ""}`}>
            {props.lists.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>

          <Typography
            sx={{
              fontSize: "1rem",
              marginLeft: "-150px",
            
              marginTop: "-30px",
            }}
            variant="body2"
            className={`show-more-text ${showMore ? "show-more" : ""}`}
          >
            <b> {languages[currentLanguage].buttonDial.learn} -{">"}</b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
