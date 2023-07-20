import { Grid, Typography, Box } from "@mui/material";
import React from "react";

export default function PracticeArea(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#DFDFDF",
        textAlign: "center",
        width: "fullWidth",
        paddingX: { xs: "5%", md: "10%" },
        paddingY: "5%",
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
        variant="h4"
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
