import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ currentTime }) {
  const [isInServices, setIsInServices] = useState(false);
  const [isInTeam, setIsInTeam] = useState(false); // Nueva variable de estado para "team"
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      const aboutUsSection = document.getElementById("aboutUs");
      const teamSection = document.getElementById("team"); // Obtener la sección "team"
      const header = document.querySelector("header");
  
      if (servicesSection && aboutUsSection && teamSection && header) {
        const sectionTop = servicesSection.offsetTop;
        const sectionBottom = sectionTop + servicesSection.offsetHeight;
        const aboutUsTop = aboutUsSection.offsetTop;
        const aboutUsBottom = aboutUsTop + aboutUsSection.offsetHeight;
        const teamTop = teamSection.offsetTop; // Posición de la sección "team"
        const teamBottom = teamTop + teamSection.offsetHeight; // Altura de la sección "team"
        const headerHeight = header.offsetHeight;
        const scrollPosition = window.scrollY;
  
        // Cambiar el estado según la posición del scroll
        if (scrollPosition + headerHeight > sectionTop && scrollPosition < sectionBottom) {
          setIsInServices(true);
        } else if (scrollPosition + headerHeight > aboutUsTop && scrollPosition < aboutUsBottom) {
          setIsInServices(true); 
        } else if (scrollPosition + headerHeight > teamTop && scrollPosition < teamBottom) { // Verificar si estamos en la sección "team"
          setIsInTeam(true); // Activar "team"
        } else {
          setIsInServices(false);
          setIsInTeam(false); // Desactivar "team" si no estamos en esa sección
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 p-4 flex justify-between items-center text-sm z-50 bg-opacity-10 backdrop-blur-lg ${isInServices || isInTeam ? 'text-white' : 'text-black'}`}>
      <div className="flex flex-col items-start gap-1">
        <span className={`text-lg font-bold ${isInServices || isInTeam ? 'text-white' : 'text-black'}`}>WebNova</span>
        <span className={`text-sm ${isInServices || isInTeam ? 'text-white' : ''}`}>{currentTime}</span>
      </div>

      <div className="flex items-center gap-6">
        <button
          className={`lg:hidden p-2 ${isInServices || isInTeam ? 'text-white' : 'text-black'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        <nav className="hidden lg:flex items-center gap-6 ">
          <a href="#services" className={`text-black ${isInServices || isInTeam ? 'text-white' : 'hover:text-gray-900'}`}>SERVICIOS</a>
          <a href="#aboutUs" className={`text-black ${isInServices || isInTeam ? 'text-white' : 'hover:text-gray-900'}`}>NOSOTROS</a>
          <a href="#projects" className={`text-black ${isInServices || isInTeam ? 'text-white' : 'hover:text-gray-900'}`}>PROJECTOS</a>
          <a href="#contact" className={`text-black ${isInServices || isInTeam ? 'text-white' : 'hover:text-gray-900'} flex items-center gap-1`}>
            CONTACTANOS AHORA
            <span className="rotate-45">↑</span>
          </a>
        </nav>

        {isMenuOpen && (
          <nav
            className={`absolute top-20 right-4 p-4 shadow-md lg:hidden rounded-md ${isInServices || isInTeam ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'}`}
          >
            <a
              href="#services"
              className={`block text-black ${isInServices || isInTeam ? 'text-white' : 'hover:text-gray-900'}`}
            >
              SERVICIOS
            </a>
            <a
              href="#aboutUs"
              className={`block text-black ${isInServices || isInTeam ? 'text-white' : 'hover:text-gray-900'}`}
            >
              NOSOTROS
            </a>
            <a
              href="#projects"
              className={`block text-black ${isInServices || isInTeam ? 'text-white' : 'hover:text-gray-900'}`}
            >
              PROJECTOS
            </a>
            <a
              href="#contact"
              className={`block text-black ${isInServices || isInTeam ? 'text-white' : 'hover:text-gray-900'} flex items-center gap-1`}
            >
              CONTACTANOS AHORA
              <span className="rotate-45">↑</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
