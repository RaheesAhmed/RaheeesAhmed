'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedTitle } from './AnimatedText';
import GlowingCard from './GlowingCard';
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane, FaCheck } from "react-icons/fa";

export default function ContactSection() {
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
    <section id="contact" className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <motion.div 
          className="absolute top-40 left-20 w-80 h-80 bg-tech-blue/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-highlight/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            className="inline-block px-3 py-1 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.div>
          <AnimatedTitle className="text-3xl md:text-5xl font-bold text-center" once={true}>
            Let's <span className="text-tech-blue">Connect</span>
          </AnimatedTitle>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-tech-blue to-highlight rounded-full mt-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <GlowingCard className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] p-8 rounded-2xl border border-[#333333] shadow-xl" glowColor="rgba(45, 156, 219, 0.6)">
            <motion.h3 
              className="text-2xl mb-6 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-cyber-lime">Ready</span> to Transform Your Ideas?
            </motion.h3>
            <motion.p 
              className="mb-8 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Whether you need an AI agent to handle repetitive tasks, a chatbot that feels human and drives sales, or a custom generative AI tool to ignite your next big idea—I'm here to help bring your vision to life.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: <FaEnvelope className="text-tech-blue text-xl" />, text: "rahesahmed37@gmail.com", href: "mailto:rahesahmed37@gmail.com" },
                { icon: <FaWhatsapp className="text-tech-blue text-xl" />, text: "+92-3155501381", href: "https://wa.me/923155501381" },
                { icon: <FaGithub className="text-tech-blue text-xl" />, text: "github.com/raheesahmed", href: "https://github.com/raheesahmed" },
                { icon: <FaLinkedin className="text-tech-blue text-xl" />, text: "linkedin.com/in/rahees-ahmed", href: "https://www.linkedin.com/in/raheesahmed/" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-tech-blue/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-tech-blue/20 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-tech-blue transition-colors"
                  >
                    {item.text}
                  </a>
                </motion.div>
              ))}
            </div>
          </GlowingCard>
          
          <GlowingCard className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] p-8 rounded-2xl border border-[#333333] shadow-xl" glowColor="rgba(0, 255, 171, 0.6)">
            <motion.h3 
              className="text-2xl mb-6 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-cyber-lime">Start</span> a Project
            </motion.h3>
            
            <motion.form 
              className="space-y-6"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-[#1F1F1F] border border-[#333333] rounded-xl p-4 focus:border-tech-blue focus:outline-none transition-all"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-[#1F1F1F] border border-[#333333] rounded-xl p-4 focus:border-tech-blue focus:outline-none transition-all"
                  placeholder="Your email"
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-[#1F1F1F] border border-[#333333] rounded-xl p-4 focus:border-tech-blue focus:outline-none transition-all"
                  placeholder="Tell me about your project"
                  required
                  disabled={isSubmitting || isSubmitted}
                ></textarea>
              </div>
              <Button 
                type="submit"
                className={`w-full py-6 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 ${
                  isSubmitted 
                    ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/20' 
                    : 'bg-tech-blue hover:bg-tech-blue/90 text-white shadow-tech-blue/20'
                }`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
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
            </motion.form>
          </GlowingCard>
        </div>
        
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <GlowingCard className="bg-gradient-to-br from-[#1F1F1F] to-[#252525] p-8 rounded-2xl border border-[#333333] shadow-xl text-center" glowColor="rgba(155, 81, 224, 0.6)">
            <motion.h3 
              className="text-2xl mb-6 font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Let's Make <span className="text-cyber-lime">Magic</span> Happen!
            </motion.h3>
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to transform your business with cutting-edge AI solutions? Let's collaborate and create something amazing together.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:rahesahmed37@gmail.com" 
                className="bg-tech-blue text-white px-8 py-4 rounded-xl shadow-lg shadow-tech-blue/20 transition-all hover:-translate-y-1 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope /> Email Me
              </motion.a>
              <motion.a 
                href="https://wa.me/923155501381" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-1 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> WhatsApp
              </motion.a>
            </motion.div>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  );
}
