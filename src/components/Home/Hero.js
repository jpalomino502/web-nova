import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImage from "../../assets/hero/hero.webp"; 
import './css/Hero.css';

export default function Hero() {
  return (
    <main className="relative min-h-screen bg-[#cfcfcf] flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo de hero */}
      <div className="hero-background"></div>
      
      <div className="absolute top-20 z-20 text-center w-full px-4">
        <h1 className="text-[19vw] font-bold leading-none text-black glitch layers" data-text="WEBNOVA">
          <span>WEBNOVA</span>
        </h1>
      </div>
      
      <motion.img
        src={heroImage}
        alt="Web Nova Hero"
        className="z-30 w-[100vw] sm:w-[90vw] md:w-[90vw] lg:w-[70vw] xl:w-[45vw] 2xl:w-[35vw] mx-auto"
        aria-label="Web Nova Hero Image"
        loading="lazy"
        animate={{
          y: ["0%", "-1%", "0%"], 
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </main>
  );
}
