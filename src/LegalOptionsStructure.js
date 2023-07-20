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
import Fondo1 from "./img/Hero8.png";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";

function LegalOptionsEstructure() {
  const buttons = [
    {
      icon: <PiPenThin />,
      title: "Servicios Personalizados",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiScalesThin />,
      title: "Entabla una negociación o mediación. ",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiChartLineUpThin />,
      title: "Servicios en Corte y litigación",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiBooksThin />,
      title: "Gestorías Administrativas",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiWarehouseThin />,
      title: "Migración",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiStorefrontThin />,
      title: "Impuestos y Contribuciones",
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
        icon: <PiStorefrontThin />,
        title: "Planes Internos de Control Organizacional",
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: "Tú Oficial de Cumplimiento",
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: "Forma tú Empresa en México",
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: "Pequeñas y Medianas Empresas",
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: "Representación ",
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: "Redacción de Contratos",
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: "Revisión e Interpretación de Contratos",
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
      <PracticeArea title={"Expertos en el Tema"} subtitle={"A lo largo de los años, hemos adquirido la experiencia necesaria para que este proceso sea lo más sencillo posible. Estableceremos sus objetivos y ajustaremos las expectativas. Contáctenos si tiene alguna duda."}/>
      <ButtonBaseDemo/>
      <Servicios buttons={buttons} title={"Opciones Legales"}/>
      <Contactanos/>
    </>
  );
}

export default LegalOptionsEstructure;
