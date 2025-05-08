'use client';

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowingCard({ 
  children, 
  className = '', 
  glowColor = 'rgba(45, 156, 219, 0.6)' // Default to Tech Blue
}: GlowingCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Glow effect */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none"
          style={{
            background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent)`,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 0.8,
            mixBlendMode: 'soft-light'
          }}
        />
      )}

      {/* Border glow */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: isHovered ? `0 0 20px 2px ${glowColor}` : 'none',
          transition: 'box-shadow 0.3s ease-in-out',
          zIndex: 0
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
