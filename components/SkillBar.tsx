'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export default function SkillBar({ 
  name, 
  percentage, 
  color = '#2D9CDB', 
  delay = 0 
}: SkillBarProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        delay,
        ease: [0.17, 0.67, 0.83, 0.97]
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay + 1,
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="mb-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <motion.span
          variants={numberVariants}
          initial="hidden"
          animate={controls}
          className="text-gray-400"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2 bg-[#252525] rounded-full overflow-hidden relative">
        <motion.div
          variants={barVariants}
          initial="hidden"
          animate={controls}
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${color} 0%, ${color}99 100%)`,
            boxShadow: hovered ? `0 0 10px ${color}` : 'none',
            transition: 'box-shadow 0.3s ease'
          }}
        />
        
        {/* Animated particles on the bar */}
        {hovered && (
          <>
            <motion.div
              className="absolute top-0 h-full w-2 rounded-full bg-white"
              animate={{
                x: ['0%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                x: `${percentage - 2}%`
              }}
            />
            <motion.div
              className="absolute top-0 h-full w-1 rounded-full bg-white"
              animate={{
                x: ['0%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
                delay: 0.5
              }}
              style={{
                x: `${percentage - 1}%`
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
