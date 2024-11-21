import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './css/Portfolio.css';

export default function Component() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="relative bg-white text-black overflow-hidden">
      {/* Sección principal */}
      <div ref={containerRef} className="min-h-screen relative">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="container mx-auto px-4 relative z-10 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-[12vw] font-bold leading-none tracking-tighter whitespace-nowrap -mx-[10vw]">
                PORTAFOLIO
              </h1>
              <p className="text-xl mt-4 tracking-wide">DISEÑO Y DESARROLLO WEB</p>
              <motion.button
                className="mt-8 px-8 py-3 border-2 border-black text-sm font-semibold hover:bg-black hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VER PROYECTOS
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Proyectos con efecto parallax */}
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>
          <div className="space-y-40">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Proyecto {project}</h3>
                  <p className="text-gray-600 mb-6">
                    Una descripción detallada del proyecto y sus características principales. Incluye
                    tecnologías utilizadas y resultados alcanzados.
                  </p>
                  <motion.button
                    className="px-6 py-2 border-2 border-black text-sm font-semibold hover:bg-black hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Detalles
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="aspect-video bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Proyecto ${project}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
