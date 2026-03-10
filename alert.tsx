import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

export function FadeInView({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  duration = 0.5
}: FadeInViewProps) {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
