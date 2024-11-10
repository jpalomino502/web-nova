import { useState, useEffect } from "react";

export default function Header({ currentTime }) {
  const [isInServices, setIsInServices] = useState(false);

  // Detectar cuando estamos en la sección "Services"
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const sectionTop = servicesSection.offsetTop;
        const sectionBottom = sectionTop + servicesSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          setIsInServices(true);
        } else {
          setIsInServices(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 p-4 flex justify-between items-center text-sm z-50">
      <div className="flex items-center gap-2">
        {/* Cambiar el color del texto del currentTime cuando se está en "Services" */}
        <span className={`text-black ${isInServices ? 'text-[#cfcfcf]' : ''}`}>{currentTime}</span>
      </div>

      <nav className="flex items-center gap-6">
        <a href="#" className={`text-black ${isInServices ? 'text-[#cfcfcf]' : 'hover:text-gray-900'}`}>PROJECTS</a>
        <a href="#" className={`text-black ${isInServices ? 'text-[#cfcfcf]' : 'hover:text-gray-900'}`}>ABOUT</a>
        <a href="#" className={`text-black ${isInServices ? 'text-[#cfcfcf]' : 'hover:text-gray-900'}`}>CONTACT</a>
        <a href="#" className={`text-black ${isInServices ? 'text-[#cfcfcf]' : 'hover:text-gray-900'} flex items-center gap-1`}>
          BOOK NOW
          <span className="rotate-45">↑</span>
        </a>
      </nav>
    </header>
  );
}
