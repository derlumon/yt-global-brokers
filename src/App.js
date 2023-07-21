import { theme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Body/navbar";
import ButtonDial from "./Body/ButtonDial";
import Footer from "./Body/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeStructure from "./HomeStructure";
import AboutUsStructure from "./AboutUsStructure";
import ContactUsStructure from "./ContactUsStructure";
import PracticeAreaStructure from "./PracticeAreaEstructure";
import LegalOptionsEstructure from "./LegalOptionsStructure";
import AccountingOptions from "./AccountingOptions";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";

function App() {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeStructure />} />
          <Route path="/about" element={<AboutUsStructure />} />
          <Route path="/contact" element={<ContactUsStructure />} />
          <Route path="/practiceArea" element={<PracticeAreaStructure />} />
          <Route
            path="/practiceArea/legalOptions"
            element={
              <LegalOptionsEstructure
                title={languages[currentLanguage].legal.title}
                subtitle={languages[currentLanguage].legal.subtitle}
                body1={languages[currentLanguage].legal.body1}
                body2={languages[currentLanguage].legal.body2}
                title2={languages[currentLanguage].legal.title}
              />
            }
          />
          <Route
            path="/practiceArea/legalOptions/Consigliere"
            element={
              <LegalOptionsEstructure
                title={languages[currentLanguage].service.Advisor.title}
                subtitle={languages[currentLanguage].legal.subtitle}
                body1={languages[currentLanguage].service.Advisor.title}
                body2={languages[currentLanguage].service.Advisor.description}
                title2={languages[currentLanguage].legal.title}
              />}
          />
          <Route
            path="/practiceArea/accountingOptions"
            element={<AccountingOptions />}
          />
          <Route
            path="/practiceArea/administrativeOptions"
            element={<PracticeAreaStructure />}
          />
          <Route path="/legalResources" element={<ContactUsStructure />} />
        </Routes>
        <ButtonDial />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
