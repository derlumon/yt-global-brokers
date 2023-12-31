import Start from "./Body/start";
import ButtonBaseDemo from "./Body/Consulta";
import AboutUs from "./Body/aboutUs/aboutUs";
import Fondo from "./img/Hero5-min.webp";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";

function AboutUsStructure() {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <>
      <Start
        Fondo={Fondo}
        title={languages[currentLanguage].aboutUs.title}
        subtitle={languages[currentLanguage].aboutUs.subtitle}
      />
      <AboutUs /> 
      <ButtonBaseDemo />
    </>
  );
}

export default AboutUsStructure;
