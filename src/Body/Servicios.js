import React, { useEffect, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import Button from "./Button";
import "./servicios.css";

export default function Servicios({ buttons, title }) {
  const serviciosRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0, 
    };
  
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("servicios-visible");
        } else {
          entry.target.classList.remove("servicios-visible");
        }
      });
    };
  
    const serviciosElement = serviciosRef.current;
  
    if (serviciosElement) {
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(serviciosElement);
  
      return () => {
        observer.unobserve(serviciosElement);
      };
    }
  }, []);
  

  return (
    <div  align="center">
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "24px", sm: "32px", md: "48px" },
          paddingTop: "5%",
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <Grid  ref={serviciosRef} className="servicios" container sx={{ paddingX: { xs: "5%",sm:"7%", md: "10%" }, paddingY: "5%" }}>
        {buttons.map((button, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Button
              icon={button.icon}
              title={button.title}
              lists={button.lists}
              additionaltitle={button.additionaltitle}
              additionalInfo={button.additionalInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
