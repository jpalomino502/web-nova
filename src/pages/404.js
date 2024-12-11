import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#cfcfcf] text-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full relative">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <h1 className="text-2xl mb-2">¡Ups! Te has quedado sin oxígeno.</h1>
          <p className="text-black text-sm mb-6">
            La página que buscas está más allá de nuestro alcance.
          </p>
          
          <a 
            href="/"
            className="inline-block px-4 py-2 rounded border border-black/20 hover:bg-black/10 transition-colors mb-12"
          >
            Volver al inicio
          </a>

          <div className="relative">
            <div className="text-[180px] font-bold leading-none flex items-center">
              4
              <div className="relative w-[160px] h-[160px]">
                {/* Astronauta */}
                <div className="absolute inset-0 astronaut">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
