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

function LegalOptionsEstructure(props) {
    const { currentLanguage } = useContext(LanguageContext);
    const buttons = [
    {
      icon: <PiPenThin />,
      title: languages[currentLanguage].service.Advisor.title,
      lists: [
        languages[currentLanguage].service.Advisor.miniDescription,
      ],
    },
    {
      icon: <PiScalesThin />,
      title: languages[currentLanguage].service.Enter_into_negotiation_or_mediation.title,
      lists: [
        languages[currentLanguage].service.Enter_into_negotiation_or_mediation.miniDescription,
      ],
    },
    {
      icon: <PiChartLineUpThin />,
      title: languages[currentLanguage].service.Court_and_itigation_services.title,
      lists: [
        languages[currentLanguage].service.Court_and_itigation_services.miniDescription,
      ],
    },
    {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Administrative_Agencies.title,
        lists: [
          languages[currentLanguage].service.Administrative_Agencies.miniDescription,
        ],
    },
    {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Migration.title,
        lists: [
          languages[currentLanguage].service.Migration.miniDescription,
        ],
    },
    {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Taxes_and_Contributions.title,
        lists: [
          languages[currentLanguage].service.Taxes_and_Contributions.miniDescription,
        ],
    },
    {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Internal_Organizational_Control_Plans.title,
        lists: [
          languages[currentLanguage].service.Internal_Organizational_Control_Plans.miniDescription,
        ],
      },
      {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Your_Compliance_Officer.title,
        lists: [
          languages[currentLanguage].service.Your_Compliance_Officer.miniDescription,
        ],
      },
      {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Form_your_Company_in_Mexico.title,
        lists: [
          languages[currentLanguage].service.Form_your_Company_in_Mexico.miniDescription,
        ],
      },
      {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Small_and_medium_businesses.title,
        lists: [
          languages[currentLanguage].service.Small_and_medium_businesses.miniDescription,
        ],
      },
      {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Representation.title,
        lists: [
          languages[currentLanguage].service.Representation.miniDescription,
        ],
      },
      {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Contract_drafting.title,
        lists: [
          languages[currentLanguage].service.Contract_drafting.miniDescription,
        ],
      },
      {
        icon: <PiChartLineUpThin />,
        title: languages[currentLanguage].service.Review_and_Interpretation_of_Contracts.title,
        lists: [
          languages[currentLanguage].service.Review_and_Interpretation_of_Contracts.miniDescription,
        ],
      },
  ];
  
  return (
    <>
      <Start Fondo={Fondo1} title={props.title} subtitle={props.subtitle}/>
      <PracticeArea title={props.body1} subtitle={props.body2}/>
      <ButtonBaseDemo/>
      <Servicios buttons={buttons} title={props.title2}/>
      <Contactanos/>
    </>
  );
}

export default LegalOptionsEstructure;
