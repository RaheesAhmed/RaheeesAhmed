'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaCode, FaRobot, FaServer, FaDatabase, FaBrain } from "react-icons/fa";
import TypingAnimation from './TypingAnimation';
import ParticleBackground from './ParticleBackground';
import dynamic from 'next/dynamic';

// Dynamically import components that use browser APIs with no SSR
// Temporarily commented out until Three.js issues are fixed
/*
const NeuralNetworkModel = dynamic(
  () => import('./NeuralNetworkModel'),
  { ssr: false, loading: () => <div className="w-full h-full"></div> }
);
*/

const CodeRain = dynamic(
  () => import('./CodeRain'),
  { ssr: false, loading: () => <div className="w-full h-full"></div> }
);

// Terminal effect removed in favor of tech skills showcase

export default function NewHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate distance from center (normalized)
      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
      });
    };

    sequence();
  }, [controls]);

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center mt-8 md:mt-12"
      style={{
        background: '#1F1F1F'
      }}
    >
      {/* Code Rain Background Effect */}
      <CodeRain className="opacity-30" />

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid lines with glow effect */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="h-full w-full"
            style={{
              backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px']
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </div>

        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hero-hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <polygon points="24.8,0 37.3,7.3 37.3,21.7 24.8,29 12.3,21.7 12.3,7.3" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <polygon points="0,22 12.5,29.2 12.5,43.7 0,50.9 -12.5,43.7 -12.5,29.2" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <polygon points="49.6,22 62.1,29.2 62.1,43.7 49.6,50.9 37.1,43.7 37.1,29.2" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-hexagons)"/>
          </svg>
        </div>

        {/* Enhanced animated gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-tech-blue/25 to-transparent blur-3xl"
          style={{
            top: '15%',
            left: '5%',
            x: mousePosition.x * -40,
            y: mousePosition.y * -40,
            opacity: 0.5
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.5, 0.4],
            rotate: [0, 90]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-r from-cyber-lime/25 to-transparent blur-3xl"
          style={{
            bottom: '5%',
            right: '0%',
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
            opacity: 0.4
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.4, 0.3],
            rotate: [0, -90]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-highlight/35 to-transparent blur-3xl"
          style={{
            top: '55%',
            left: '55%',
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
            opacity: 0.4
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Additional smaller orbs for more dynamic feel */}
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-tech-blue/40 to-cyber-lime/20 blur-3xl"
          style={{
            top: '30%',
            right: '25%',
            x: mousePosition.x * 15,
            y: mousePosition.y * 15,
            opacity: 0.3
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        <motion.div
          className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-r from-highlight/30 to-tech-blue/20 blur-3xl"
          style={{
            bottom: '35%',
            left: '30%',
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
            opacity: 0.3
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      {/* Enhanced floating code snippets with glow effect */}
      <motion.div
        className="absolute top-[15%] left-[12%] w-[320px] opacity-0 hidden md:block"
        style={{ y: y1 }}
        animate={{ opacity: [0, 0.3, 0.25] }}
        transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
      >
        <div className="rounded-xl overflow-hidden backdrop-blur-sm border border-tech-blue/30 shadow-lg shadow-tech-blue/10 p-3 bg-[#121212]/40">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-auto text-[10px] text-gray-400">agent.js</div>
          </div>
          <pre className="text-xs text-tech-blue font-mono">
            <code>{`function createAIAgent(config) {
  const agent = new Agent({
    model: config.model,
    tools: config.tools,
    memory: new VectorMemory()
  });

  return agent.initialize();
}`}</code>
          </pre>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[22%] right-[8%] w-[300px] opacity-0 hidden md:block"
        style={{ y: y2 }}
        animate={{ opacity: [0, 0.35, 0.3] }}
        transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
      >
        <div className="rounded-xl overflow-hidden backdrop-blur-sm border border-cyber-lime/30 shadow-lg shadow-cyber-lime/10 p-3 bg-[#121212]/40">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-auto text-[10px] text-gray-400">chatbot.js</div>
          </div>
          <pre className="text-xs text-cyber-lime font-mono">
            <code>{`const chatbot = {
  async processMessage(input) {
    const embedding = await
      this.embedder.encode(input);

    const context = await
      this.retriever.search(embedding);

    return this.llm.generate({
      prompt: input,
      context
    });
  }
};`}</code>
          </pre>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[55%] left-[58%] w-[280px] opacity-0 hidden md:block"
        style={{ y: y3 }}
        animate={{ opacity: [0, 0.3, 0.25] }}
        transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
      >
        <div className="rounded-xl overflow-hidden backdrop-blur-sm border border-highlight/30 shadow-lg shadow-highlight/10 p-3 bg-[#121212]/40">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-auto text-[10px] text-gray-400">rag.js</div>
          </div>
          <pre className="text-xs text-highlight font-mono">
            <code>{`class RAGSystem {
  constructor() {
    this.vectorDB = new VectorDB();
    this.tokenizer = new Tokenizer();
    this.model = new LLM("gpt-4");
  }

  async query(question) {
    // Implementation
  }
}`}</code>
          </pre>
        </div>
      </motion.div>

      {/* Neural Network Model Placeholder */}
      <motion.div
        className="absolute right-[-100px] top-[-50px] w-[700px] h-[700px] opacity-0 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 2, delay: 1.5 }}
        style={{
          zIndex: 5,
          pointerEvents: 'none',
        }}
      >
        <div className="w-full h-full relative">
          {/* Static neural network visualization */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-tech-blue/30 opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-cyber-lime/30 opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-highlight/30 opacity-30"></div>

          {/* Nodes */}
          <motion.div
            className="absolute top-[30%] left-[20%] w-6 h-6 rounded-full bg-tech-blue/80 shadow-lg shadow-tech-blue/50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute top-[50%] left-[30%] w-5 h-5 rounded-full bg-cyber-lime/80 shadow-lg shadow-cyber-lime/50"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute top-[70%] left-[20%] w-6 h-6 rounded-full bg-tech-blue/80 shadow-lg shadow-tech-blue/50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          ></motion.div>

          <motion.div
            className="absolute top-[40%] left-[50%] w-5 h-5 rounded-full bg-highlight/80 shadow-lg shadow-highlight/50"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          ></motion.div>
          <motion.div
            className="absolute top-[60%] left-[50%] w-5 h-5 rounded-full bg-highlight/80 shadow-lg shadow-highlight/50"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          ></motion.div>

          <motion.div
            className="absolute top-[30%] left-[80%] w-6 h-6 rounded-full bg-cyber-lime/80 shadow-lg shadow-cyber-lime/50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          ></motion.div>
          <motion.div
            className="absolute top-[70%] left-[80%] w-6 h-6 rounded-full bg-cyber-lime/80 shadow-lg shadow-cyber-lime/50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Enhanced main content with 3D-like effect */}
      <motion.div
        className="relative z-20 max-w-6xl mx-auto px-4 text-center -mt-8 md:-mt-12"
        style={{
          opacity,
          perspective: "1000px"
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >


        {/* Enhanced main heading with 3D effect and improved gradient */}
        <motion.div
          className="mb-8"
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            <div className="overflow-hidden mb-2">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-white to-cyber-lime">
                  Rahees Ahmed
                </span>
              </motion.div>
            </div>

           
          </h1>
        </motion.div>

        {/* Simple Tech Skills Showcase - Matching the screenshot */}
        <motion.div
          className="mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/0 via-[#121212]/50 to-[#121212]/0 blur-sm"></div>

          <div className="w-full max-w-3xl mx-auto relative z-10 py-6 px-4">
            {/* Simple title */}
            <motion.div
              className="text-2xl text-white font-medium text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >

            </motion.div>

            {/* Tech skills grid - First row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <motion.div
                className="bg-[#1A1A1A]/60 backdrop-blur-sm p-4 rounded-lg border border-[#333]/30 transition-all flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-3 text-tech-blue"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaRobot size={24} />
                </motion.div>
                <p className="text-center text-tech-blue text-sm font-medium">AI Engineering</p>
              </motion.div>

              <motion.div
                className="bg-[#1A1A1A]/60 backdrop-blur-sm p-4 rounded-lg border border-[#333]/30 transition-all flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-3 text-cyber-lime"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  <FaCode size={24} />
                </motion.div>
                <p className="text-center text-cyber-lime text-sm font-medium">Full Stack Dev</p>
              </motion.div>

              <motion.div
                className="bg-[#1A1A1A]/60 backdrop-blur-sm p-4 rounded-lg border border-[#333]/30 transition-all flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-3 text-highlight"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                >
                  <FaBrain size={24} />
                </motion.div>
                <p className="text-center text-highlight text-sm font-medium">LLM Development</p>
              </motion.div>
            </div>

            {/* Tech skills grid - Second row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                className="bg-[#1A1A1A]/60 backdrop-blur-sm p-4 rounded-lg border border-[#333]/30 transition-all flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-3 text-tech-blue"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  <FaServer size={24} />
                </motion.div>
                <p className="text-center text-tech-blue text-sm font-medium">Backend Systems</p>
              </motion.div>

              <motion.div
                className="bg-[#1A1A1A]/60 backdrop-blur-sm p-4 rounded-lg border border-[#333]/30 transition-all flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-3 text-cyber-lime"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                >
                  <FaDatabase size={24} />
                </motion.div>
                <p className="text-center text-cyber-lime text-sm font-medium">Data Engineering</p>
              </motion.div>

              <motion.div
                className="bg-[#1A1A1A]/60 backdrop-blur-sm p-4 rounded-lg border border-[#333]/30 transition-all flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-3 text-highlight"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.0 }}
                >
                  <FaCode size={24} />
                </motion.div>
                <p className="text-center text-highlight text-sm font-medium">API Development</p>
              </motion.div>
            </div>

            {/* Animated highlight line */}
            <motion.div
              className="w-0 h-1 bg-gradient-to-r from-tech-blue via-cyber-lime to-highlight rounded-full mx-auto mb-6"
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
            />

            {/* Typing animation below skills */}
            <motion.div
              className="text-center h-8 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <TypingAnimation
                text={[
                  "Building intelligent systems that transform businesses",
                  "Creating custom AI agents for real-world problems",
                  "Developing next-generation conversational experiences"
                ]}
                className="text-base text-gray-300 font-light"
                typingSpeed={40}
                eraseDelay={3000}
                eraseSpeed={20}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* CTA buttons matching screenshot */}
        <motion.div
          className="flex flex-wrap gap-8 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Button
              className="bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] text-white px-8 py-6 text-base font-medium rounded-full shadow-lg transition-all relative z-10 border border-[#333]/50"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">✨</span> Explore My Work
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Button
              variant="outline"
              className="border border-cyber-lime text-cyber-lime hover:text-cyber-lime hover:bg-cyber-lime/10 px-8 py-6 text-base font-medium rounded-full shadow-lg transition-all backdrop-blur-sm relative z-10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">👋</span> Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced social links with hover effects */}
        <motion.div
          className="flex gap-8 justify-center mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[
            { icon: <FaGithub size={22} />, href: "https://github.com/raheesahmed", label: "GitHub", color: "#2D9CDB" },
            { icon: <FaLinkedin size={22} />, href: "https://www.linkedin.com/in/raheesahmed/", label: "LinkedIn", color: "#0077B5" },
            { icon: <FaEnvelope size={22} />, href: "mailto:rahesahmed37@gmail.com", label: "Email", color: "#00FFAB" },
            { icon: <FaWhatsapp size={22} />, href: "https://wa.me/923155501381", label: "WhatsApp", color: "#25D366" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-14 h-14 rounded-full flex items-center justify-center relative group overflow-hidden"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-full border border-[#333] group-hover:border-[#555] transition-colors shadow-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F] to-[#252525] rounded-full opacity-100 group-hover:opacity-0 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F] via-[#252525] to-[#1F1F1F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
              <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors" style={{ color: `group-hover:${item.color}` }}>{item.icon}</span>

              {/* Tooltip on hover */}
              <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[-45px] transition-all duration-300 bg-[#1F1F1F] text-white text-xs py-1 px-3 rounded-md shadow-lg">
                {item.label}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced scroll indicator with animation */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center group"
            aria-label="Scroll down"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-3  text-gray-400 group-hover:text-tech-blue transition-colors font-medium tracking-wide">Scroll Down</span>
            <div className="w-8 h-12 rounded-full border-2 border-gray-400 group-hover:border-tech-blue flex items-center justify-center relative transition-colors">
              <motion.div
                className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-tech-blue rounded-full absolute top-2 transition-colors"
                animate={{
                  y: [0, 16, 0],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.6, 1]
                }}
              />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
