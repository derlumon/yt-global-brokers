import React, { useState, useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { languages } from "../Languages/languages";
import { LanguageContext } from "../Context/LanguageContext";

export default function Introduccion() {
  const { currentLanguage } = useContext(LanguageContext);
  const [showBody, setShowBody] = useState(false);

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
        fontWeight={500}
        sx={{
          fontSize: { xs: "35px", sm: "35px", md: "40px" },
          cursor: "pointer",
          textDecoration: "none", 
          "&:hover": {
            textDecoration: "underline", 
          },
        }}
        onClick={() => setShowBody(!showBody)}
        
      >
        {languages[currentLanguage].introduccion.title}
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginBottom: "30px" }}
      >
        {languages[currentLanguage].introduccion.subtitle}
      </Typography>
      <Grid container spacing={8}>
        {showBody && (
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <Typography variant="h5" align="justify">
              {languages[currentLanguage].introduccion.body1}
            </Typography>
          </Grid>
        )}
        {showBody && (
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <Typography variant="h5" align="justify">
              {languages[currentLanguage].introduccion.body2}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
