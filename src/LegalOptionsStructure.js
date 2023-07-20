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
  const { currentLanguage } = useContext(LanguageContext);
  const buttons = [
    {
      icon: <PiPenThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle1,
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiScalesThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle2,
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiChartLineUpThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle3,
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiBooksThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle4,
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiWarehouseThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle5,
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
      icon: <PiStorefrontThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle6,
      lists: [
        "Sales & Purchase Agreement (SPA)",
        "Non-Disclosure Agreement (NDA)",
        "Manufacturing Agreement (NNN)",
        "Supplier OEM Agreement (OEM)",
      ],
    },
    {
        icon: <PiStorefrontThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle7,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle8,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle9,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle10,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title:languages[currentLanguage].legalOptionStructure.ButtonTitle11,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle12,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle13,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
  ];

  return (
    <>
      <Start Fondo={Fondo1} title={languages[currentLanguage].hero.titleHero} subtitle={languages[currentLanguage].hero.subtitleHero}/>
      <PracticeArea title={languages[currentLanguage].legalOptionStructure.title} subtitle={languages[currentLanguage].legalOptionStructure.subtitle}/>
      <ButtonBaseDemo/>
      <Servicios buttons={buttons} title={languages[currentLanguage].legalOptionStructure.serviceTitle}/>
      <Contactanos/>
    </>
  );
}

export default LegalOptionsEstructure;
