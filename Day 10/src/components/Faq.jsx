import React, { useState } from 'react';
import '../assets/css/Faq.css';

function Faq() {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const faqData = [
    {
      question: 'What is an electric vehicle (EV)?',
      answer:
        'An electric vehicle, or EV, is a type of vehicle that is powered by electricity instead of gasoline or diesel. It uses one or more electric motors for propulsion and relies on rechargeable batteries to store and provide energy.',
    },
    {
      question: 'How far can I drive on a single charge?',
      answer:
        'The range of an EV varies depending on the make and model. Generally, EVs have a range between 100 to 300 miles (160 to 480 kilometers) on a single charge. High-end models may offer even greater range.',
    },
    {
      question: 'How long does it take to charge an EV?',
      answer:
        'Charging times vary based on the charging equipment and the vehicle\'s battery size. A standard home charger (Level 1) can take anywhere from 8 to 20 hours for a full charge. Faster Level 2 chargers, typically found in public charging stations, can charge an EV in 4 to 8 hours. DC fast chargers can provide an 80% charge in as little as 30 minutes.',
    },
    {
      question: 'What types of charging connectors are there for EVs?',
      answer:
        'There are three main types of charging connectors: Type 1 (SAE J1772), Type 2 (Mennekes), and Type 3 (Scame). The type of connector your EV uses depends on the region and the manufacturer.',
    },
    {
      question: 'Can I charge my EV at home?',
      answer:
        'Yes, most EV owners charge their vehicles at home using a Level 1 or Level 2 charger. All you need is a dedicated charging outlet and the appropriate charging equipment. Many EVs come with a portable Level 1 charger that can be plugged into a standard household outlet.',
    },
    {
      question: 'Are there public charging stations for EVs?',
      answer:
        'Yes, there is a growing network of public charging stations in many regions. You can find them at shopping centers, parking lots, and along highways. Various apps and websites can help you locate nearby charging stations and check their availability.',
    },
    {
      question: 'How much does it cost to charge an EV?',
      answer:
        'Charging costs vary depending on your location, electricity rates, and the efficiency of your EV. On average, it\'s cheaper to charge an EV than to fuel a gasoline-powered vehicle. Some public charging stations are free, while others may require a fee or a subscription.',
    },
    {
      question: 'Are there government incentives for purchasing an EV?',
      answer:
        'Many governments offer incentives to encourage the adoption of EVs, such as tax credits, rebates, and reduced registration fees. These incentives can vary by region, so it\'s essential to check with your local government for available programs.',
    },
    {
      question: 'How often do I need to replace the EV battery, and how much does it cost?',
      answer:
        'EV batteries are designed to last for many years, typically well over a decade. The cost of replacing an EV battery can vary widely depending on the make and model, but it\'s essential to note that battery technology is improving, which may lead to lower replacement costs in the future.',
    },
    {
      question: 'Are EVs better for the environment?',
      answer:
        'EVs produce zero tailpipe emissions, making them a cleaner option compared to traditional internal combustion engine vehicles. However, the environmental impact depends on factors like the source of electricity generation in your area. In regions with a high percentage of renewable energy, EVs have a more substantial environmental benefit.',
    },
  ];

  const toggleQuestion = (index) => {
    if (activeQuestions.includes(index)) {
      setActiveQuestions(activeQuestions.filter((item) => item !== index));
    } else {
      setActiveQuestions([...activeQuestions, index]);
    }
  };

  return (
    <div className='div1'>
      <h1>FAQ</h1>
      <ul className="faq-list">
        {faqData.map((faq, index) => (
          <li key={index} className="faq-item">
            <div
              className={`faq-question ${activeQuestions.includes(index) ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
            </div>
            {activeQuestions.includes(index) && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
