import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import "./LegalResources.css";

export default function LegalResources() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(card1Ref.current);
    observer.observe(card2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h4" style={{ color: "#44311B" }}>
          <b>Recursos Legales</b>
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop={4}>
          <Grid item xs={12} sm={8} md={6}>
            <Card
              className="card"
              ref={card1Ref}
              sx={{
                backgroundColor: "#D9D9D9",
                borderRadius: "20px",
                width: { xs: "100%", md: "587px",sm:"100%" },
                height: { xs: "auto", md: "464px",sn:"auto" },
                fontSize: { md:"2.5rem", sm: "1.5rem" }
              }}
            >
              <Typography
                variant="h4"
                style={{ color: "#44311B" }}
                sx={{
                  px: { md: "30px",xs:"5px", sm:"10px" },
                  pt: { md: "56px", xs: "35.72px" },
                  fontSize: { md:"2.5rem",xs:"1.5rem" }
                
                }}
              >
                <b>REVISIÓN DEL AÑO Y QUÉ ESPERAR EN ADELANTE</b>
              </Typography>
              <CardContent className="card-content">
                <Typography variant="h5" sx={{ mt: { md: "45px" } }}>
                  Esta es la descripción de su archivo. Describa de forma
                  concisa el contenido de su archivo y asegúrese de incluir la
                  información de contacto para preguntas y comentarios.
                </Typography>
                <Box sx={{ pt: { md: "36px" } }}>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ backgroundColor: "#1B2432", marginTop: "20px" }}
                  >
                    Descargar
                    <ArrowCircleDownIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={5}>
            <Card
              className="card"
              ref={card2Ref}
              sx={{
                backgroundColor: "#D9D9D9",
                borderRadius: "20px",
                width: { xs: "100%", md: "587px",sm:"100%" },
                height: { xs: "auto", md: "464px",sm:"auto" },

                
              }}
            >
              <Typography
                variant="h4"
                style={{ color: "#44311B" }}
                sx={{
                  pl: { md: "30px" },
                  px:{sm:"10px",xs:"5px"},
                  pt: { md: "33px", xs: "35.72px" },
                  pr: { md: "36px" },
                  fontSize: { md:"2.5rem",xs:"1.5rem" }
                }}
              >
                <b>
                  ANÁLISIS SOBRE FUSIONES: ALGUNOS HÁBITOS SON DIFÍCILES DE
                  CAMBIAR
                </b>
              </Typography>
              <CardContent className="card-content">
                <Typography variant="h5" sx={{ mt: { md: "22px" } }}>
                  Esta es la descripción de su archivo. Describa de forma
                  concisa el contenido de su archivo y asegúrese de incluir la
                  información de contacto para preguntas y comentarios.
                </Typography>
                <Box sx={{ pt: { md: "50px" } }}>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ backgroundColor: "#1B2432", marginTop: { xs: "20px", md: "0px" } }}
                  >
                    Descargar
                    <ArrowCircleDownIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
