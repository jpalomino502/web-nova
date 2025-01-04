import React, { useEffect, useState } from "react";
import "./css/Portfolio.css";

export default function Proyecto() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-24T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  return (
    <div className="relative min-h-screen bg-[#cfcfcf] flex flex-col items-center justify-center overflow-hidden" id="projects">
      <div className="hero-background"></div>

      <h2 className="text-4xl md:text-5xl font-light mb-8 text-center">
        Grandes Ideas en Camino
      </h2>

      <p className="text-lg md:text-xl mb-12 text-center max-w-md">
        Preparando algo emocionante, ¡espera por ello!
      </p>

      <div className="flex space-x-4 md:space-x-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span
              className="text-3xl md:text-4xl font-light"
              aria-label={`${unit}: ${formatTime(value)}`} // Mejora de accesibilidad
            >
              {formatTime(value)}
            </span>
            <span className="text-sm uppercase tracking-wide">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
