import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { languages } from "../Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function Introduccion() {
   const { currentLanguage } = useContext(LanguageContext);
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
        variant="h3"
        align="center"
        gutterBottom
        fontFamily={"Rubik"}
        fontWeight={500}
        sx={{ fontSize: { xs: "35px", sm: "35px", md: "40px" } }}
      >
        {languages[currentLanguage].introduccion.title}
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginBottom: "30px" }}
        fontFamily={"Rubik"}
      >
        {languages[currentLanguage].introduccion.subtitle}
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            align="justify"
            fontFamily={"Rubik"}
          >
            {languages[currentLanguage].introduccion.body1}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            align="justify"
            fontFamily={"Rubik"}
          >
            {languages[currentLanguage].introduccion.body2}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
