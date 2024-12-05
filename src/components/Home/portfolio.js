import React, { useEffect, useState } from "react";
import "./css/Portfolio.css";

export default function Proyecto() {
  const [timeLeft, setTimeLeft] = useState({});

  // Configuración del contador regresivo
  useEffect(() => {
    const targetDate = new Date("2024-12-24T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#f5f5f5] text-black min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="hero-background"></div>

      <h2 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] font-extrabold leading-tight text-center text-black uppercase">
        Grandes Ideas en Camino
      </h2>

      <p className="text-base sm:text-lg lg:text-xl font-medium mt-4 tracking-wide text-center max-w-3xl">
        Preparando algo emocionante, ¡espera por ello!
      </p>

      {/* Contador regresivo */}
      <div className="mt-10 text-lg sm:text-2xl lg:text-3xl font-semibold text-center">
        {timeLeft.days !== undefined ? (
          <p>
            {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes}{" "}
            minutos, {timeLeft.seconds} segundos
          </p>
        ) : (
          <p>¡El proyecto está aquí!</p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 flex items-center justify-center gap-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-black to-gray-700 transform rotate-12 shadow-lg"></div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-700 shadow-lg"></div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-black to-gray-700 transform -rotate-12 shadow-lg"></div>
      </div>
    </div>
  );
}
