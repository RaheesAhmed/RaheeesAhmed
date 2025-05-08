'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

interface Message {
  text: string;
  isBot: boolean;
}

// Predefined responses for the chatbot
const botResponses: Record<string, string> = {
  'hello': 'Hello! I\'m Rahees\'s AI assistant. How can I help you today?',
  'hi': 'Hi there! I\'m Rahees\'s AI assistant. How can I help you today?',
  'who are you': 'I\'m a virtual assistant on Rahees\'s portfolio. I can tell you about his skills, projects, or how to get in touch!',
  'what can you do': 'I can provide information about Rahees\'s skills, experience, projects, or help you get in touch with him!',
  'skills': 'Rahees is an AI Engineer and Full Stack Developer with expertise in AI/ML, React, Next.js, Node.js, Python, and building custom AI solutions.',
  'experience': 'Rahees has over 6 years of experience building scalable, user-focused solutions, specializing in Full Stack Development and AI-driven technologies.',
  'contact': 'You can reach Rahees via email at rahesahmed37@gmail.com or WhatsApp at +92-3155501381.',
  'projects': 'Rahees has worked on various projects including AI chatbots, document management systems, and custom AI tools. Check out the Projects section for more details!',
  'help': 'I can tell you about Rahees\'s skills, experience, projects, or how to contact him. Just ask!'
};

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi there! I\'m Rahees\'s AI assistant. How can I help you today?', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Find response
    setTimeout(() => {
      setIsTyping(false);
      
      // Check for matching keywords
      const lowerInput = input.toLowerCase();
      let botResponse = 'I\'m not sure how to respond to that. You can ask me about Rahees\'s skills, experience, projects, or how to contact him.';
      
      // Check for matches in our predefined responses
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowerInput.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
    
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-tech-blue text-white flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <FaRobot className="text-2xl" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-[#1F1F1F] rounded-2xl shadow-2xl overflow-hidden z-50 border border-[#333333]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-tech-blue to-cyber-lime p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot className="text-white text-xl" />
                <h3 className="text-white font-bold">AI Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[380px] overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot 
                        ? 'bg-[#252525] text-white' 
                        : 'bg-tech-blue text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#252525] text-white p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[#333333] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-[#252525] text-white border border-[#333333] rounded-xl p-3 focus:outline-none focus:border-tech-blue transition-colors"
              />
              <button
                onClick={handleSendMessage}
                className="bg-tech-blue text-white p-3 rounded-xl hover:bg-tech-blue/90 transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
