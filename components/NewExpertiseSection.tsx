'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiPython,
  SiTailwindcss, SiOpenai, SiTensorflow, SiAmazon,
  SiMongodb, SiPostgresql, SiDocker, SiGithub
} from "react-icons/si";
import { FaBrain, FaRobot, FaServer, FaCode } from "react-icons/fa";

export default function NewExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const expertiseAreas = [
    {
      title: "AI Engineering",
      description: "Building intelligent systems that understand, learn, and adapt to user needs",
      icon: <FaBrain className="text-4xl text-tech-blue" />,
      skills: ["LLM Integration", "RAG Systems", "Fine-tuning", "Vector Databases"],
      delay: 0.1
    },
    {
      title: "Chatbot Development",
      description: "Creating conversational interfaces that provide natural, helpful interactions",
      icon: <FaRobot className="text-4xl text-cyber-lime" />,
      skills: ["WhatsApp Bots", "Web Chat", "Multi-modal", "Context Management"],
      delay: 0.2
    },
    {
      title: "Full Stack Development",
      description: "Crafting end-to-end web applications with modern frameworks and tools",
      icon: <FaCode className="text-4xl text-highlight" />,
      skills: ["React/Next.js", "Node.js", "Python", "Database Design"],
      delay: 0.3
    },
    {
      title: "Cloud Architecture",
      description: "Designing scalable, resilient systems on modern cloud platforms",
      icon: <FaServer className="text-4xl text-tech-blue" />,
      skills: ["AWS", "Docker", "CI/CD", "Microservices"],
      delay: 0.4
    }
  ];

  const techStack = [
    { icon: <SiReact />, name: "React", category: "Frontend", color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", category: "Frontend", color: "#FFFFFF" },
    { icon: <SiNodedotjs />, name: "Node.js", category: "Backend", color: "#339933" },
    { icon: <SiPython />, name: "Python", category: "Backend", color: "#3776AB" },
    { icon: <SiTailwindcss />, name: "Tailwind", category: "Frontend", color: "#06B6D4" },
    { icon: <SiOpenai />, name: "OpenAI", category: "AI", color: "#412991" },
    { icon: <SiTensorflow />, name: "TensorFlow", category: "AI", color: "#FF6F00" },
    { icon: <SiAmazon />, name: "AWS", category: "Cloud", color: "#FF9900" },
    { icon: <SiMongodb />, name: "MongoDB", category: "Database", color: "#47A248" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database", color: "#4169E1" },
    { icon: <SiDocker />, name: "Docker", category: "DevOps", color: "#2496ED" },
    { icon: <SiGithub />, name: "GitHub", category: "DevOps", color: "#FFFFFF" }
  ];

  const skills = [
    { name: "AI Integration", level: 95, color: "#2D9CDB" },
    { name: "Full Stack Development", level: 90, color: "#00FFAB" },
    { name: "Chatbot Development", level: 92, color: "#9B51E0" },
    { name: "Cloud Architecture", level: 85, color: "#2D9CDB" },
    { name: "Database Design", level: 88, color: "#00FFAB" },
    { name: "UI/UX Design", level: 80, color: "#9B51E0" }
  ];

  return (
    <section
      id="expertise"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #121212, #1a1a1a)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#FFFFFF" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="3" fill="#FFFFFF"/>
              <path d="M50,50 L50,0" stroke="#FFFFFF" strokeWidth="0.5"/>
              <path d="M50,50 L100,50" stroke="#FFFFFF" strokeWidth="0.5"/>
              <path d="M50,50 L50,100" stroke="#FFFFFF" strokeWidth="0.5"/>
              <path d="M50,50 L0,50" stroke="#FFFFFF" strokeWidth="0.5"/>
              <circle cx="50" cy="0" r="2" fill="#FFFFFF"/>
              <circle cx="100" cy="50" r="2" fill="#FFFFFF"/>
              <circle cx="50" cy="100" r="2" fill="#FFFFFF"/>
              <circle cx="0" cy="50" r="2" fill="#FFFFFF"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Gradient shapes */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-tech-blue/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyber-lime/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-highlight/30 text-white text-sm font-bold mb-6 border border-highlight/30 shadow-lg shadow-highlight/10"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            What I Do Best
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-highlight to-highlight">Expertise</span> & <span className="text-cyber-lime font-bold">Specializations</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-highlight via-tech-blue to-cyber-lime rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 128, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-2xl border border-[#333] p-8 relative overflow-hidden group shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: area.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1F1F1F] to-[#252525] transform rotate-45 translate-x-12 -translate-y-12 border-b border-[#333]"></div>

              <div className="mb-6 relative">
                <motion.div
                  className="absolute -top-4 -left-4 w-20 h-20 bg-[#1A1A1A] rounded-2xl transform rotate-12 opacity-50 border border-[#333]"
                  animate={{ rotate: [12, -5, 12] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div
                  className="relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >{area.icon}</motion.div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{area.description}</p>

              <div className="space-y-3">
                {area.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-tech-blue"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-cyber-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="inline-block px-3 py-1.5 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-bold mb-4">
              Professional Skills
            </div>
            <h3 className="text-3xl font-bold text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-blue">Technical</span> Expertise
            </h3>
            <div className="w-16 h-1 bg-tech-blue/50 rounded-full mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 bg-[#1A1A1A]/50 rounded-2xl p-8 border border-[#333] shadow-xl">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-bold text-lg">{skill.name}</span>
                  <span className="text-gray-300 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-[#252525] rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full rounded-full relative"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white to-transparent"
                      animate={{
                        opacity: [0, 0.3, 0],
                        left: ['-100%', '100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-2xl border border-[#333] p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-3xl font-bold text-center mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-lime to-cyber-lime">Technologies</span> I Work With
            </h3>
            <div className="w-16 h-1 bg-cyber-lime/50 rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 bg-[#1A1A1A] border border-[#333] relative overflow-hidden group shadow-md"
                  style={{ color: tech.color }}
                >
                  <span className="text-2xl relative z-10 group-hover:scale-110 transition-transform flex items-center justify-center">{tech.icon}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#252525] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-sm font-medium block">{tech.name}</span>
                <span className="text-xs text-gray-500 block">{tech.category}</span>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-tech-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyber-lime/5 rounded-full blur-3xl"></div>
        </motion.div>

        {/* AI Capabilities */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-3xl font-bold text-center mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-highlight to-highlight">AI Capabilities</span>
            </h3>
            <div className="w-16 h-1 bg-highlight/50 rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Leveraging cutting-edge AI technologies to build intelligent systems that solve real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "LLM Integration",
                description: "Seamlessly integrating large language models into applications",
                icon: <FaBrain className="text-3xl text-tech-blue" />,
                delay: 0.1
              },
              {
                title: "RAG Systems",
                description: "Building retrieval-augmented generation for domain-specific knowledge",
                icon: <FaServer className="text-3xl text-cyber-lime" />,
                delay: 0.2
              },
              {
                title: "Conversational AI",
                description: "Creating natural, context-aware dialogue systems",
                icon: <FaRobot className="text-3xl text-highlight" />,
                delay: 0.3
              },
              {
                title: "AI Agents",
                description: "Developing autonomous agents that perform complex tasks",
                icon: <FaCode className="text-3xl text-tech-blue" />,
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-xl border border-[#333] p-8 relative overflow-hidden group shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + item.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="bg-[#1A1A1A] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-[#333] shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-xl font-bold mb-4 text-center">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-cyber-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#1A1A1A] to-[#252525] transform rotate-45 translate-x-8 -translate-y-8 border-b border-[#333]"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
