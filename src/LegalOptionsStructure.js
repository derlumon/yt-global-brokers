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
      title: languages[currentLanguage].service.Advisor.title,
      additionaltitle: languages[currentLanguage].service.Advisor.title,
      additionalInfo: languages[currentLanguage].service.Advisor.description ,
    },
    {
      icon: <PiHandshakeThin />,
      title: languages[currentLanguage].service.Enter_into_negotiation_or_mediation.title,
      additionaltitle: languages[currentLanguage].service.Enter_into_negotiation_or_mediation.title,
      additionalInfo: languages[currentLanguage].service.Enter_into_negotiation_or_mediation.description ,
    },
    {
      icon: <PiScalesThin />,
      title: languages[currentLanguage].service.Court_and_itigation_services.title,
      additionaltitle: languages[currentLanguage].service.Court_and_itigation_services.title,
      additionalInfo: languages[currentLanguage].service.Court_and_itigation_services.description ,
    },
    {
      icon: <PiGearSixThin />,
      title: languages[currentLanguage].service.Administrative_Agencies.title,
      additionaltitle: languages[currentLanguage].service.Administrative_Agencies.title,
      additionalInfo: languages[currentLanguage].service.Administrative_Agencies.description ,
    
    },
    {
      icon: <PiAirplaneLandingThin />,
      title: languages[currentLanguage].service.Migration.title,
      additionaltitle: languages[currentLanguage].service.Migration.title,
      additionalInfo: languages[currentLanguage].service.Migration.description ,
    
    },
    {
      icon: <PiCurrencyCircleDollarThin />,
      title: languages[currentLanguage].service.Taxes_and_Contributions.title,
      additionaltitle: languages[currentLanguage].service.Taxes_and_Contributions.title,
      additionalInfo: languages[currentLanguage].service.Taxes_and_Contributions.description ,
    },
    {
        icon: <PiChartBarThin />,
        title: languages[currentLanguage].service.Internal_Organizational_Control_Plans.title,
        additionaltitle: languages[currentLanguage].service.Internal_Organizational_Control_Plans.title,
        additionalInfo: languages[currentLanguage].service.Internal_Organizational_Control_Plans.description ,
      },
      {
        icon: <PiIdentificationCardThin />,
        title: languages[currentLanguage].service.Your_Compliance_Officer.title,
        additionaltitle: languages[currentLanguage].service.Your_Compliance_Officer.title,
        additionalInfo: languages[currentLanguage].service.Your_Compliance_Officer.description ,
      },
      {
        icon: <PiStorefrontThin />,
        title: languages[currentLanguage].service.Form_your_Company_in_Mexico.title,
        additionaltitle: languages[currentLanguage].service.Form_your_Company_in_Mexico.title,
        additionalInfo: languages[currentLanguage].service.Form_your_Company_in_Mexico.description ,
      },
      {
        icon: <CiCoins1 />,
        title: languages[currentLanguage].service.Small_and_medium_businesses.title,
        additionaltitle: languages[currentLanguage].service.Small_and_medium_businesses.title,
        additionalInfo: languages[currentLanguage].service.Small_and_medium_businesses.description ,
      },
      {
        icon: <PiUsersThin />,
        title: languages[currentLanguage].service.Representation.title,
        additionaltitle: languages[currentLanguage].service.Representation.title,
        additionalInfo: languages[currentLanguage].service.Representation.description ,
      },
      {
        icon: <PiSignatureThin />,
        title: languages[currentLanguage].service.Contract_drafting.title,
        additionaltitle: languages[currentLanguage].service.Contract_drafting.title,
        additionalInfo: languages[currentLanguage].service.Contract_drafting.description ,
      },
      {
        icon: <PiSignatureThin />,
        title: languages[currentLanguage].service.Review_and_Interpretation_of_Contracts.title,
        additionaltitle: languages[currentLanguage].service.Review_and_Interpretation_of_Contracts.title,
        additionalInfo: languages[currentLanguage].service.Review_and_Interpretation_of_Contracts.description ,
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
