import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import './css/Services.css';

import ImgMain from "../../assets/services/ImgMain.png";
import ImgWebDevelopment from "../../assets/services/ImgWebDevelopment.png";
import ImgDigitalTransformation from "../../assets/services/ImgDigitalTransformation.png";
import ImgPersonalizedStrategies from "../../assets/services/ImgPersonalizedStrategies.png";
import ImgFutureSolutions from "../../assets/services/ImgFutureSolutions.png";

export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1, 1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1, 1, 0.95, 0.9]);

  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web interactivos que ofrecen una experiencia fluida y atractiva, facilitando la conexión entre tu marca y los usuarios.",
      image: ImgWebDevelopment,
    },
    {
      title: "Transformación Digital",
      description: "Implementamos tecnologías avanzadas que optimizan tus operaciones, ayudando a tu empresa a adaptarse rápidamente a los cambios del mercado.",
      image: ImgDigitalTransformation,
    },
    {
      title: "Estrategias Personalizadas",
      description: "Diseñamos soluciones a medida, basadas en un análisis profundo de tu negocio, que maximizan el impacto de tu estrategia digital.",
      image: ImgPersonalizedStrategies,
    },
    {
      title: "Soluciones Futuristas",
      description: "Utilizamos herramientas y tecnologías emergentes para desarrollar soluciones que preparan tu negocio para los desafíos del futuro.",
      image: ImgFutureSolutions,
    },
  ];
  

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative min-h-[300vh] bg-black overflow-hidden"
    >
      <div className="services-background"></div>

      <div className="absolute top-[10vh] left-[5vw] w-px h-full bg-white/20"></div>

      <motion.div
        className="sticky top-0 h-screen flex flex-col lg:flex-row items-center mServices px-6 lg:px-[10vw] space-y-10 lg:space-x-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        variants={textVariants}
      >
        <div className="max-w-2xl z-10 text-left lg:text-left mt-[10rem] lg:mt-0">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={textVariants}
          >
            Creamos soluciones digitales que inspiran el futuro
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={textVariants}
          >
            En Webnova, nuestra misión es transformar tu visión en experiencias digitales que no
            solo resuelven problemas, sino que abren nuevas posibilidades.
          </motion.p>
          <motion.button
            className="group flex items-center space-x-2 bg-transparent border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Conoce más</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <motion.img
          src={ImgMain}
          alt="Inspiramos el futuro"
          className="w-full lg:w-full h-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {services.map((service, index) => (
        <motion.div
          key={service.title}
          className="sticky top-0 h-screen flex flex-col lg:flex-row items-center px-6 lg:px-[10vw] mt-[0rem] space-y-10 lg:space-x-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }} 
          variants={textVariants}
        >
          <div className="max-w-2xl z-10 lg:text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6">{service.description}</p>
            <motion.button
              className="group flex items-center space-x-2 bg-transparent border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explorar {service.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full lg:w-full h-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      ))}
    </section>
  );
}
