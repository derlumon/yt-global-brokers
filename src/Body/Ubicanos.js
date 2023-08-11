import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { languages } from "../Languages/languages";
import { LanguageContext } from "../Context/LanguageContext";

function Ubicanos() {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <Box sx={{ textAlign: "center", width: "100%", gap: "30rem" }}>
      <Box
        sx={{
          paddingX: { xs: "5%", md: "10%" },
          paddingBottom: "5%",
          paddingTop: "5%",
        }}
      >
        <Typography variant="h4" sx={{ color: "#000000" }} gutterBottom>
          {languages[currentLanguage].ubicanos.locate}
        </Typography>
        <iframe
          title="Mapa de Google"
          width="100%"
          height="450px"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=YT, GLOBAL BROKER'S&output=embed`}
          allowFullScreen
        ></iframe>
        <Typography
          variant="h4"
          sx={{
            color: "#000000",
            marginTop: "1.5rem",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          }}
        >
          Plaza Carso, Lago Zurich 219 piso 12, Ampliación Granada, Miguel
          Hidalgo, Cd. de México
        </Typography>
      </Box>
    </Box>
  );
}

export default React.memo(Ubicanos);

