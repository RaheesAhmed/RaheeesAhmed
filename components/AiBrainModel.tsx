'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Create a simpler fallback component that doesn't use Three.js
// This avoids SSR issues completely
const SimpleBrainAnimation = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Brain shape with animated gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-tech-blue to-cyber-lime opacity-70 animate-pulse"></div>

        {/* Neural connections */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const x = Math.cos(angle) * 100 + 128;
          const y = Math.sin(angle) * 100 + 128;

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-highlight"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                opacity: 0.7
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          );
        })}

        {/* Central core */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-32 h-32 -ml-16 -mt-16 rounded-full bg-gradient-to-r from-tech-blue to-cyber-lime"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
            borderRadius: ["50%", "40%", "50%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Orbiting particles */}
        {Array.from({ length: 8 }).map((_, i) => {
          const delay = i * 0.5;
          const size = Math.random() * 6 + 4;

          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-highlight"
              style={{ width: size, height: size, marginLeft: -size/2, marginTop: -size/2 }}
              animate={{
                x: [0, Math.cos(i) * 100, 0, -Math.cos(i) * 100, 0],
                y: [0, Math.sin(i) * 100, 0, -Math.sin(i) * 100, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default function AiBrainModel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SimpleBrainAnimation />
    </motion.div>
  );
}
