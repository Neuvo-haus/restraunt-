import React from 'react';
import { motion } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const ImageReveal: React.FC<ImageRevealProps> = ({ src, alt, className = "", aspectRatio = "aspect-[3/4]" }) => {
  return (
    <div className={`relative overflow-hidden ${className} ${aspectRatio}`}>
      {/* The Image scaling down */}
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.4 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-full object-cover"
      />
      
      {/* The Curtain Overlay */}
      <motion.div
        initial={{ height: "100%" }}
        whileInView={{ height: "0%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 bg-stone-200 dark:bg-stone-900 z-10"
      />
    </div>
  );
};

export default ImageReveal;