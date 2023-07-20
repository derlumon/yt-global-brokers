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
import Fondo1 from "./img/Hero1.png";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";

function HomeStructure() {
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
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <>
      <Start Fondo={Fondo1} title={languages[currentLanguage].hero.titleHero} subtitle={languages[currentLanguage].hero.subtitleHero}/>
      <Introduccion/>
      <ButtonBaseDemo/>
      <Servicios buttons={buttons} title={"Areas De Practica"}/>
      <Contactanos/>
      <Ubicanos/>
    </>
  );
}

export default HomeStructure;
