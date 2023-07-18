import { Grid, Typography, Box } from "@mui/material";
import React from "react";

export default function Introduccion() {
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
        Quienes somos
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginBottom: "30px" }}
        fontFamily={"Rubik"}
      >
        Despacho contable, jurídico y administrativo
      </Typography>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            align="justify"
            fontFamjustifyily={"Rubik"}
          >
            Proporcionamos servicios profesionales en administración, auditorias, derecho fiscal, laboral, contabilidad para personas físicas o morales  a clientes en la Republica mexicana desde 2010. Somos un despacho contable, legal fiscal, que en base a la investigación y la planeación estratégica damos soluciones satisfactorias. 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            align="justify"
            fontFamily={"Rubik"}
          >
            Nuestro objetivo es siempre el construir una relación eficiente basada en resultados positivos y tangibles. Trabajando nuestras áreas en conjunto para crear un plan de acción personalizado para usted o su organización. Póngase en contacto para saber más de nuestra visión de servicio y enfoque de nuestros productos y servicios.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
