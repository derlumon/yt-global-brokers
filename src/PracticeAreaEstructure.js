import Start from "./Body/start";
import {
  PiPenThin,
  PiScalesThin,
  PiChartLineUpThin,
  PiBooksThin,
  PiWarehouseThin,
  PiStorefrontThin,
} from "react-icons/pi";
import Servicios from "./Body/Servicios";
import Ubicanos from "./Body/Ubicanos";
import Contactanos from "./Body/Contactanos";
import Introduccion from "./Body/Introduccion";
import ButtonBaseDemo from "./Body/Consulta";
import Fondo from "./img/Hero6.png";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";
import PracticeArea from "./Body/PracticeArea";

function PracticeAreaStructure() {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <>
      <Start Fondo={Fondo} title={languages[currentLanguage].practiceArea.title} subtitle={languages[currentLanguage].practiceArea.subtitle}/>
      <PracticeArea title={"Expertos en el Tema"} subtitle={"A lo largo de los años, hemos adquirido la experiencia necesaria para que este proceso sea lo más sencillo posible. Estableceremos sus objetivos y ajustaremos las expectativas. Contáctenos si tiene alguna duda."}/>
      <ButtonBaseDemo/>
      <Contactanos/>
    </>
  );
}

export default PracticeAreaStructure;
