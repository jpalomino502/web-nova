import React, { useState } from 'react';
import "./css/Cta.css";

export default function Cta() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', { email, message });
    setEmail('');
    setMessage('');
  };

  return (
    <div className="relative min-h-screen bg-[#cfcfcf] flex flex-col items-center justify-center overflow-hidden px-4 pt-8 pb-8 sm:pt-16 sm:pb-16" id='contact'>
      <div className="hero-background"></div>
      <div className="faq-container w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 bg-black text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">ÚNETE A NUESTRA VISIÓN</h2>
              <p className="mb-6">Sé parte de una comunidad innovadora y recibe actualizaciones exclusivas.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#cfcfcf] flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Acceso a contenido exclusivo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#cfcfcf] flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span>Oportunidades de networking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#cfcfcf] flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <span>Primicia en nuevos proyectos</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">CONTÁCTANOS</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  CORREO ELECTRÓNICO
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-gray-900"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  MENSAJE
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-gray-900 resize-none"
                  placeholder="Tu mensaje aquí..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#cfcfcf] text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
        <div className="bg-black text-white py-4 px-8 text-center">
          <p className="text-sm">
            Al suscribirte, aceptas recibir correos electrónicos de nuestra empresa. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
}
