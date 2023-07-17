import "./App.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Body/navbar";
import Start from "./Body/start";
import { responsiveFontSizes } from "@mui/material";

import ButtonDial from "./Body/ButtonDial";
import Servicios from "./Body/Servicios";
import Ubicanos from "./Body/Ubicanos";
import Contactanos from "./Body/Contactanos";
import Introduccion from "./Body/Introduccion";
import ComponenteConsulta from "./Body/Consulta";
import LegalResources from "./Body/RecursosLegales";
import Footer from "./Body/Footer";
import { LanguageProvider } from "./Context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Navbar position="static" />
        <Start position="absolute" />
        <Introduccion />
        <ButtonDial />
        <Servicios />
        <Contactanos />
        <Ubicanos />
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
