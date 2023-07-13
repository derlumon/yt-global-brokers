import "./App.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Body/navbar";
import Start from "./Body/start";
import { responsiveFontSizes } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Navbar position="static"/>
       <Start position="absolute"/>
       <Start/>
    </ThemeProvider>
  );
}

export default App;
