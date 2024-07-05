import React, { useContext } from 'react';
import sadPeople from "../../assets/services-sad.png";
import { FaClipboardList, FaDownload, FaCheckCircle, FaUsers, FaToolbox, FaVideo } from 'react-icons/fa';
import { LanguageContext } from '../../context/LanguageContext';

export const ServicesSad = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    English: {
      heading: "How we do it",
      features: [
        {
          icon: <FaClipboardList className="text-2xl text-gray-700" />,
          title: 'Training Sessions',
          description: 'Ten-minute sessions to help build the tools, skills, and knowledge people need to improve their mental fitness.',
        },
        {
          icon: <FaDownload className="text-2xl text-gray-700" />,
          title: 'Exercises',
          description: 'Easy, bite-sized versions of our training sessions to fit self-care into your people’s busy life.',
        },
        {
          icon: <FaCheckCircle className="text-2xl text-gray-700" />,
          title: 'Check-Up',
          description: 'Tracks changes in people’s energy, resilience, anxiety, and depression levels to uncover insights about their mental fitness.',
        },
        {
          icon: <FaDownload className="text-2xl text-gray-700" />,
          title: 'Webinars',
          description: 'Live training sessions to help people build more mindfulness with different strategies and breathwork exercises.',
        },
        {
          icon: <FaUsers className="text-2xl text-gray-700" />,
          title: 'Community',
          description: 'Share their story and find peer support and encouragement anonymously.',
        },
        {
          icon: <FaToolbox className="text-2xl text-gray-700" />,
          title: 'Mental Fitness Toolbox',
          description: 'Set of tools to help people set better goals, track their progress, balance negative thoughts, and regulate their emotions and moods.',
        },
        {
          icon: <FaVideo className="text-2xl text-gray-700" />,
          title: 'Video Library',
          description: 'Library of educational videos to help people better manage their burnout, stress and anxiety.',
        },
      ]
    },
    Urdu: {
      heading: "ہم یہ کیسے کرتے ہیں",
      features: [
        {
          icon: <FaClipboardList className="text-2xl text-gray-700" />,
          title: 'تربیتی سیشن',
          description: 'دس منٹ کے سیشنز جو لوگوں کو ان کی ذہنی صحت کو بہتر بنانے کے لیے ٹولز، مہارتوں اور علم کو تیار کرنے میں مدد کرتے ہیں۔',
        },
        {
          icon: <FaDownload className="text-2xl text-gray-700" />,
          title: 'ورزشیں',
          description: 'ہماری تربیتی سیشنز کے آسان، چھوٹے ورژن جو آپ کے لوگوں کی مصروف زندگی میں خود کی دیکھ بھال کو فٹ کرنے کے لیے ہیں۔',
        },
        {
          icon: <FaCheckCircle className="text-2xl text-gray-700" />,
          title: 'چیک اپ',
          description: 'لوگوں کی توانائی، لچک، بے چینی اور ڈپریشن کی سطحوں میں تبدیلیوں کو ٹریک کرتا ہے تاکہ ان کی ذہنی صحت کے بارے میں بصیرت حاصل کی جا سکے۔',
        },
        {
          icon: <FaDownload className="text-2xl text-gray-700" />,
          title: 'ویبینارز',
          description: 'لائیو تربیتی سیشنز جو لوگوں کو مختلف حکمت عملیوں اور سانس لینے کی مشقوں کے ساتھ زیادہ ذہن سازی کرنے میں مدد کرتے ہیں۔',
        },
        {
          icon: <FaUsers className="text-2xl text-gray-700" />,
          title: 'کمیونٹی',
          description: 'اپنی کہانی شیئر کریں اور گمنامی سے ہم مرتبہ کی حمایت اور حوصلہ افزائی حاصل کریں۔',
        },
        {
          icon: <FaToolbox className="text-2xl text-gray-700" />,
          title: 'ذہنی فٹنس ٹول باکس',
          description: 'ٹولز کا سیٹ جو لوگوں کو بہتر اہداف مقرر کرنے، ان کی پیشرفت کو ٹریک کرنے، منفی خیالات کو متوازن کرنے، اور ان کے جذبات اور موڈ کو منظم کرنے میں مدد کرتا ہے۔',
        },
        {
          icon: <FaVideo className="text-2xl text-gray-700" />,
          title: 'ویڈیو لائبریری',
          description: 'تعلیمی ویڈیوز کی لائبریری جو لوگوں کو ان کے جلنے، تناؤ اور اضطراب کو بہتر طریقے سے منظم کرنے میں مدد کرتی ہے۔',
        },
      ]
    }
  };

  const selectedContent = content[language];

  return (
    <div className="max-w-7xl mx-auto p-6 mb-24">
      <h2 className="text-5xl text-[#59D7EE] text-center font-extrabold mb-12">{selectedContent.heading}</h2>

      <div className='flex gap-x-16'>
        <div>
          {selectedContent.features.map((feature, index) => (
            <div key={index} className="flex items-start mb-4">
              <div className="mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-4 lg:flex">
          <img src={sadPeople} alt="mockup" />
        </div>
      </div>
    </div>
  );
};
