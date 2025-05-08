'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import TypingAnimation from './TypingAnimation';

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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid lines with glow effect */}
        <div className="absolute inset-0 opacity-15">
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

      {/* Enhanced main content with 3D-like effect */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 text-center -mt-8 md:-mt-12"
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

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl mt-4 text-white/90 font-semibold"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
                  AI Engineer & Full Stack Developer
                </span>
              </motion.div>
            </div>
          </h1>
        </motion.div>

        {/* Enhanced animated typing text with backdrop */}
        <motion.div
          className="mb-12 h-16 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/0 via-[#121212]/50 to-[#121212]/0 blur-sm"></div>
          <TypingAnimation
            text={[
              "Building intelligent systems that transform businesses",
              "Creating custom AI agents for real-world problems",
              "Developing next-generation conversational experiences"
            ]}
            className="text-xl md:text-2xl text-gray-300 font-light relative z-10"
            typingSpeed={40}
          />
        </motion.div>

        {/* Enhanced CTA buttons with 3D effect */}
        <motion.div
          className="flex flex-wrap gap-8 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-tech-blue/50 rounded-xl blur-xl opacity-30 group-hover:opacity-70 transition-opacity"></div>
            <Button
              className="bg-gradient-to-r from-tech-blue to-tech-blue/80 hover:from-tech-blue/90 hover:to-tech-blue/70 text-white px-10 py-7 text-lg font-medium rounded-xl shadow-xl shadow-tech-blue/30 transition-all relative z-10 border border-tech-blue/30"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">✨</span> Explore My Work
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyber-lime/30 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <Button
              variant="outline"
              className="border-2 border-cyber-lime text-cyber-lime hover:bg-cyber-lime/10 px-10 py-7 text-lg font-medium rounded-xl shadow-xl shadow-cyber-lime/20 transition-all backdrop-blur-sm relative z-10"
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
