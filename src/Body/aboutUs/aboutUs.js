import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import hero from "../../img/aboutUs.jpg";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import { languages } from "../../Languages/languages";

const AboutUs = () => {
  const { currentLanguage } = useContext(LanguageContext);
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
          <img style={{ width: "100%",height:"80%", borderRadius: "2rem" }} src={hero} alt=""/>
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
          >
            {languages[currentLanguage].aboutUs.about_the_office}
          </Typography>
          <Typography
            textAlign={"center"}
            variant="h5"
            gutterBottom
            fontWeight={500}
          >
      {languages[currentLanguage].aboutUs.phrase}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
