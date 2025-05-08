'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-4 border-t border-[#333333] mt-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-50"></div>
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-heading font-bold text-tech-blue mb-4">Rahees Ahmed</div>
            <p className="text-gray-400 mb-6">AI Engineer & Full Stack Developer specializing in custom AI solutions and scalable web applications.</p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, href: "https://github.com/raheesahmed", label: "GitHub" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/raheesahmed/", label: "LinkedIn" },
                { icon: <FaEnvelope />, href: "mailto:rahesahmed37@gmail.com", label: "Email" },
                { icon: <FaWhatsapp />, href: "https://wa.me/923155501381", label: "WhatsApp" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="bg-[#252525] w-10 h-10 rounded-full flex items-center justify-center hover:bg-tech-blue/20 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <span className="text-tech-blue">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { text: "About Me", href: "#about" },
                { text: "My Expertise", href: "#expertise" },
                { text: "Projects", href: "#projects" },
                { text: "Contact", href: "#contact" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-tech-blue transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-blue/50"></span>
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-tech-blue" />
                <a href="mailto:rahesahmed37@gmail.com" className="text-gray-400 hover:text-tech-blue transition-colors">
                  rahesahmed37@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-tech-blue" />
                <a href="https://wa.me/923155501381" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tech-blue transition-colors">
                  +92-3155501381
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-[#252525] rounded-xl border border-[#333333]">
              <h4 className="font-medium mb-2 text-tech-blue">Available for Work</h4>
              <p className="text-sm text-gray-400">Currently accepting new projects and collaborations.</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-[#333333] text-center text-gray-400 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Rahees Ahmed. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using Next.js & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
