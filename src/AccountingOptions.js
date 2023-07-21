import Start from "./Body/start";
import {
  PiBriefcaseMetalThin,
  PiPersonArmsSpreadThin,
  PiBankThin,
  PiPenThin,
  PiCalculatorThin,
  PiMoneyLight,
  PiPiggyBankThin
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
    const { currentLanguage } = useContext(LanguageContext);
  const buttons = [
    {
        icon: <PiBriefcaseMetalThin />,
        title: languages[currentLanguage].AccountingOptions.business_accounting.title,
        additionaltitle: languages[currentLanguage].AccountingOptions.business_accounting.title,
        additionalInfo: languages[currentLanguage].AccountingOptions.business_accounting.description ,
      },
      {
        icon: <PiPersonArmsSpreadThin />,
        title: languages[currentLanguage].AccountingOptions.personal_Accounting.title,
        additionaltitle: languages[currentLanguage].AccountingOptions.personal_Accounting.title,
        additionalInfo: languages[currentLanguage].AccountingOptions.personal_Accounting.description ,
      },
      {
        icon: <PiBankThin />,
        title: languages[currentLanguage].AccountingOptions.billing.title,
        additionaltitle: languages[currentLanguage].AccountingOptions.billing.title,
        additionalInfo: languages[currentLanguage].AccountingOptions.billing.description ,
      },
      {
        icon: <PiPenThin />,
        title: languages[currentLanguage].AccountingOptions.statement.title,
        additionaltitle: languages[currentLanguage].AccountingOptions.statement.title,
        additionalInfo: languages[currentLanguage].AccountingOptions.statement.description ,
      
      },
      {
        icon: <PiCalculatorThin />,
        title: languages[currentLanguage].AccountingOptions.audit.title,
        additionaltitle: languages[currentLanguage].AccountingOptions.audit.title,
        additionalInfo: languages[currentLanguage].AccountingOptions.audit.description ,
      
      },
      {
        icon: <PiPiggyBankThin/>,
        title: languages[currentLanguage].AccountingOptions.procedures_before_the_treasury.title,
        additionaltitle: languages[currentLanguage].AccountingOptions.procedures_before_the_treasury.title,
        additionalInfo: languages[currentLanguage].AccountingOptions.procedures_before_the_treasury.description ,
      
      },
      {
        icon: <PiMoneyLight />,
        title: languages[currentLanguage].AccountingOptions.deductions_and_accreditation.title,
        additionaltitle: languages[currentLanguage].AccountingOptions.deductions_and_accreditation.title,
        additionalInfo: languages[currentLanguage].AccountingOptions.deductions_and_accreditation.description ,
      
      },
  ];

  return (
    <>
      <Start Fondo={Fondo1} title={languages[currentLanguage].consulta.image2} subtitle={languages[currentLanguage].hero.subtitleHero}/>
      <PracticeArea title={languages[currentLanguage].legalOptionStructure.title} subtitle={languages[currentLanguage].legalOptionStructure.subtitle}/>
      <ButtonBaseDemo/>
      <Servicios buttons={buttons} title={languages[currentLanguage].navbar.Accounting_Options}/>
      <Contactanos/>
    </>
  );
}

export default AccountingOptions;
