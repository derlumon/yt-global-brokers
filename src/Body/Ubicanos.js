import { Box, Typography } from "@mui/material";
import React from "react";

export default function Ubicanos() {
  return (
    <Box sx={{ textAlign: "center", width: "100%",gap:"30rem" }}>
      <Box
        sx={{ paddingX: { xs: "5%", md: "10%" },paddingBottom:"5%" }}
      >
        <Typography variant="h4" style={{ color: "#000000" }} gutterBottom>
          Ubicanos
        </Typography>
        <iframe
          title="Mapa de Google"
          width="100%"
          height="450px"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=C. Lago Zurich 219-Piso 12, Amp Granada, Miguel Hidalgo, 11529 Ciudad de México, CDMX&output=embed`}
          allowFullScreen
        ></iframe>
        <Typography
        variant="h4"
        style={{ color: "#000000" }}
        sx={{
          marginTop:"1.5rem",
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
