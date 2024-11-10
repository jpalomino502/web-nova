import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ currentTime }) {
  const [isInServices, setIsInServices] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      const header = document.querySelector("header");

      if (servicesSection && header) {
        const sectionTop = servicesSection.offsetTop;
        const sectionBottom = sectionTop + servicesSection.offsetHeight;
        const headerHeight = header.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition + headerHeight > sectionTop && scrollPosition < sectionBottom) {
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
    <header className={`fixed w-full top-0 p-4 flex justify-between items-center text-sm z-50 bg-opacity-10 backdrop-blur-lg ${isInServices ? 'text-white' : 'text-black'}`}>
      <div className="flex flex-col items-start gap-1">
        <span className={`text-lg font-bold ${isInServices ? 'text-white' : 'text-black'}`}>WebNova</span>
        <span className={`text-sm ${isInServices ? 'text-white' : ''}`}>{currentTime}</span>
      </div>

      <div className="flex items-center gap-6">
        <button
          className={`lg:hidden p-2 ${isInServices ? 'text-white' : 'text-black'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          <a href="#" className={`text-black ${isInServices ? 'text-white' : 'hover:text-gray-900'}`}>PROJECTS</a>
          <a href="#" className={`text-black ${isInServices ? 'text-white' : 'hover:text-gray-900'}`}>ABOUT</a>
          <a href="#" className={`text-black ${isInServices ? 'text-white' : 'hover:text-gray-900'}`}>CONTACT</a>
          <a href="#" className={`text-black ${isInServices ? 'text-white' : 'hover:text-gray-900'} flex items-center gap-1`}>
            BOOK NOW
            <span className="rotate-45">↑</span>
          </a>
        </nav>

        {isMenuOpen && (
          <nav className="absolute top-16 right-4 p-4 shadow-md lg:hidden bg-opacity-60 backdrop-blur-lg rounded-md">
            <a href="#" className={`block text-black ${isInServices ? 'text-white' : 'hover:text-gray-900'}`}>PROJECTS</a>
            <a href="#" className={`block text-black ${isInServices ? 'text-white' : 'hover:text-gray-900'}`}>ABOUT</a>
            <a href="#" className={`block text-black ${isInServices ? 'text-white' : 'hover:text-gray-900'}`}>CONTACT</a>
            <a href="#" className={`block text-black ${isInServices ? 'text-white' : 'hover:text-gray-900'} flex items-center gap-1`}>
              BOOK NOW
              <span className="rotate-45">↑</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
