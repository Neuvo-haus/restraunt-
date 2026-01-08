import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';
import { wrap } from 'framer-motion';

interface VelocityScrollProps {
  text: string;
  baseVelocity?: number;
  className?: string;
}

const VelocityScroll: React.FC<VelocityScrollProps> = ({ text, baseVelocity = 5, className = "" }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden m-0 flex flex-nowrap whitespace-nowrap ${className}`}>
      <motion.div className="flex flex-nowrap gap-8 text-9xl font-bold uppercase" style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="block">{text}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default VelocityScroll;