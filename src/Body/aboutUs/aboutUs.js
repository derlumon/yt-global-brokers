import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import hero from "../../img/aboutUs.jpg";

const AboutUs = () => {
  return (
    <Grid
      container
      sx={{ paddingX: { xs: "5%", md: "10%" }, paddingY: "5%" }}
      spacing={8}
    >
      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <img style={{ width: "100%",height:"80%", borderRadius: "2rem" }} src={hero} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box 
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}>
          <Typography
            textAlign={"center"}
            variant="h3"
            gutterBottom
            fontWeight={600}
            fontFamily={"Rubik"}
          >
            SOBRE EL DESPACHO
          </Typography>
          <Typography
            textAlign={"center"}
            variant="h5"
            gutterBottom
            fontWeight={500}
            fontFamily={"Rubik"}
          >
            TY GLOBAL BROKER'S ha prestado servicios en México, España Brasil,
            Colombia desde el año 2000 con un éxito considerable. Nos
            enorgullece nuestra tradición de excelencia, que garantiza un
            servicio de la más alta calidad. Entendemos los desafíos y la
            presión que conlleva cada caso y estamos para usted, acompañándolo
            en cada paso del camino. Nuestro equipo de profesionales jurídicos
            se distingue por su profesionalismo y por aportar un toque personal
            a su trato con los clientes, además de dar siempre la atención que
            cada caso amerita. Contáctenos hoy mismo.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
