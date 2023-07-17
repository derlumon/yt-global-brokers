import React, { createContext, useState } from 'react';
import { languages } from '../Languages/languages';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  const languageContextValue = {
    currentLanguage,
    handleLanguageChange
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};