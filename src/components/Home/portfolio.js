import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import portfolioImage from '../../assets/portfolio/portfolio.png';
import bgImage from '../../assets/portfolio/bgImage.png';
import './css/Portfolio.css';

export default function Component() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-[#f1ede4] z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-start space-y-8 sm:space-y-16 md:space-y-20 pb-16 sm:pb-24 md:pb-32 lg:pb-40">
        <div className="absolute inset-x-0 top-10 flex justify-center z-10">
          <h2
            className="text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[12vw] xl:text-[10vw] textFuent text-black pointer-events-none efectoFuente"
            style={{
              transform: 'rotate(-5deg)',
              whiteSpace: 'nowrap',
              maxWidth: '95%',
            }}
          >
            Portafolio
          </h2>
        </div>

        <div className="flex flex-col items-center mb-16 sm:mb-24 md:mb-32 lg:mb-40 relative z-20">
          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-3/5 xl:w-4/5 h-auto mx-auto transform translate-y-20 sm:translate-y-20 md:translate-y-20 lg:translate-y-70 xl:translate-y-35">
            <img
              src={portfolioImage}
              alt="Portfolio design preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="textFuent text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-black px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 mt-24">
            En nuestra startup, la innovación y la creatividad son el motor que impulsa cada proyecto. 
            Descubre cómo nuestras soluciones están transformando industrias y generando un impacto positivo en el mundo.
          </p>
        </div>

        {/* Carrusel debajo del párrafo */}
        <div className="w-full mt-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
          <Slider {...settings}>
            <div>
              <img
                src="https://via.placeholder.com/600x300"
                alt="Portfolio Item 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x300"
                alt="Portfolio Item 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x300"
                alt="Portfolio Item 3"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x300"
                alt="Portfolio Item 4"
                className="w-full h-auto object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
