import React, { useContext } from 'react';
import heroImage from "../../assets/happy hero image.png";
import { LanguageContext } from '../../context/LanguageContext';

export const HappyHero = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    English: {
      heading: "Employee Wellness, Simplified",
      description: "Your one-stop platform to unleash healthier, happier, and more productive teams with personalized wellness journeys, playful challenges, and actionable insights.",
      scheduleDemo: "Schedule a Demo",
      speakToUs: "Speak to Us",
    },
    Urdu: {
      heading: "ملازم کی فلاح و بہبود، آسان",
      description: "ذاتی نوعیت کے فلاح و بہبود کے سفر، دل لگی چیلنجز، اور قابل عمل بصیرتوں کے ساتھ صحت مند، خوش اور زیادہ پیداواری ٹیمیں بنانے کے لیے آپ کا ایک اسٹاپ پلیٹ فارم۔",
      scheduleDemo: "ڈیمو شیڈول کریں",
      speakToUs: "ہم سے بات کریں",
    }
  };

  const selectedContent = content[language];

  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-[#B32800] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            {selectedContent.heading}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">
            {selectedContent.description}
          </p>
          <a href="https://github.com/ayeshag7" className="inline-flex bg-[#FBDD00] items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
            {selectedContent.scheduleDemo}
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="https://github.com/ayeshag7" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
            {selectedContent.speakToUs}
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImage} alt="mockup" />
        </div>
      </div>
    </section>
  );
};
