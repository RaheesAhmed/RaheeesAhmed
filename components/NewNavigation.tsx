'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

export default function NewNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking for glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'about', 'expertise', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 backdrop-blur-xl bg-[#121212]/80 border-b border-[#333333]/80 shadow-lg'
            : 'py-3'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glow effect that follows mouse */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 156, 219, 0.15), transparent)`,
            zIndex: -1
          }}
        />

        {/* Subtle animated border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tech-blue/30 to-transparent"></div>

        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="relative group">
              <div className="relative">
                {/* Shadow glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue to-cyber-lime rounded-lg blur-md opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* Main logo container */}
                <div className="relative h-10 bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-lg flex items-center justify-center text-white font-bold text-lg overflow-hidden border border-tech-blue/30">
                  {/* Tech icon */}
                  <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-gradient-to-br from-tech-blue to-tech-blue/80 text-white">
                    <FaCode className="text-sm" />
                  </div>

                  {/* Name with better contrast */}
                  <div className="pl-10 pr-4 flex items-center">
                    <span className="relative z-10 text-white font-mono tracking-wider font-bold">RAHEES <span className="text-cyber-lime">AHMED</span></span>
                  </div>

                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 via-cyber-lime/10 to-tech-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 100%'
                    }}
                  />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="glass-effect rounded-full px-1 py-1 border border-white/5 shadow-xl">
              <div className="flex">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);

                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ y: -2 }}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          layoutId="navIndicator"
                          transition={{ type: 'spring', duration: 0.6 }}
                        >
                          {/* Active background with animated gradient */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-blue/20 to-cyber-lime/20"></div>

                          {/* Animated border */}
                          <div className="absolute inset-0 rounded-full border border-tech-blue/30 shadow-sm shadow-tech-blue/20"></div>

                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 rounded-full bg-tech-blue/5 blur-sm"></div>
                        </motion.div>
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Button glow effect */}
            <div className="absolute -inset-1 bg-tech-blue rounded-full blur-md opacity-30"></div>

            {/* Button container */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full glass-effect border border-tech-blue/30 shadow-lg shadow-tech-blue/10">
              {mobileMenuOpen ? (
                <FiX className="text-tech-blue text-xl" />
              ) : (
                <FiMenu className="text-tech-blue text-xl" />
              )}
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop with blur and grid pattern */}
            <div className="absolute inset-0 bg-[#121212]/95 backdrop-blur-xl">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 to-cyber-lime/5 opacity-30" />
            </div>

            {/* Header with close button */}
            <div className="relative z-10 flex justify-between items-center p-6">
              {/* Logo */}
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue to-cyber-lime rounded-lg blur-md opacity-30"></div>
                  <div className="relative h-10 bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-lg flex items-center justify-center text-white font-bold text-lg overflow-hidden border border-tech-blue/30">
                    <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-gradient-to-br from-tech-blue to-tech-blue/80 text-white">
                      <FaCode className="text-sm" />
                    </div>
                    <div className="pl-10 pr-4 flex items-center">
                      <span className="relative z-10 text-white font-mono tracking-wider font-bold">RAHEES <span className="text-cyber-lime">AHMED</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <motion.button
                className="relative"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <div className="absolute -inset-1 bg-tech-blue rounded-full blur-md opacity-30"></div>
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full glass-effect border border-tech-blue/30 shadow-lg shadow-tech-blue/10">
                  <FiX className="text-tech-blue text-xl" />
                </div>
              </motion.button>
            </div>

            {/* Menu items with enhanced styling */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-8 px-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);

                return (
                  <motion.div
                    key={index}
                    className="w-full max-w-xs"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.a
                      href={link.href}
                      className={`relative block w-full text-center py-3 px-6 rounded-xl text-xl font-medium transition-all ${
                        isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {/* Background for menu items */}
                      <div className={`absolute inset-0 rounded-xl ${
                        isActive
                          ? 'bg-gradient-to-r from-tech-blue/20 to-cyber-lime/20 border border-tech-blue/30'
                          : 'bg-[#1A1A1A]/30 backdrop-blur-sm border border-white/5 hover:border-tech-blue/20'
                      } transition-all`}></div>

                      {/* Glow effect for active items */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-tech-blue/10 blur-md -z-10"></div>
                      )}

                      <span className="relative z-10">{link.label}</span>
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>

            {/* Social links at bottom */}
            <div className="relative z-10 flex justify-center gap-6 py-8">
              <motion.a
                href="https://github.com/raheesahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-effect border border-white/10 text-gray-300 hover:text-tech-blue hover:border-tech-blue/30 transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
