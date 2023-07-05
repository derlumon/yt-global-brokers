import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Ubicanos() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" style={{ color: "#44311B" }}>
        <b>Ubicanos</b>
      </Typography>
      <Box sx={{ width: "90%", height: "571px", marginTop: { md: "20px", xs: "20px" }, marginBottom: { md: "49px", xs: "20px" }, ml: { md: "69px", xs: "20px", sm: "30px" } }}>
        <iframe
          title="Mapa de Google"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=C. Lago Zurich 219-Piso 12, Amp Granada, Miguel Hidalgo, 11529 Ciudad de México, CDMX&output=embed`}
          allowFullScreen
        ></iframe>
      </Box>
      <Typography variant="h3" style={{ color: "#44311B" }} sx={{ mx: { md: "149px" }, fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
        Plaza Carso, Lago Zurich 219 piso 12, Ampliación Granada, Miguel Hidalgo, Cd. de México
      </Typography>
    </div>
  )
}
