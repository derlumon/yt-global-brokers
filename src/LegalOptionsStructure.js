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
  PiCurrencyCircleDollarThin,
  PiGearSixThin,
  PiNotebookThin
} from "react-icons/pi";
import Servicios from "./Body/Servicios";
import Contactanos from "./Body/Contactanos";
import PracticeArea from "./Body/PracticeArea";
import ButtonBaseDemo from "./Body/Consulta";
import Fondo1 from "./img/Hero8.png";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";
import { CiCoins1 } from "react-icons/ci";


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
      additionaltitle:"title",
      additionalInfo:"This is additional information for the button."
    },
    {
      icon: <PiScalesThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle3,
    
    },
    {
      icon: <PiGearSixThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle4,
    
    },
    {
      icon: <PiAirplaneLandingThin />,
      title: languages[currentLanguage].legalOptionStructure.ButtonTitle5,
    
    },
    {
      icon: <PiCurrencyCircleDollarThin />,
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
          languages[currentLanguage].service.Internal_Organizational_Control_Plans.miniDescription,
        ],
      },
      {
        icon: <PiStorefrontThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle9,
        lists: [
          languages[currentLanguage].service.Your_Compliance_Officer.miniDescription,
        ],
      },
      {
        icon: <CiCoins1 />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle10,
        lists: [
          languages[currentLanguage].service.Form_your_Company_in_Mexico.miniDescription,
        ],
      },
      {
        icon: <PiUsersThin />,
        title:languages[currentLanguage].legalOptionStructure.ButtonTitle11,
        lists: [
          languages[currentLanguage].service.Small_and_medium_businesses.miniDescription,
        ],
      },
      {
        icon: <PiSignatureThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle12,
        lists: [
          languages[currentLanguage].service.Representation.miniDescription,
        ],
      },
      {
        icon: <PiNotebookThin />,
        title: languages[currentLanguage].legalOptionStructure.ButtonTitle13,
        lists: [
          languages[currentLanguage].service.Review_and_Interpretation_of_Contracts.miniDescription,
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
