import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import {ScrollToTop} from "./components/ScrollToTop";
import { LanguageProvider } from './context/LanguageContext';
import { EmotionProvider } from './context/EmotionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
        <EmotionProvider>
          <ScrollToTop />
          <App />
        </EmotionProvider>
      </LanguageProvider>
    </Router>
  </React.StrictMode>
);
