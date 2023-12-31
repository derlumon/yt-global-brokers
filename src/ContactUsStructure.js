import Start from "./Body/start";
import Contactanos from "./Body/Contactanos";
import ButtonBaseDemo from "./Body/Consulta";
import Fondo from "./img/Hero2-min.webp";
import Ubicanos from "./Body/Ubicanos";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";

function ContactUsStructure() {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <>
      <Start
        Fondo={Fondo}
        title={languages[currentLanguage].contactUs.title}
        subtitle={languages[currentLanguage].contactUs.subtitle}
      />
      <Contactanos />
      <ButtonBaseDemo />
      <Ubicanos/>
    </>
  );
}

export default ContactUsStructure;
