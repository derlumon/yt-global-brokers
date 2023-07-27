import Start from "./Body/start";
import Contactanos from "./Body/Contactanos";
import ButtonBaseDemo from "./Body/Consulta";
import Fondo from "./img/Hero6-min.webp";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";
import PracticeArea from "./Body/PracticeArea";

function PracticeAreaStructure() {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <>
      <Start Fondo={Fondo} title={languages[currentLanguage].practiceArea.title} subtitle={languages[currentLanguage].practiceArea.subtitle}/>
      <PracticeArea title={languages[currentLanguage].legalOptionStructure.title} subtitle={languages[currentLanguage].legalOptionStructure.subtitle}/>
      <ButtonBaseDemo/>
      <Contactanos/>
    </>
  );
}

export default PracticeAreaStructure;
