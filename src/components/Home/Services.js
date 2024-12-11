import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import ImgMain from "../../assets/services/ImgMain.png";
import ImgWebDevelopment from "../../assets/services/ImgWebDevelopment.png";
import ImgDigitalTransformation from "../../assets/services/ImgDigitalTransformation.png";
import ImgPersonalizedStrategies from "../../assets/services/ImgPersonalizedStrategies.png";
import ImgFutureSolutions from "../../assets/services/ImgFutureSolutions.png";

export default function Services() {
  const containerRef = useRef(null);

  const services = [
    {
      title: "Desarrollo Web",
      description:
        "Creamos sitios web interactivos que ofrecen una experiencia fluida y atractiva, facilitando la conexión entre tu marca y los usuarios.",
      image: ImgWebDevelopment,
    },
    {
      title: "Transformación Digital",
      description:
        "Implementamos tecnologías avanzadas que optimizan tus operaciones, ayudando a tu empresa a adaptarse rápidamente a los cambios del mercado.",
      image: ImgDigitalTransformation,
    },
    {
      title: "Estrategias Personalizadas",
      description:
        "Diseñamos soluciones a medida, basadas en un análisis profundo de tu negocio, que maximizan el impacto de tu estrategia digital.",
      image: ImgPersonalizedStrategies,
    },
    {
      title: "Soluciones Futuristas",
      description:
        "Utilizamos herramientas y tecnologías emergentes para desarrollar soluciones que preparan tu negocio para los desafíos del futuro.",
      image: ImgFutureSolutions,
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-black"
    >
      <div className="absolute top-0 left-[5vw] w-px h-full bg-white/20"></div>

      <div className="h-screen flex flex-col lg:flex-row sm:pt-40 items-center justify-center px-6 lg:px-[10vw] space-y-10 lg:space-y-0 lg:space-x-10 text-center sm:text-left">
        <div className="max-w-2xl">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Creamos soluciones digitales que inspiran el futuro
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            En Webnova, nuestra misión es transformar tu visión en experiencias digitales que no
            solo resuelven problemas, sino que abren nuevas posibilidades.
          </motion.p>
        </div>
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={ImgMain}
            alt="Inspiramos el futuro"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Service Sections */}
      {services.map((service) => (
        <div
          key={service.title}
          className="h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-[10vw] space-y-10 lg:space-y-0 lg:space-x-10 text-center sm:text-left"
        >
          <div className="max-w-2xl">
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {service.description}
            </motion.p>
          </div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
}
