import React, { useState, useContext } from 'react';
import logo from '../../assets/sad footer logo.png';
import { LanguageContext } from '../../context/LanguageContext';
import { EmotionContext } from '../../context/EmotionContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const HeaderSad = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { emotion, setEmotion } = useContext(EmotionContext);

  const [hidden, setHidden] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === 'English' ? 'Urdu' : 'English');
  };

  const toggleEmotion = () => {
    setEmotion(emotion === 'happy' ? 'sad' : 'happy');
  };

  const buttonClass = `flex items-center bg-white p-2 rounded hover:bg-gray-200 focus:outline-none border border-gray-400 ${
    emotion === 'happy' ? 'text-[#B32800]' : 'text-[#59D7EE]'
  }`;

  const content = {
    English: {
      logo: "WellNest",
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      toggleLanguage: "English",
      toggleEmotionHappy: "Happy",
      toggleEmotionSad: "Sad",
    },
    Urdu: {
      logo: "ویلنیس",
      home: "گھر",
      about: "کے بارے میں",
      services: "خدمات",
      contact: "رابطہ",
      toggleLanguage: "اردو",
      toggleEmotionHappy: "خوش",
      toggleEmotionSad: "اداس",
    }
  };

  const selectedContent = content[language];

  return (
    <nav className="bg-[#D3F4FB] border-gray-200 border">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
        <a href="https://github.com/ayeshag7" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="WellNest Logo" />
          <span className={`self-center text-4xl font-semibold whitespace-nowrap playfair-font text-[#59D7EE]`}>
            {selectedContent.logo}
          </span>
        </a>
        </Link>

        <div className="flex space-x-4">
          <button 
            onClick={toggleLanguage} 
            className={buttonClass}
            aria-label="Toggle Language"
          >
            <FontAwesomeIcon icon={faLanguage} className="mr-2" />
            {selectedContent.toggleLanguage}
          </button>
          <button 
            onClick={toggleEmotion} 
            className={buttonClass}
            aria-label="Toggle Emotion"
          >
            <FontAwesomeIcon icon={emotion === 'happy' ? faSmile : faFrown} className="mr-2" />
            {emotion === 'sad' ? selectedContent.toggleEmotionSad : selectedContent.toggleEmotionHappy}
          </button>
        </div>

        <button 
          onClick={() => setHidden(!hidden)} 
          data-collapse-toggle="navbar-default" 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-white" 
          aria-controls="navbar-default" 
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-[#D3F4FB] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#D3F4FB]">
            <li>
              <Link to="/">
              <a href="https://github.com/ayeshag7" className="block py-2 px-3 text-gray-600 bg-white rounded md:bg-transparent text-xl md:text-gray-600 md:p-0 playfair-font" aria-current="page">{selectedContent.home}</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
              <a href="https://github.com/ayeshag7" className="block py-2 px-3 text-[#59D7EE] rounded hover:bg-white text-xl hover:text-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 playfair-font">{selectedContent.about}</a>
              </Link>
            </li>
            <li>
              <Link to="/services">
              <a href="https://github.com/ayeshag7" className="block py-2 px-3 text-[#59D7EE] rounded hover:bg-white text-xl hover:text-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 playfair-font">{selectedContent.services}</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
              <a href="https://github.com/ayeshag7" className="block py-2 px-3 text-[#59D7EE] rounded hover:bg-white text-xl hover:text-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 playfair-font">{selectedContent.contact}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
