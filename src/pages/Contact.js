import React, { useContext } from "react";
import { LanguageContext } from '../context/LanguageContext';
import { EmotionContext } from "../context/EmotionContext";

export const Contact = () => {
  const { language } = useContext(LanguageContext);
  const { emotion } = useContext(EmotionContext);

  const content = {
    English: {
      getInTouch: "Get in touch",
      description: "Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to assist you.",
      phone: "+1 (308) 321 321",
      email: "Info@alphas.com",
      address: "545, Street 11, Block F \n Dean Boulevard, Ohio",
      viewJobs: "View Job Openings",
      enterDetails: "Enter Details",
      fullName: "Full Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      messageLabel: "Message",
      submit: "Submit"
    },
    Urdu: {
      getInTouch: "ہم سے رابطہ کریں",
      description: "ہمارے بارے میں کوئی سوال ہے؟ کیا آپ ہمارے ساتھ شراکت میں دلچسپی رکھتے ہیں؟ کچھ تجاویز ہیں یا صرف ہیلو کہنا چاہتے ہیں؟ بس ہم سے رابطہ کریں۔ ہم آپ کی مدد کے لیے یہاں ہیں۔",
      phone: "+1 (308) 321 321",
      email: "Info@alphas.com",
      address: "545، گلی 11، بلاک F \n ڈین بولیورڈ، اوہائیو",
      viewJobs: "نوکری کے مواقع دیکھیں",
      enterDetails: "تفصیلات درج کریں",
      fullName: "پورا نام",
      emailLabel: "ای میل",
      phoneLabel: "فون",
      messageLabel: "پیغام",
      submit: "جمع کرائیں"
    }
  };

  const selectedContent = content[language];

  return (
    <div className="container mx-auto pt-16 mt-8 mb-24">
      <div className="lg:flex">
        <div className={`xl:w-2/5 lg:w-2/5 ${emotion === "sad" ? "bg-[#59D7EE]" : "bg-red-600"} py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none`}>
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className={`xl:text-4xl text-3xl pb-4 ${emotion === "sad" ? "text-gray-600" : "text-[#FBDD00]"} font-bold playfair-font`}>
              {selectedContent.getInTouch}
            </h1>
            <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4 playfair-font">
              {selectedContent.description}
            </p>
            <div className="flex pb-4 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <p className="pl-4 text-white text-base">{selectedContent.phone}</p>
            </div>
            <div className="flex items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <p className="pl-4 text-white text-base">{selectedContent.email}</p>
            </div>
            <p className="text-lg text-white pt-10 tracking-wide">
              {selectedContent.address.split('\n').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}
            </p>
            <a href="javascript:void(0)">
              <p className="text-white pt-16 font-bold tracking-wide underline">{selectedContent.viewJobs}</p>
            </a>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form id="contact" className="bg-white py-4 px-8 rounded-tr rounded-br">
            <h1 className="text-4xl text-gray-600 font-extrabold mb-6 playfair-font">{selectedContent.enterDetails}</h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    {selectedContent.fullName}
                  </label>
                  <input required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    {selectedContent.emailLabel}
                  </label>
                  <input required id="email" name="email" type="email" className="focus:outline-none focus:border font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    {selectedContent.phoneLabel}
                  </label>
                  <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                  {selectedContent.messageLabel}
                </label>
                <textarea name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border" rows={8} id="message" defaultValue={""} />
              </div>
              <button type="submit" className={`focus:outline-none ${emotion === "sad" ? "bg-[#53DFD1]" : "bg-[#FBDD00]"} hover:transition hover:duration-150 hover:ease-in-out rounded text-white px-8 py-3 text-sm leading-6 font-bold`}>
                {selectedContent.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
