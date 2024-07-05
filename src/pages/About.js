import React, { useContext } from "react";
import { LanguageContext } from '../context/LanguageContext';

export const About = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    English: {
      about: "About",
      title: "Empowering Employee Wellbeing for a Healthier Workplace",
      description: "At WellNest, our mission is to revolutionize workplace wellness by providing personalized, digital mental health support to employees around the world. We believe that a healthier, happier workforce is a more productive and engaged workforce. Through innovative solutions and a comprehensive approach to mental fitness, we aim to empower individuals to achieve their best selves, both personally and professionally.",
      ourStory: "Our Story",
      storyPart1: "Founded in [Year], WellNest was born out of a deep understanding of the challenges faced by organizations in maintaining employee well-being. Our founders, [Founders' Names], recognized the growing need for accessible and effective mental health support in the workplace. With a team of passionate experts in psychology, technology, and employee engagement, WellNest was created to bridge the gap between mental health and workplace productivity.",
      storyPart2: "Since our inception, WellNest has partnered with numerous organizations to enhance their workplace wellness programs. Our data-driven approach and personalized support have resulted in improved employee morale, reduced levels of burnout and absenteeism, and enhanced overall productivity and performance."
    },
    Urdu: {
      about: "ہمارے بارے میں",
      title: "صحت مند کام کی جگہ کے لئے ملازمین کی فلاح و بہبود کو بااختیار بنانا",
      description: "WellNest میں، ہمارا مشن دنیا بھر کے ملازمین کو ذاتی نوعیت کی، ڈیجیٹل ذہنی صحت کی حمایت فراہم کرکے کام کی جگہ کی فلاح و بہبود میں انقلاب لانا ہے۔ ہمارا ماننا ہے کہ ایک صحت مند، خوشگوار ورک فورس زیادہ پیداواری اور مصروف ورک فورس ہے۔ اختراعی حلوں اور ذہنی فٹنس کے جامع نقطہ نظر کے ذریعے، ہمارا مقصد افراد کو ذاتی اور پیشہ ورانہ طور پر اپنے بہترین نفس کو حاصل کرنے کے لئے بااختیار بنانا ہے۔",
      ourStory: "ہماری کہانی",
      storyPart1: "[سال] میں قائم ہوا، WellNest تنظیموں کی طرف سے ملازمین کی فلاح و بہبود کو برقرار رکھنے میں درپیش چیلنجوں کی گہری تفہیم سے پیدا ہوا تھا۔ ہمارے بانی، [بانیوں کے نام]، نے کام کی جگہ میں قابل رسائی اور مؤثر ذہنی صحت کی حمایت کی بڑھتی ہوئی ضرورت کو تسلیم کیا۔ نفسیات، ٹیکنالوجی، اور ملازمین کی شمولیت کے ماہرین کی ٹیم کے ساتھ، WellNest کو ذہنی صحت اور کام کی جگہ کی پیداواری کے درمیان فرق کو ختم کرنے کے لئے بنایا گیا تھا۔",
      storyPart2: "ہمارے آغاز سے، WellNest نے بے شمار تنظیموں کے ساتھ شراکت کی ہے تاکہ ان کے کام کی جگہ کی فلاح و بہبود کے پروگراموں کو بہتر بنایا جا سکے۔ ہمارے ڈیٹا پر مبنی نقطہ نظر اور ذاتی نوعیت کی حمایت کے نتیجے میں ملازمین کی حوصلہ افزائی میں بہتری، برن آؤٹ اور غیر حاضری کی سطح میں کمی، اور مجموعی طور پر پیداواریت اور کارکردگی میں اضافہ ہوا ہے۔"
    }
  };

  const selectedContent = content[language];

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-4 mb-16">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-sm leading-3 text-gray-600 cursor-pointer">
          {selectedContent.about}
        </p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2 playfair-font">
          {selectedContent.title}
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
          {selectedContent.description}
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Group of people Chilling" />
        <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
        <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 playfair-font">
            {selectedContent.ourStory}
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            {selectedContent.storyPart1}
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            {selectedContent.storyPart2}
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2">
          <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
          <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
          <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
        </div>
      </div>
    </div>
  );
};
