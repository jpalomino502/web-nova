import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ currentTime }) {
  const [isInServices, setIsInServices] = useState(false);
  const [isInTeam, setIsInTeam] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      const aboutUsSection = document.getElementById("aboutUs");
      const teamSection = document.getElementById("team");
      const header = document.querySelector("header");

      if (servicesSection && aboutUsSection && teamSection && header) {
        const sectionTop = servicesSection.offsetTop;
        const sectionBottom = sectionTop + servicesSection.offsetHeight;
        const aboutUsTop = aboutUsSection.offsetTop;
        const aboutUsBottom = aboutUsTop + aboutUsSection.offsetHeight;
        const teamTop = teamSection.offsetTop;
        const teamBottom = teamTop + teamSection.offsetHeight;
        const headerHeight = header.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition + headerHeight > sectionTop && scrollPosition < sectionBottom) {
          setIsInServices(true);
        } else if (scrollPosition + headerHeight > aboutUsTop && scrollPosition < aboutUsBottom) {
          setIsInServices(true);
        } else if (scrollPosition + headerHeight > teamTop && scrollPosition < teamBottom) {
          setIsInTeam(true);
        } else {
          setIsInServices(false);
          setIsInTeam(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: "services", label: "SERVICIOS" },
    { id: "projects", label: "PROYECTOS" },
    { id: "aboutUs", label: "NOSOTROS" },
    { id: "faqs", label: "FAQS" },
    { id: "team", label: "TEAM" },
    { id: "contact", label: "CONTÁCTANOS AHORA", icon: "↑" },
  ];

  return (
    <>
      <header className={`fixed w-full top-0 p-4 flex justify-between items-center text-sm z-40 bg-opacity-10 backdrop-blur-lg transition-colors duration-300 ${isInServices || isInTeam ? 'text-white' : 'text-black'}`}>
        <div className="flex flex-col items-start gap-1">
          <span className={`text-lg font-bold transition-colors duration-300 ${isInServices || isInTeam ? 'text-white' : 'text-black'}`}>WebNova</span>
          <span className={`text-sm transition-colors duration-300 ${isInServices || isInTeam ? 'text-white' : ''}`}>{currentTime}</span>
        </div>

        <div className="flex items-center gap-6">
          {/* Mostrar el icono solo en móvil y tablet */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors duration-300 ${isInServices || isInTeam ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'} lg:hidden`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 ${isInServices || isInTeam ? 'text-white hover:text-white/80' : 'text-black hover:text-gray-900'} cursor-pointer`}
              >
                {item.label}
                {item.icon && <span className="ml-1 inline-block rotate-45">{item.icon}</span>}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Menú lateral desplegable */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          {menuItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="py-2 px-4 rounded-lg text-lg font-medium transition-colors text-gray-700 hover:bg-[#121212] dark:text-gray-200 dark:hover:bg-[#121212] cursor-pointer"
            >
              {item.label}
              {item.icon && <span className="ml-2 inline-block rotate-45">{item.icon}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
