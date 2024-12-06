import React, { useState } from 'react';
import "./css/faqs.css";

const faqs = [
  {
    question: "¿Qué servicios ofrece WebNova?",
    answer:
      "WebNova ofrece servicios de diseño y desarrollo web, optimización SEO, marketing digital, y gestión de marcas en línea para ayudarte a destacar en el mundo digital.",
  },
  {
    question: "¿Cómo puede WebNova mejorar mi presencia online?",
    answer:
      "Con estrategias personalizadas, como diseño web profesional, campañas de marketing digital y SEO avanzado, WebNova optimiza tu presencia en línea para atraer más clientes.",
  },
  {
    question: "¿Qué es el diseño web responsivo y por qué es importante?",
    answer:
      "El diseño web responsivo asegura que tu sitio se vea y funcione perfectamente en cualquier dispositivo. Es esencial para mejorar la experiencia del usuario y posicionarte mejor en buscadores.",
  },
  {
    question: "¿Por qué elegir a WebNova para mi proyecto digital?",
    answer:
      "WebNova combina creatividad, tecnología y estrategias efectivas para ofrecer soluciones digitales innovadoras que impulsan tu negocio hacia el éxito.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-[#cfcfcf] flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="hero-background"></div>
      <div className="faq-container w-full max-w-2xl">
        <h2 className="text-3xl font-light mb-8 text-center text-black">FAQs de WebNova</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 overflow-hidden ${activeIndex === index ? 'shadow-md border' : 'border-b'}`}
          >
            <button
              className="w-full p-4 flex justify-between items-center bg-white text-left transition-all duration-300 ease-in-out focus:outline-none hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg transition-transform duration-300">{faq.question}</span>
              <span
                className={`transform transition-transform duration-300 text-2xl ${
                  activeIndex === index ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-4 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
