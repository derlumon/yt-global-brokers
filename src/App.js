import "./App.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Body/navbar";
import Start from "./Body/start";
import Box from "@mui/material/Box"

import ButtonDial from "./Body/ButtonDial";
import Servicios from "./Body/Servicios";
import Ubicanos from "./Body/Ubicanos";
import Contactanos from "./Body/Contactanos";
import Introduccion from "./Body/Introduccion";
import LegalResources from "./Body/RecursosLegales";
import Footer from "./Body/Footer";
import { LanguageProvider } from "./Context/LanguageContext";
import ButtonBaseDemo from "./Body/Consulta";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Navbar position="static" />
        <Start position="absolute" />
        <Box width={"100%"}>
          <Introduccion/>
          <ButtonBaseDemo/>
          <Servicios/>
          
          <Contactanos/>
          <Ubicanos/>
          <ButtonDial/>
        </Box>
        

      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
