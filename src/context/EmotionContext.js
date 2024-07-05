import React, { createContext, useReducer } from 'react';
import emotionReducer from '../reducer/EmotionReducer';

const EmotionContext = createContext();

const initialState = 'sad'; 

const EmotionProvider = ({ children }) => {
  const [emotion, dispatch] = useReducer(emotionReducer, initialState);

  const setEmotion = (newEmotion) => {
    dispatch({ type: 'SET_EMOTION', payload: newEmotion });
  };

  return (
    <EmotionContext.Provider value={{ emotion, setEmotion }}>
      {children}
    </EmotionContext.Provider>
  );
};

export { EmotionContext, EmotionProvider };
