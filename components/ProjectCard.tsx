'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  color?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  category,
  link,
  color = '#2D9CDB'
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative h-full overflow-hidden rounded-2xl group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
        style={{ backgroundImage: `url(${image})` }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F1F1F]/70 to-[#1F1F1F]" />
      
      {/* Glowing border effect */}
      <div 
        className="absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          boxShadow: `0 0 20px ${color}`,
          opacity: hovered ? 0.5 : 0,
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        <div className="mb-4">
          <motion.span 
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
            style={{ backgroundColor: `${color}30`, color }}
          >
            {category}
          </motion.span>
          <motion.h3 
            className="text-2xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-4 line-clamp-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="bg-[#1F1F1F]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-[#333333]"
              style={{ color }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            className="w-full rounded-xl transition-all duration-300"
            style={{ 
              backgroundColor: hovered ? color : '#252525',
              color: hovered ? '#FFFFFF' : color,
              borderColor: color,
              boxShadow: hovered ? `0 0 15px ${color}50` : 'none'
            }}
            onClick={() => window.open(link, '_blank')}
          >
            View Project
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
