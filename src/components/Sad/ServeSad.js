import React, { useContext } from 'react';
import employer from "../../assets/employer.png";
import healthcare from "../../assets/healthcare.png";
import plan from "../../assets/health plan.png";
import broker from "../../assets/broker.png";
import { LanguageContext } from '../../context/LanguageContext';

export const ServeSad = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    English: {
      heading: "Who We Serve",
      description: "With over a decade of experience, we are dedicated to empowering employers, healthcare providers, benefit consultants, and health plans through personalized programs, white-labeled platforms, and data-driven insights",
      employers: "Employers",
      healthcareProviders: "Healthcare Providers",
      healthPlans: "Health Plans",
      brokers: "Brokers and Consultants",
    },
    Urdu: {
      heading: "ہم کس کی خدمت کرتے ہیں",
      description: "ایک دہائی سے زیادہ کے تجربے کے ساتھ، ہم ذاتی نوعیت کے پروگراموں، سفید لیبل والے پلیٹ فارمز، اور ڈیٹا پر مبنی بصیرت کے ذریعے آجروں، صحت کی دیکھ بھال کرنے والے فراہم کنندگان، فوائد کے مشیروں، اور صحت کے منصوبوں کو بااختیار بنانے کے لیے وقف ہیں۔",
      employers: "آجر",
      healthcareProviders: "صحت کی دیکھ بھال فراہم کرنے والے",
      healthPlans: "صحت کے منصوبے",
      brokers: "بروکرز اور مشیر",
    }
  };

  const selectedContent = content[language];

  return (
    <>
      <div className="display flex flex-col items-center justify-center my-12">
        <h1 className="max-w-2xl mb-4 text-3xl text-[#59D7EE] font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">
          {selectedContent.heading}
        </h1>
        <p className="text-gray-900 mx-24 my-4 text-center">
          {selectedContent.description}
        </p>
        <div className="flex flex-wrap gap-x-12 md:gap-x-20 gap-y-8 display justify-start mx-48 md:mx-80 my-12">
          <div className="h-64 w-80 bg-[#D3F4FB] border-2 rounded-lg border-[#53DFD1]">
            <img src={employer} className="h-40 mx-20 my-4" alt="" />
            <p className="max-w-2xl my-4 text-lg text-center text-[#59D7EE] font-bold tracking-tight leading-none md:text-xl xl:text-2xl">
              {selectedContent.employers}
            </p>
          </div>

          <div className="h-64 w-80 bg-[#D3F4FB]  border-2 rounded-lg border-[#53DFD1]">
            <img src={healthcare} className="h-40 mx-20 my-4" alt="" />
            <p className="max-w-2xl my-4 text-lg text-center text-[#59D7EE] font-bold tracking-tight leading-none md:text-xl xl:text-2xl">
              {selectedContent.healthcareProviders}
            </p>
          </div>

          <div className="h-64 w-80 bg-[#D3F4FB] border-2 rounded-lg border-[#53DFD1]">
            <img src={plan} className="h-40 mx-20 my-4" alt="" />
            <p className="max-w-2xl my-4 text-lg text-center text-[#59D7EE] font-bold tracking-tight leading-none md:text-xl xl:text-2xl">
              {selectedContent.healthPlans}
            </p>
          </div>

          <div className="h-64 w-80 bg-[#D3F4FB] border-2 rounded-lg border-[#53DFD1]">
            <img src={broker} className="h-40 mx-20 my-4" alt="" />
            <p className="max-w-2xl my-4 text-lg text-center text-[#59D7EE] font-bold tracking-tight leading-none md:text-xl xl:text-2xl">
              {selectedContent.brokers}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
