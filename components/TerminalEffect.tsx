'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TerminalEffectProps {
  className?: string;
}

const TerminalEffect: React.FC<TerminalEffectProps> = ({ className }) => {
  const [text, setText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [commandMode, setCommandMode] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  const terminalLines = [
    '> whoami',
    'Rahees Ahmed - AI Engineer & Full Stack Developer',
    '> skills --list',
    '- AI/ML Engineering',
    '- LLM Development',
    '- Chatbot Architecture',
    '- Full Stack Development (React, Node.js, Python)',
    '- Cloud Infrastructure',
    '> experience --summary',
    '6+ years building intelligent systems and applications',
    'Specialized in AI-driven technologies and solutions',
    '> projects --featured',
    'Loading featured projects...',
    '> contact --info',
    'Email: rahesahmed37@gmail.com',
    'GitHub: github.com/raheesahmed',
    'LinkedIn: linkedin.com/in/raheesahmed',
    '> ./start_portfolio.sh',
    'Initializing portfolio experience...'
  ];

  // Typing effect
  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        if (currentChar < terminalLines[currentLine].length) {
          setText(prev => {
            const newText = [...prev];
            if (!newText[currentLine]) {
              newText[currentLine] = '';
            }
            newText[currentLine] = terminalLines[currentLine].substring(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(currentChar + 1);
        } else {
          // Line complete, move to next line
          setCurrentChar(0);
          setCurrentLine(currentLine + 1);
          
          // Add delay between command and response
          if (terminalLines[currentLine].startsWith('>')) {
            setCommandMode(false);
            setTimeout(() => {
              setCommandMode(true);
            }, 500);
          }
        }
      }, commandMode ? 50 : 20); // Type commands slower than responses
      
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, commandMode]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [text]);

  return (
    <motion.div 
      className={`bg-[#121212] border border-tech-blue/30 rounded-lg shadow-lg shadow-tech-blue/20 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Terminal header */}
      <div className="bg-[#1A1A1A] px-4 py-2 flex items-center border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs mx-auto">rahees@ai-engineer ~ portfolio</div>
      </div>
      
      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="p-4 font-mono text-sm h-[300px] overflow-y-auto"
        style={{ 
          backgroundColor: 'rgba(18, 18, 18, 0.95)',
          backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(45, 156, 219, 0.08), transparent 25%), radial-gradient(circle at 85% 30%, rgba(0, 255, 171, 0.08), transparent 25%)'
        }}
      >
        {text.map((line, index) => (
          <div key={index} className={`mb-1 ${line.startsWith('>') ? 'text-cyber-lime' : 'text-gray-300'}`}>
            {line}
            {index === currentLine - 1 && !line.startsWith('>') && <span className="text-gray-500 text-xs ml-2">[Done]</span>}
            {index === currentLine && (
              <span className={`inline-block w-2 h-4 ml-1 bg-tech-blue ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            )}
          </div>
        ))}
        {currentLine === terminalLines.length && (
          <div className="text-tech-blue mt-4 animate-pulse">
            Portfolio loaded successfully. Explore below...
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TerminalEffect;
