import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "./Button";
import "./servicios.css";

export default function Servicios({ buttons, title }) {
  return (
    <div className="servicios" align="center">
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "24px", sm: "32px", md: "48px" },
          paddingTop: "5%",
          fontWeight: 500,
        }}
        fontFamily={"Rubik"}
      >
        {title}
      </Typography>
      <Grid container sx={{ paddingX: { xs: "5%",sm:"7%", md: "10%" }, paddingY: "5%" }}>
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
