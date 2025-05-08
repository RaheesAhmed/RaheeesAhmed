'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export default function AnimatedText({ text, className = '', once = false, delay = 0 }: AnimatedTextProps) {
  const words = text.split(' ');

  // Variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2 inline-block"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface AnimatedCharactersProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function AnimatedCharacters({ text, className = '', once = false, delay = 0 }: AnimatedCharactersProps) {
  // Split text into an array of characters
  const characters = Array.from(text);

  // Variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  // Variants for each character
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {characters.map((character, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
        >
          {character === ' ' ? '\u00A0' : character}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function AnimatedTitle({ children, className = '', once = false, delay = 0 }: AnimatedTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.17, 0.55, 0.55, 1] 
      }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
