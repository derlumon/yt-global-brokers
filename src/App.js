import { theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Body/navbar";
import ButtonDial from "./Body/ButtonDial";
import Footer from "./Body/Footer";
import { LanguageProvider } from "./Context/LanguageContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeStructure from "./HomeStructure";
import AboutUsStructure from "./AboutUsStructure";
import ContactUsStructure from "./ContactUsStructure";
import PracticeAreaStructure from "./PracticeAreaEstructure";
import LegalOptionsEstructure from "./LegalOptionsStructure";
function App() {
  
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeStructure />} />
            <Route path="/about" element={<AboutUsStructure />} />
            <Route path="/contact" element={<ContactUsStructure />} />
            <Route path="/practiceArea" element={<PracticeAreaStructure />} />
            <Route path="/practiceArea/legalOptions" element={<LegalOptionsEstructure/>} />
            <Route path="/practiceArea/accountingOptions" element={<ContactUsStructure />} />
            <Route path="//practiceArea/administrativeOptions" element={<PracticeAreaStructure />} />
            <Route path="/legalResources" element={<ContactUsStructure />} />
          </Routes>
          <ButtonDial/>
          <Footer/>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
