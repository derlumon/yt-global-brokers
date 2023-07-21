import { Grid, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./servicios.css";


export default function PracticeArea(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topPosition = practiceAreaRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (topPosition < windowHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const practiceAreaRef = React.useRef(null);

  return (
    <Box
      ref={practiceAreaRef}
      sx={{
        backgroundColor: "#DFDFDF",
        textAlign: "center",
        width: "fullWidth",
        paddingX: { xs: "5%", md: "10%" },
        paddingY: "5%",
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? "0" : "20px"})`,
        transition: "opacity 1s, transform 1s",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        fontFamily={"Sweet Sans Pro"}
        fontWeight={500}
        sx={{ fontSize: { xs: "35px", sm: "35px", md: "40px" } }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ marginBottom: "30px" }}
        fontFamily={"Rubik"}
      >
        {props.subtitle}
      </Typography>
    </Box>
  );
}