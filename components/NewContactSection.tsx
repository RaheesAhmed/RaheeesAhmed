'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane, FaCheck, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function NewContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #121212, #1a1a1a)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#FFFFFF"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        
        {/* Gradient shapes */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-tech-blue/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyber-lime/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            className="inline-block px-3 py-1 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's <span className="text-tech-blue">Connect</span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-tech-blue to-highlight rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 80, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact form - takes 3 columns */}
          <motion.div 
            className="lg:col-span-3 bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-2xl border border-[#333] p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-cyber-lime">Send</span> a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-sm">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 focus:border-tech-blue focus:outline-none transition-all"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-sm">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 focus:border-tech-blue focus:outline-none transition-all"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-sm">Your Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 focus:border-tech-blue focus:outline-none transition-all"
                  placeholder="Tell me about your project..."
                  required
                  disabled={isSubmitting || isSubmitted}
                ></textarea>
              </div>
              <Button 
                type="submit"
                className={`w-full py-6 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 ${
                  isSubmitted 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-tech-blue hover:bg-tech-blue/90 text-white'
                }`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : isSubmitted ? (
                  <>
                    <FaCheck />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </Button>
            </form>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-tech-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyber-lime/5 rounded-full blur-3xl"></div>
          </motion.div>
          
          {/* Contact info - takes 2 columns */}
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-2xl border border-[#333] p-8">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-tech-blue">Contact</span> Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1A1A1A] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#333]">
                    <FaEnvelope className="text-tech-blue text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:rahesahmed37@gmail.com" className="text-gray-400 hover:text-tech-blue transition-colors">
                      rahesahmed37@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#1A1A1A] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#333]">
                    <FaWhatsapp className="text-tech-blue text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <a href="https://wa.me/923155501381" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tech-blue transition-colors">
                      +92-3155501381
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#1A1A1A] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#333]">
                    <FaMapMarkerAlt className="text-tech-blue text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
                      Remote - Available Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-2xl border border-[#333] p-8 flex-1">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-cyber-lime">Social</span> Profiles
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FaGithub className="text-xl" />, label: "GitHub", href: "https://github.com/raheesahmed" },
                  { icon: <FaLinkedin className="text-xl" />, label: "LinkedIn", href: "https://www.linkedin.com/in/raheesahmed/" },
                  { icon: <FaWhatsapp className="text-xl" />, label: "WhatsApp", href: "https://wa.me/923155501381" },
                  { icon: <FaEnvelope className="text-xl" />, label: "Email", href: "mailto:rahesahmed37@gmail.com" }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333] flex flex-col items-center justify-center gap-2 hover:border-tech-blue transition-all hover:-translate-y-1"
                  >
                    <div className="text-tech-blue">{item.icon}</div>
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] rounded-2xl border border-[#333] p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Let's Make <span className="text-cyber-lime">Magic</span> Happen!
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to transform your business with cutting-edge AI solutions? Let's collaborate and create something amazing together.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <motion.a 
                href="mailto:rahesahmed37@gmail.com" 
                className="bg-gradient-to-r from-tech-blue to-tech-blue/80 text-white px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope /> Email Me
              </motion.a>
              <motion.a 
                href="https://wa.me/923155501381" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> WhatsApp
              </motion.a>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-tech-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyber-lime/5 rounded-full blur-3xl"></div>
          
          {/* Circuit pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit-contact" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 L100,50" stroke="#FFFFFF" strokeWidth="0.5" fill="none"/>
                <path d="M50,0 L50,100" stroke="#FFFFFF" strokeWidth="0.5" fill="none"/>
                <circle cx="50" cy="50" r="3" fill="#FFFFFF"/>
                <circle cx="0" cy="50" r="2" fill="#FFFFFF"/>
                <circle cx="100" cy="50" r="2" fill="#FFFFFF"/>
                <circle cx="50" cy="0" r="2" fill="#FFFFFF"/>
                <circle cx="50" cy="100" r="2" fill="#FFFFFF"/>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-contact)"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
