import React, { useState, useContext } from 'react';
import logo from "../../assets/happy footer logo.png";
import { LanguageContext } from '../../context/LanguageContext';
import { EmotionContext } from '../../context/EmotionContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const HeaderHappy = () => {

  const [hidden, setHidden] = useState(true);

  const { language, setLanguage } = useContext(LanguageContext);
  const { emotion, setEmotion } = useContext(EmotionContext);

  const toggleLanguage = () => {
    setLanguage(language === 'English' ? 'Urdu' : 'English');
  };

  const toggleEmotion = () => {
    setEmotion(emotion === 'happy' ? 'sad' : 'happy');
  };

  const content = {
    English: {
      logo: "WellNest",
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      wellNest: "WellNest",
      english: "English",
      urdu: "Urdu",
      happy: "Happy",
      sad: "Sad"
    },
    Urdu: {
      logo: "ویلنیس",
      home: "گھر",
      about: "ہمارے بارے میں",
      services: "خدمات",
      contact: "رابطہ",
      wellNest: "ویل نیسٹ",
      english: "انگریزی",
      urdu: "اردو",
      happy: "خوش",
      sad: "اداس"
    }
  };

  const selectedContent = content[language];

  const buttonClass = `flex items-center bg-white p-2 rounded hover:bg-gray-200 focus:outline-none ${
    emotion === 'happy' ? 'text-[#B32800]' : 'text-[#59D7EE]'
  }`;

  return (
    <nav className="bg-[#B32800] border-gray-200 border">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-16" alt="WellNest Logo" />
            <span className="text-[#FBDD00] self-center text-3xl font-semibold whitespace-nowrap playfair-font">
              {selectedContent.wellNest}
            </span>
        </a>

        <div className="flex space-x-4">
          <button 
            onClick={toggleLanguage} 
            className={buttonClass}
            aria-label="Toggle Language"
          >
            <FontAwesomeIcon icon={faLanguage} className="mr-2" />
            {language === 'English' ? selectedContent.english : selectedContent.urdu}
          </button>
          <button 
            onClick={toggleEmotion} 
            className={buttonClass}
            aria-label="Toggle Emotion"
          >
            <FontAwesomeIcon icon={emotion === 'happy' ? faSmile : faFrown} className="mr-2" />
            {emotion === 'happy' ? selectedContent.happy : selectedContent.sad}
          </button>
        </div>

        <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#FBDD00] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#B32800] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#B32800]">
            <li>
              <Link to="/">
              <a href="#" className="block py-2 px-3 text-[#B32800] bg-white rounded md:bg-transparent text-xl md:text-white md:p-0 playfair-font" aria-current="page">{selectedContent.home}</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a href="#" className="block py-2 px-3 text-[#FBDD00] rounded hover:bg-gray-100 text-xl hover:text-[#B32800] md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 playfair-font">{selectedContent.about}</a>
              </Link>
            </li>
            <li>
              <Link to="/services">
              <a href="#" className="block py-2 px-3 text-[#FBDD00] rounded hover:bg-gray-100 text-xl hover:text-[#B32800] md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 playfair-font">{selectedContent.services}</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
              <a href="#" className="block py-2 px-3 text-[#FBDD00] rounded hover:bg-gray-100 text-xl hover:text-[#B32800] md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 playfair-font">{selectedContent.contact}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
