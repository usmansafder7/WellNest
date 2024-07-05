import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

export const Calculator = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    English: {
      heading: "The burnout calculator",
      description: "How much is burnout costing your organization?",
      employeesLabel: "How many employees do you have?",
      burnoutRateLabel: "Burnout rate",
      costPerPersonLabel: "Cost per person",
      totalBurnoutCost: "Total burnout cost",
      burnoutSource: "Burnout cost is 34% of a disengaged employee’s annual salary",
      salarySource: "Average annual salary is Rs. Rs70,000",
      source: "(source)"
    },
    Urdu: {
      heading: "برن آؤٹ کیلکولیٹر",
      description: "آپ کی تنظیم کو برن آؤٹ کتنی قیمت دے رہا ہے؟",
      employeesLabel: "آپ کے پاس کتنے ملازمین ہیں؟",
      burnoutRateLabel: "برن آؤٹ کی شرح",
      costPerPersonLabel: "ہر فرد کی قیمت",
      totalBurnoutCost: "کل برن آؤٹ لاگت",
      burnoutSource: "برن آؤٹ کی لاگت ایک غیر منسلک ملازم کی سالانہ تنخواہ کا 34% ہے",
      salarySource: "اوسط سالانہ تنخواہ $70,000 ہے",
      source: "(ذریعہ)"
    }
  };

  const selectedContent = content[language];

  const [employees, setEmployees] = useState('');
  const [burnoutRate, setBurnoutRate] = useState('');
  const [costPerPerson, setCostPerPerson] = useState('');

  const calculateBurnoutCost = () => {
    const emp = parseFloat(employees);
    const rate = parseFloat(burnoutRate);
    const cost = parseFloat(costPerPerson);

    if (isNaN(emp) || isNaN(rate) || isNaN(cost)) {
      return 0;
    }

    return emp * rate * cost;
  };

  return (
    <div className="max-md:hidden my-24 py-16 w-full bg-gradient-to-r from-blue-100 to-green-100 p-6 flex items-center justify-center" style={{ background: 'linear-gradient(to right, #FBDD00, #E9A200, #B32800)' }}>
      <div className="bg-white py-16 rounded-lg shadow-lg px-8 w-full max-w-7xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 p-4">
          <h1 className="text-5xl font-bold mb-4">{selectedContent.heading}</h1>
          <p className="text-xl mb-6">{selectedContent.description}</p>
        </div>
        
        <div className="w-full px-2 md:w-2/3 py-4 flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full">
              <label className="block text-sm font-medium mb-1" htmlFor="employees">{selectedContent.employeesLabel}</label>
              <input
                type="number"
                id="employees"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
                className="w-full py-2 px-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1" htmlFor="burnoutRate">{selectedContent.burnoutRateLabel}</label>
              <input
                type="number"
                id="burnoutRate"
                value={burnoutRate}
                onChange={(e) => setBurnoutRate(e.target.value)}
                className="w-full py-2 px-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1" htmlFor="costPerPerson">{selectedContent.costPerPersonLabel}</label>
              <input
                type="number"
                id="costPerPerson"
                value={costPerPerson}
                onChange={(e) => setCostPerPerson(e.target.value)}
                className="w-full py-2 px-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mt-6 w-full">
            <p className="text-lg font-bold">{selectedContent.totalBurnoutCost}</p>
            <div className="bg-gray-100 p-4 rounded-md mt-2">
              <span className="text-xl text-[#B32800] font-semibold">
                ${calculateBurnoutCost().toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-4 w-full text-sm text-gray-600">
            <p>{selectedContent.burnoutSource} <a href="https://github.com/ayeshag7" className="text-blue-600">{selectedContent.source}</a></p>
            <p>{selectedContent.salarySource} <a href="https://github.com/ayeshag7" className="text-blue-600">{selectedContent.source}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};
