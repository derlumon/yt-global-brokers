import "./App.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Body/navbar";
import Start from "./Body/start";
import { responsiveFontSizes } from "@mui/material";


import About from './Body/About';
import ButtonDial from './Body/ButtonDial';
import Servicios from './Body/Servicios';
import Ubicanos from './Body/Ubicanos'
import Contactanos from './Body/Contactanos';
import Introduccion from './Body/Introduccion';
import ComponenteConsulta from './Body/Consulta'
import LegalResources from './Body/RecursosLegales';



function App() {
  
  return (
    <ThemeProvider theme={theme}>
       <Navbar position="static"/>
       <Start position="absolute"/>
       <ComponenteConsulta/>
    </ThemeProvider>
  );
}

export default App;
