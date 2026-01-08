import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import TextReveal from './TextReveal';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Fine Dining Atmosphere" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gold-400 uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold"
        >
          Est. 2024
        </motion.p>
        
        <div className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          <TextReveal text="Taste the" delay={0.4} />
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400 italic">
             <TextReveal text="Extraordinary" delay={0.7} />
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-stone-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A symphony of flavors crafted with passion, served in an ambience of timeless elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Magnetic strength={20}>
            <NavLink
              to="/menu"
              className="px-8 py-3 bg-transparent border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-stone-950 transition-all duration-300 inline-block"
            >
              View Menu
            </NavLink>
          </Magnetic>
          <Magnetic strength={20}>
            <NavLink
              to="/reservations"
              className="px-8 py-3 bg-gold-500 border border-gold-500 text-stone-950 uppercase tracking-widest text-sm hover:bg-transparent hover:text-gold-500 transition-all duration-300 font-bold inline-block"
            >
              Book a Table
            </NavLink>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;