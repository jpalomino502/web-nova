import { motion } from "framer-motion";
import { useRef } from "react";

import nuestraHistoriaImage from "../../assets/AboutUs/image/nuestraHistoriaImage.png";
import nuestraMisionImage from "../../assets/AboutUs/image/nuestraMisionImage.png";
import nuestroEnfoqueImage from "../../assets/AboutUs/image/nuestroEnfoqueImage.png";

export default function AboutUs() {
  const containerRef = useRef(null);

  const secciones = [
    {
      title: "Nuestra Historia",
      description:
        "Somos una startup nacida en Bucaramanga que apuesta por el talento joven y las ideas grandes. Transformamos retos empresariales en soluciones digitales hechas a la medida, combinando creatividad y tecnología para impactar de forma única en cada proyecto.",
      image: nuestraHistoriaImage,
      altText: "Imagen que representa la historia de WebNova con enfoque en innovación y creatividad."
    },
    {
      title: "Nuestra Misión",
      description:
        "Nuestra meta es revolucionar el mundo digital con herramientas creativas que potencien a las marcas. Fusionamos diseño, innovación y tecnología para ofrecer experiencias que no solo destacan, sino que conectan y generan resultados.",
      image: nuestraMisionImage,
      altText: "Imagen representativa de la misión de WebNova enfocada en la transformación digital."
    },
    {
      title: "Nuestro Enfoque",
      description:
        "Combinamos arte, estrategia y desarrollo para llevar ideas al siguiente nivel. Desde el diseño UX/UI hasta la creación de contenido, cada proyecto es una oportunidad para crear algo extraordinario y alineado con la visión de nuestros clientes.",
      image: nuestroEnfoqueImage,
      altText: "Imagen que describe el enfoque creativo y estratégico de WebNova en el desarrollo digital."
    },
  ];

  return (
    <div ref={containerRef} id="aboutUs" className="relative bg-black text-white">
      {/* Encabezado Principal */}
      <header>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center flex flex-col justify-center h-full">
            <motion.h1
              className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              SOMOS
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                CREATIVOS
              </span>
            </motion.h1>
            <motion.h2
              className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              DIGITALES
            </motion.h2>
          </div>
        </div>
      </header>

      {/* Línea decorativa */}
      <div className="absolute top-0 left-[5vw] w-px h-full bg-white/20"></div>

      {/* Secciones de contenido */}
      {secciones.map((seccion) => (
        <section
          key={seccion.title}
          className="h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-[10vw] space-y-10 lg:space-y-0 lg:space-x-10 text-center sm:text-left"
        >
          <div className="max-w-2xl">
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
              alt={seccion.altText} 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </section>
      ))}
    </div>
  );
}
