import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImage from "../../assets/hero.webp"; 
import './css/Hero.css';

export default function Hero() {
  return (
    <main className="relative min-h-screen bg-[#cfcfcf] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="hero-background"></div>
      <div className="absolute top-20 z-20 text-center"> 
        <h1 className="text-[19vw] font-bold leading-none text-black glitch layers" data-text="WEBNOVA">
          <span>WEBNOVA</span>
        </h1>
      </div>
      
      <motion.img
        src={heroImage}
        alt="Web Nova Hero"
        className="z-30 w-[100vw] sm:w-[90vw] md:w-[90vw] lg:w-[70vw] xl:w-[45vw] mx-auto" 
        aria-hidden="true"
        animate={{
          y: ["0%", "-1%", "0%"], 
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between space-x-4">
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="p-3 rounded-full text-black flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown size={24} />
        </motion.button>

        <div className="text-black font-bold text-right max-w-xs md:max-w-md truncate">
          <p>私たちはあなたが見るものだけでなく、</p>
          <p>あなたが感じるものも作り出しています。</p>
        </div>
      </div>
    </main>
  );
}
