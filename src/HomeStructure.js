import Start from "./Body/start";
import {
    PiHouseLight,
    PiWarehouseDuotone,
    PiMedal,
    PiGearSixThin,
    PiAirplaneLandingThin,
    PiCurrencyCircleDollarThin,
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
    const { currentLanguage } = useContext(LanguageContext);
  
    const buttons = [
    {
        icon: <PiHouseLight />,
        title: languages[currentLanguage].AdministrativeOptions.search_for_commercial.title,
        additionaltitle: languages[currentLanguage].AdministrativeOptions.search_for_commercial.title,
        additionalInfo: languages[currentLanguage].AdministrativeOptions.search_for_commercial.description ,
      },
      {
        icon: <PiWarehouseDuotone />,
        title: languages[currentLanguage].AdministrativeOptions.search_for_residential.title,
        additionaltitle: languages[currentLanguage].AdministrativeOptions.search_for_residential.title,
        additionalInfo: languages[currentLanguage].AdministrativeOptions.search_for_residential.description ,
      },
      {
        icon: <PiMedal />,
        title: languages[currentLanguage].AdministrativeOptions.orientation_as_a_leasing.title,
        additionaltitle: languages[currentLanguage].AdministrativeOptions.orientation_as_a_leasing.title,
        additionalInfo: languages[currentLanguage].AdministrativeOptions.orientation_as_a_leasing.description ,
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
      
    
    ]

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
