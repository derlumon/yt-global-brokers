import Start from "./Body/start";
import {
  PiNotePencilThin,
  PiScalesThin,
  PiSignatureThin,
  PiStorefrontThin,
  PiAirplaneLandingThin,
  PiChartBarThin,
  PiIdentificationCardThin,
  PiUsersThin,
  PiHandshakeThin,
} from "react-icons/pi";
import Servicios from "./Body/Servicios";
import Contactanos from "./Body/Contactanos";
import PracticeArea from "./Body/PracticeArea";
import ButtonBaseDemo from "./Body/Consulta";
import Fondo1 from "./img/Hero8.png";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";
import {LiaFileInvoiceDollarSolid,} from "react-icons/lia";
import { CiSun,CiCoins1 } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";

function LegalOptionsEstructure() {
  const { currentLanguage } = useContext(LanguageContext);
  const buttons = [
    {
      icon: <PiNotePencilThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle1,
    
      additionaltitle:"title",
      additionalInfo:"This is additional information for the button." ,
      

    },
    {
      icon: <PiHandshakeThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle2,
    
    },
    {
      icon: <PiScalesThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle3,
    
    },
    {
      icon: <CiSun />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle4,
    
    },
    {
      icon: <PiAirplaneLandingThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle5,
    
    },
    {
      icon: <LiaFileInvoiceDollarSolid />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle6,
    
    },
    {
        icon: <PiChartBarThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle7,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiIdentificationCardThin />,
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
        icon: <CiCoins1 />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle10,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiUsersThin />,
        title:languages[currentLanguage].legalOptionStructure.ButtonTitle11,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <PiSignatureThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle12,
        lists: [
          "Sales & Purchase Agreement (SPA)",
          "Non-Disclosure Agreement (NDA)",
          "Manufacturing Agreement (NNN)",
          "Supplier OEM Agreement (OEM)",
        ],
      },
      {
        icon: <TfiWrite />,
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
