import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import nuestraHistoriaImage from "../../assets/AboutUs/image/nuestraHistoriaImage.png";
import nuestraMisionImage from "../../assets/AboutUs/image/nuestraMisionImage.png";
import nuestroEnfoqueImage from "../../assets/AboutUs/image/nuestroEnfoqueImage.png";

export default function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const secciones = [
    {
      title: "Nuestra Historia",
      description:
        "Somos una startup nacida en Bucaramanga que apuesta por el talento joven y las ideas grandes. Transformamos retos empresariales en soluciones digitales hechas a la medida, combinando creatividad y tecnología para impactar de forma única en cada proyecto.",
      image: nuestraHistoriaImage,
    },
    {
      title: "Nuestra Misión",
      description:
        "Nuestra meta es revolucionar el mundo digital con herramientas creativas que potencien a las marcas. Fusionamos diseño, innovación y tecnología para ofrecer experiencias que no solo destacan, sino que conectan y generan resultados.",
      image: nuestraMisionImage,
    },
    {
      title: "Nuestro Enfoque",
      description:
        "Combinamos arte, estrategia y desarrollo para llevar ideas al siguiente nivel. Desde el diseño UX/UI hasta la creación de contenido, cada proyecto es una oportunidad para crear algo extraordinario y alineado con la visión de nuestros clientes.",
      image: nuestroEnfoqueImage,
    },
  ];  

  const quienesSomosOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4],
    [1, 0.3, 0]
  );
  
  const quienesSomosY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    ["0vh", "-10vh", "-30vh"]
  );
  

  return (
    <div ref={containerRef} id="aboutUs" className="relative bg-black text-white" style={{ height: `${(secciones.length + 1) * 200}vh` }}
>
      {/* Este es el bloque que deseas mantener */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-x-4 sm:inset-x-0 inset-y-0 flex items-center justify-center"
          style={{ opacity: quienesSomosOpacity, y: quienesSomosY }}
        >
          <div className="text-center flex flex-col justify-center h-full">
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter">
              SOMOS
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                CREATIVOS
              </span>
            </h2>
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-zinc-800">
              DIGITALES
            </h2>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-[5vw] w-px h-full bg-white/20"></div>

      {secciones.map((seccion, index) => (
        <ParallaxSection
          key={seccion.title}
          scrollYProgress={scrollYProgress}
          index={index + 1}
          total={secciones.length + 1}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center h-full px-6 lg:px-[10vw] space-y-10 lg:space-y-0 lg:space-x-10 text-center sm:text-left">
            <div className="max-w-2xl z-10">
              <motion.h3
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {seccion.title}
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {seccion.description}
              </motion.p>
            </div>
            <motion.div
              className="w-1/2 lg:w-1/3" 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src={seccion.image}
                alt={seccion.title}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </ParallaxSection>
      ))}
    </div>
  );
}

function ParallaxSection({ children, scrollYProgress, index, total }) {
  const sectionHeight = 2;
  const start = (index * sectionHeight) / (total * sectionHeight);
  const end = ((index + 1) * sectionHeight) / (total * sectionHeight);

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    ["20vh", "0vh", "0vh", "-20vh"]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ opacity, y }}
    >
      {children}
    </motion.div>
  );
}
