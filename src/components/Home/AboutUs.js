"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nuestraHistoriaImage from "../../assets/services/ImgMain.png";
import nuestraMisionImage from "../../assets/services/ImgMain.png";
import nuestroEnfoqueImage from "../../assets/services/ImgMain.png";
import carlosImage from "../../assets/services/ImgMain.png";
import anaImage from "../../assets/services/ImgMain.png";
import miguelImage from "../../assets/services/ImgMain.png";
import lauraImage from "../../assets/services/ImgMain.png";

export default function AboutUs() {
  const containerRef = useRef(null);

  const teamMembers = [
    {
      name: "Carlos Martinez",
      specialties: "Frontend, UI/UX, Motion Design",
      image: carlosImage,
      instagram: "@carlosm.dev",
    },
    {
      name: "Ana Silva",
      specialties: "Backend, Cloud Architecture, DevOps",
      image: anaImage,
      instagram: "@anasilva.tech",
    },
    {
      name: "Miguel Torres",
      specialties: "Full Stack, Mobile Development, AI",
      image: miguelImage,
      instagram: "@miguelt.code",
    },
    {
      name: "Laura Ruiz",
      specialties: "Product Design, Branding, Animation",
      image: lauraImage,
      instagram: "@lauraruiz.design",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const quienesSomosOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [1, 1, 0]
  );
  const quienesSomosY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [0, 0, -250]
  );

  const nuestraHistoriaOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const nuestraHistoriaY = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [250, 0, -250]
  );

  const nuestraMisionOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const nuestraMisionY = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [250, 0, -250]
  );

  const nuestroEnfoqueOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const nuestroEnfoqueY = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [250, 0, -250]
  );

  const nuestroEquipoOpacity = useTransform(
    scrollYProgress,
    [0.9, 1, 1],
    [0, 1, 1]
  );
  const nuestroEquipoY = useTransform(
    scrollYProgress,
    [0.9, 1, 1],
    [250, 0, 0]
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[1000vh] bg-black text-white"
    >
      <div className="absolute top-0 left-[5vw] w-px h-full bg-white/20"></div>
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

        {/* Nuestra Historia Section */}
        <motion.div
          className="absolute inset-x-4 sm:inset-x-0 inset-y-0 flex items-center justify-center my-8 px-4"
          style={{ opacity: nuestraHistoriaOpacity, y: nuestraHistoriaY }}
        >
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center h-full gap-8">
            <motion.div
              className="relative h-64 sm:h-80 w-full max-w-md overflow-hidden rounded-lg order-2 md:order-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={nuestraHistoriaImage}
                alt="Nuestra Historia"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="text-center md:text-left w-full max-w-lg order-1 md:order-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 tracking-tight">
                NUESTRA HISTORIA
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 sm:mb-12">
                Webnova nació de la visión de dos emprendedores, Joseph Palomino
                y David Chia, quienes unieron su pasión por la tecnología y el
                diseño para crear soluciones digitales innovadoras. Desde
                nuestra fundación, nos hemos enfocado en transformar ideas en
                experiencias web excepcionales, siempre a la vanguardia de la
                tecnología.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nuestra Misión Section */}
        <motion.div
          className="absolute inset-x-4 sm:inset-x-0 inset-y-0 flex items-center justify-center my-8 px-4"
          style={{ opacity: nuestraMisionOpacity, y: nuestraMisionY }}
        >
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center h-full gap-8">
            <motion.div
              className="relative h-64 sm:h-80 w-full max-w-md overflow-hidden rounded-lg order-2 md:order-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={nuestraMisionImage}
                alt="Nuestra Misión"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="text-center md:text-left w-full max-w-lg order-1 md:order-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 tracking-tight">
                NUESTRA MISIÓN
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 sm:mb-12">
                En Webnova, nuestra misión es liderar el camino hacia soluciones
                digitales personalizadas que impulsen el éxito de nuestros
                clientes. Creemos en la fusión de creatividad, tecnología y
                diseño para construir experiencias web que hagan crecer marcas y
                empresas.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nuestro Enfoque Section */}
        <motion.div
          className="absolute inset-x-4 sm:inset-x-0 inset-y-0 flex items-center justify-center my-8 px-4"
          style={{ opacity: nuestroEnfoqueOpacity, y: nuestroEnfoqueY }}
        >
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center h-full gap-8">
            <motion.div
              className="relative h-64 sm:h-80 w-full max-w-md overflow-hidden rounded-lg order-2 md:order-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={nuestroEnfoqueImage}
                alt="Nuestro Enfoque"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="text-center md:text-left w-full max-w-lg order-1 md:order-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 tracking-tight">
                NUESTRO ENFOQUE
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 sm:mb-12">
                En Webnova, nuestro enfoque se basa en la combinación de
                dirección de arte, consultoría creativa, diseño UX/UI,
                desarrollo web y creación de contenido. Trabajamos de cerca con
                cada cliente para ofrecer soluciones digitales que reflejan su
                visión y les permiten destacar en el mundo digital.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nuestro Equipo Section with Carousel */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: nuestroEquipoOpacity, y: nuestroEquipoY }}
        >
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 tracking-tight text-center">
              NUESTRO EQUIPO
            </h2>
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center px-4">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full mb-4 mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    importAttachment="snippet-EdzyBonlnI0FPosMDn2vKyD1AdR3kH.txt"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 mb-2">
                    {member.specialties}
                  </p>
                  <p className="text-sm sm:text-base text-pink-500">
                    {member.instagram}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
