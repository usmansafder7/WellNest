import React, { createContext, useReducer } from 'react';
import languageReducer from '../reducer/LanguageReducer';

const LanguageContext = createContext();

const initialState = 'English'; 

const LanguageProvider = ({ children }) => {
  const [language, dispatch] = useReducer(languageReducer, initialState);

  const setLanguage = (newLanguage) => {
    dispatch({ type: 'SET_LANGUAGE', payload: newLanguage });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
