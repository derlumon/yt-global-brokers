import "./App.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Body/navbar";
import Start from "./Body/start";
import Box from "@mui/material/Box"
import { PiPenThin, PiScalesThin, PiChartLineUpThin, PiBooksThin, PiWarehouseThin, PiStorefrontThin } from "react-icons/pi";
import ButtonDial from "./Body/ButtonDial";
import Servicios from "./Body/Servicios";
import Ubicanos from "./Body/Ubicanos";
import Contactanos from "./Body/Contactanos";
import Introduccion from "./Body/Introduccion";
import LegalResources from "./Body/RecursosLegales";
import Footer from "./Body/Footer";
import { LanguageProvider } from "./Context/LanguageContext";
import ButtonBaseDemo from "./Body/Consulta";
import AboutUs from "./Body/aboutUs/aboutUs"

function App() {
  const buttons = [
    {
      icon: <PiPenThin />,
      title: "Contract Drafting & Review",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiScalesThin />,
      title: "Contract Drafting & Review",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiChartLineUpThin />,
      title: "Contract Drafting & Review",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiBooksThin />,
      title: "Contract Drafting & Review",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiWarehouseThin />,
      title: "Contract Drafting & Review",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiStorefrontThin />,
      title: "Contract Drafting & Review",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    
    
    
    
  ];
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Navbar position="static" />
        <Start position="absolute" />
        <Box width={"100%"}>
      
          <Introduccion/>
          <ButtonBaseDemo/>
          <Servicios buttons={buttons}/>
          
          <Contactanos/>
          <Ubicanos/>
          <ButtonDial/>
          <Footer/>
        </Box>
        

      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
