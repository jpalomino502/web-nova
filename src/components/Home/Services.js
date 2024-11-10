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

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 0, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 0.9, 0.8, 0.7]);

  const services = [
    {
      title: "Desarrollo Web",
      description:
        "Creamos experiencias digitales únicas, que conectan a las personas con tu marca de manera significativa.",
      image: ImgWebDevelopment,
    },
    {
      title: "Transformación Digital",
      description:
        "Impulsamos tu empresa hacia el futuro con soluciones digitales innovadoras que optimizan cada proceso.",
      image: ImgDigitalTransformation,
    },
    {
      title: "Estrategias Personalizadas",
      description:
        "Cada negocio es único, y nuestras soluciones están diseñadas para potenciar tu visión con precisión y creatividad.",
      image: ImgPersonalizedStrategies,
    },
    {
      title: "Soluciones Futuristas",
      description:
        "Estamos comprometidos a diseñar soluciones que marquen la diferencia, allanando el camino hacia el éxito.",
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
      className="relative min-h-[300vh] bg-gradient-to-br from-[#0f0326] via-[#1f0147] to-[#2a015f] overflow-hidden"
    >
      <div className="services-background"></div>

      <div className="absolute top-0 left-[5vw] w-px h-full bg-white/20"></div>

      <motion.div
        className="sticky top-0 h-screen flex flex-col lg:flex-row items-center px-6 lg:px-[10vw] space-y-10 lg:space-x-10"
        style={{ opacity, scale }}
      >
        <div className="max-w-2xl z-10 text-left lg:text-left mt-[10rem] lg:mt-0">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            variants={textVariants}
          >
            Creamos soluciones digitales que inspiran el futuro
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
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
          className="sticky top-0 h-screen flex flex-col lg:flex-row items-center px-6 lg:px-[10vw] space-y-10 lg:space-x-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }}
          variants={textVariants}
        >
          <div className="max-w-2xl z-10 text-center lg:text-left">
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
