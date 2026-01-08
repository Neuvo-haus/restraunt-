import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Tilt from '../components/Tilt';
import PageTransition from '../components/PageTransition';

const IMAGES = [
  "https://picsum.photos/id/292/800/600",
  "https://picsum.photos/id/425/600/800",
  "https://picsum.photos/id/431/800/800",
  "https://picsum.photos/id/365/800/600",
  "https://picsum.photos/id/1080/600/800",
  "https://picsum.photos/id/1060/800/800",
];

const Gallery: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Atmosphere" title="Gallery" />

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {IMAGES.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="break-inside-avoid"
              >
                <Tilt className="relative group overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="text-white font-serif italic text-lg tracking-wider">Lumière</span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;