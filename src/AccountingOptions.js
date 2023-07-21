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
import PracticeArea from "./Body/PracticeArea";
import ButtonBaseDemo from "./Body/Consulta";
import Fondo1 from "./img/Hero10.png";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";

function AccountingOptions() {
  const buttons = [
    {
      icon: <PiPenThin />,
      title: "Contabilidad Empresarial",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiScalesThin />,
      title: "Contabilidad Personal",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiChartLineUpThin />,
      title: "Facturacion",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiBooksThin />,
      title: "Declaraciones",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiWarehouseThin />,
      title: "Auditorias",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiStorefrontThin />,
      title: "Tramites ante Hacienda",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
        icon: <PiStorefrontThin />,
        title: "Deducciones y Acreditamientos",
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
      <Start Fondo={Fondo1} title={"OPCIONES CONTABLES EN MEXICO"} subtitle={languages[currentLanguage].hero.subtitleHero}/>
      <PracticeArea title={"Expertos en el Tema"} subtitle={"A lo largo de los años, hemos adquirido la experiencia necesaria para que este proceso sea lo más sencillo posible. Estableceremos sus objetivos y ajustaremos las expectativas. Contáctenos si tiene alguna duda."}/>
      <ButtonBaseDemo/>
      <Servicios buttons={buttons} title={"Opciones Contables"}/>
      <Contactanos/>
    </>
  );
}

export default AccountingOptions;
