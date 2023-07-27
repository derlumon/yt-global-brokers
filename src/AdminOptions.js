import Start from "./Body/start";
import {
  PiPenThin,
PiHouseLight,
PiWarehouseDuotone,
PiMedal,
PiHandshakeLight
} from "react-icons/pi";
import Servicios from "./Body/Servicios";
import Contactanos from "./Body/Contactanos";
import PracticeArea from "./Body/PracticeArea";
import ButtonBaseDemo from "./Body/Consulta";
import Fondo1 from "./img/Hero11-min.webp";
import { languages } from "./Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";


function AdminOptions() {
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
        icon: <PiPenThin />,
        title: languages[currentLanguage].AdministrativeOptions.areas_of_interest.title,
        additionaltitle: languages[currentLanguage].AdministrativeOptions.areas_of_interest.title,
        additionalInfo: languages[currentLanguage].AdministrativeOptions.areas_of_interest.description ,
      
      },
      {
        icon: <PiHandshakeLight />,
        title: languages[currentLanguage].AdministrativeOptions.natural_covenants.title,
        additionaltitle: languages[currentLanguage].AdministrativeOptions.natural_covenants.title,
        additionalInfo: languages[currentLanguage].AdministrativeOptions.natural_covenants.description ,
      
      },
  ];

  return (
    <>
      <Start Fondo={Fondo1} title={languages[currentLanguage].consulta.image3} subtitle={languages[currentLanguage].hero.subtitleHero}/>
      <PracticeArea title={languages[currentLanguage].legalOptionStructure.title} subtitle={languages[currentLanguage].legalOptionStructure.subtitle}/>
      <ButtonBaseDemo/>
      <Servicios buttons={buttons} title={languages[currentLanguage].navbar.Real_Estate_Management_Options}/>
      <Contactanos/>
    </>
  );
}

export default AdminOptions;

