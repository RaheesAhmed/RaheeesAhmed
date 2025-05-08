'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  githubLink: string;
  color: string;
  featured: boolean;
}

export default function NewProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Giggle - Freelance Marketplace",
      description: "A modern freelance marketplace with lower fees (10% vs industry 20%+), secure payments via Stripe, and real-time communication between freelancers and clients.",
      image: "/giggle-project.jpg",
      technologies: ["Next.js 15", "Tailwind 4", "Supabase", "Stripe"],
      category: "Full Stack",
      link: "https://giggle-v1.vercel.app/",
      githubLink: "https://github.com/raheesahmed/giggle",
      color: "#6c63ff", // Giggle Purple
      featured: true
    },
    {
      id: 2,
      title: "Fit-Mind AI Chatbot",
      description: "A comprehensive AI-powered fitness assistant with advanced NLP capabilities, document handling, and WhatsApp integration for personalized workout plans.",
      image: "/project1.jpg",
      technologies: ["Next.js", "OpenAI", "LangChain", "WhatsApp API"],
      category: "AI Chatbot",
      link: "https://togatherfitmore.com",
      githubLink: "https://github.com/RaheesAhmed/togatherfitmore-chatbot",
      color: "#2D9CDB",
      featured: true
    },
    {
      id: 3,
      title: "Upcraft",
      description: "AI-powered tool for generating tailored proposals and job descriptions for Upwork freelancers, helping them win more clients with less effort.",
      image: "/project2.jpg",
      technologies: ["Next.js", "Tailwind", "Clerk", "Prisma"],
      category: "AI Content",
      link: "https://upcraft.vercel.app",
      githubLink: "https://github.com/raheesahmed/upcraft",
      color: "#00FFAB",
      featured: true
    },
    {
      id: 4,
      title: "MultiPDF Chat",
      description: "An AI-powered application that allows users to chat with multiple PDF documents, extracting insights and answering questions based on document content.",
      image: "/project3.jpg",
      technologies: ["Next.js", "OpenAI", "LangChain", "Supabase"],
      category: "Document AI",
      link: "https://multipdf-chat.vercel.app",
      githubLink: "https://github.com/RaheesAhmed/chat-with-pdfs",
      color: "#9B51E0",
      featured: true
    },
    {
      id: 5,
      title: "Personal WhatsApp Assistant",
      description: "A customizable WhatsApp bot that integrates with LangChain and OpenAI for intelligent responses to messages and automated tasks.",
      image: "/project4.jpg",
      technologies: ["Node.js", "WhatsApp Web", "LangChain", "OpenAI"],
      category: "AI Chatbot",
      link: "https://whatsapp-assistant.vercel.app",
      githubLink: "https://github.com/RaheesAhmed/Personal-WhatsApp-Assistant",
      color: "#2D9CDB",
      featured: true
    },
    {
      id: 6,
      title: "Company Insights Chatbot",
      description: "An AI-powered chatbot that provides insights about companies by analyzing their websites, social media, and other public data sources.",
      image: "/project5.jpg",
      technologies: ["React", "Node.js", "OpenAI", "LangChain"],
      category: "AI Chatbot",
      link: "https://company-insights.vercel.app",
      githubLink: "https://github.com/RaheesAhmed/Company-Insights-Chatbot",
      color: "#00FFAB",
      featured: false
    },
    {
      id: 7,
      title: "RAG with Any URL",
      description: "A Retrieval-Augmented Generation system that can extract information from any URL and answer questions based on the content.",
      image: "/project6.jpg",
      technologies: ["Python", "FastAPI", "OpenAI", "LangChain"],
      category: "Document AI",
      link: "https://rag-with-any-url.vercel.app",
      githubLink: "https://github.com/RaheesAhmed/rag-with-any-url",
      color: "#9B51E0",
      featured: false
    },
    {
      id: 8,
      title: "LeetCode AI Assistant",
      description: "An AI-powered assistant that helps developers solve LeetCode problems by providing hints, explanations, and optimized solutions.",
      image: "/project7.jpg",
      technologies: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
      category: "AI Content",
      link: "https://leetcode-assistant.vercel.app",
      githubLink: "https://github.com/RaheesAhmed/LeetCode-AI-Assistant",
      color: "#2D9CDB",
      featured: false
    },
    {
      id: 9,
      title: "Discord Chatbot",
      description: "A versatile Discord bot with AI capabilities, moderation tools, and custom commands for enhancing server engagement.",
      image: "/project8.jpg",
      technologies: ["Node.js", "Discord.js", "OpenAI", "MongoDB"],
      category: "AI Chatbot",
      link: "https://discord-chatbot.vercel.app",
      githubLink: "https://github.com/RaheesAhmed/Discord-Chatbot",
      color: "#00FFAB",
      featured: false
    }
  ];

  const filterButtons = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI Chatbots', value: 'AI Chatbot' },
    { label: 'Document AI', value: 'Document AI' },
    { label: 'AI Content', value: 'AI Content' },
    { label: 'Full Stack', value: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 mt-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #1a1a1a, #121212)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagon pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <polygon points="24.8,0 37.3,7.3 37.3,21.7 24.8,29 12.3,21.7 12.3,7.3" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <polygon points="0,22 12.5,29.2 12.5,43.7 0,50.9 -12.5,43.7 -12.5,29.2" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <polygon points="49.6,22 62.1,29.2 62.1,43.7 49.6,50.9 37.1,43.7 37.1,29.2" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>

        {/* Gradient shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-lime/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-tech-blue/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            className="inline-block px-3 py-1 rounded-full bg-cyber-lime/20 text-cyber-lime text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured <span className="text-cyber-lime">Projects</span>
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-tech-blue to-cyber-lime rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 80, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filterButtons.map((button, index) => (
            <motion.button
              key={index}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md ${
                activeFilter === button.value
                  ? 'bg-cyber-lime text-[#121212] shadow-cyber-lime/20'
                  : 'bg-[#1F1F1F] text-white hover:bg-[#2A2A2A] border border-[#333]'
              }`}
              onClick={() => setActiveFilter(button.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + 0.1 * index }}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="h-full"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-2xl overflow-hidden border border-[#333] h-full flex flex-col relative group"
                  style={{
                    boxShadow: hoveredProject === project.id ? `0 15px 30px -10px ${project.color}30, 0 10px 20px -8px ${project.color}20` : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: hoveredProject === project.id ? 'translateY(-12px)' : 'none'
                  }}
                >
                  {/* Project image */}
                  <div className="h-52 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}95, ${project.color}80)`,
                        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)'
                      }}
                    />

                    {/* Overlay with project title */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-[#121212] text-cyber-lime text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-cyber-lime/30 backdrop-blur-sm">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project content */}
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="mb-5 flex-1">
                      <div className="text-sm font-medium text-gray-400 mb-2.5 inline-block px-2.5 py-1 bg-[#1A1A1A] rounded-md border border-[#333]">{project.category}</div>
                      <p className="text-gray-300 text-sm leading-relaxed mt-2">{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-[#1A1A1A] px-3 py-1.5 rounded-md text-xs font-medium border border-[#333] shadow-sm"
                          style={{
                            color: project.color,
                            boxShadow: hoveredProject === project.id ? `0 2px 5px ${project.color}20` : 'none',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333] rounded-lg flex items-center justify-center gap-2.5 text-sm py-2.5 font-medium shadow-md"
                        style={{
                          borderColor: hoveredProject === project.id ? project.color : '#333',
                          boxShadow: hoveredProject === project.id ? `0 4px 12px ${project.color}20` : 'none',
                          transition: 'all 0.3s ease-in-out'
                        }}
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <FaGithub className="text-lg" /> GitHub
                      </Button>
                      <Button
                        className="flex-1 text-white rounded-lg flex items-center justify-center gap-2.5 text-sm py-2.5 font-medium shadow-md"
                        style={{
                          backgroundColor: project.color,
                          opacity: hoveredProject === project.id ? 1 : 0.85,
                          transform: hoveredProject === project.id ? 'translateY(-2px)' : 'none',
                          boxShadow: hoveredProject === project.id ? `0 8px 16px ${project.color}30` : `0 4px 6px ${project.color}20`,
                          transition: 'all 0.3s ease-in-out'
                        }}
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <FaExternalLinkAlt className="text-sm" /> Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all projects button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            className="bg-gradient-to-r from-cyber-lime to-cyber-lime/80 text-[#121212] hover:from-cyber-lime/90 hover:to-cyber-lime/70 px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyber-lime/20 transition-all hover:-translate-y-1 font-medium"
            onClick={() => window.location.href = '/projects'}
          >
            View All Projects
          </Button>
        </motion.div>

        {/* GitHub stats */}
        <motion.div
          className="mt-24 bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-2xl border border-[#333] p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Open Source</span> Contributions
              </h3>
              <p className="text-gray-400 mb-6 max-w-lg">
                I'm passionate about open source and regularly contribute to projects that align with my interests in AI and web development.
              </p>
              <Button
                className="bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333] rounded-lg flex items-center justify-center gap-2 px-6 py-3"
                onClick={() => window.open('https://github.com/RaheesAhmed', '_blank')}
              >
                <FaGithub className="text-xl" /> View GitHub Profile
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Repositories", value: "200+" },
                { label: "Contributions", value: "50+" },
                { label: "Stars", value: "100+" },
                { label: "Followers", value: "30+" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333] text-center"
                >
                  <div className="text-2xl font-bold text-cyber-lime mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-tech-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyber-lime/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
