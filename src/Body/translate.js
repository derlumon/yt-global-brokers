import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';


const translationData = {
  english: {
    label: 'Translate to English',
    translation: 'Translation in English',
  },
  spanish: {
    label: 'Traducir al Español',
    translation: 'Traducción en Español',
  },
  chinese: {
    label: '翻译成简体中文',
    translation: '简体中文翻译',
  },
};

const TranslationButton = () => {
  const [language, setLanguage] = useState('english');
  const [translation, setTranslation] = useState('');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTranslation = () => {
    // Aquí podrías usar una API de traducción para obtener la traducción real.
    setTranslation(translationData[language].translation);
  };

  return (
    <div>
      <TextField
        select
        label="Select Language"
        value={language}
        onChange={handleLanguageChange}
        variant="outlined"
      >
        {Object.keys(translationData).map((lang) => (
          <MenuItem key={lang} value={lang}>
            {translationData[lang].label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" color="primary" onClick={handleTranslation}>
        Translate
      </Button>
      {translation && <div>{translation}</div>}
    </div>
  );
};

export default TranslationButton;
