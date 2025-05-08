'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaCode, FaStar, FaAward, FaTrophy, FaGraduationCap } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import Image from 'next/image';

export default function NewAboutSection() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Mouse movement effect for profile image
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  // Animation controls
  const controls = useAnimation();

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  // Skills data
  const skills = [
    { name: "AI & Machine Learning", level: 95, color: "tech-blue" },
    { name: "Full Stack Development", level: 90, color: "cyber-lime" },
    { name: "React & Next.js", level: 92, color: "highlight" },
    { name: "Node.js & Python", level: 88, color: "tech-blue" }
  ];

  // Achievements data
  const achievements = [
    { icon: <FaStar className="text-yellow-400" />, value: "5.0", label: "Upwork Rating" },
    { icon: <FaAward className="text-tech-blue" />, value: "50+", label: "Projects Completed" },
    { icon: <FaTrophy className="text-cyber-lime" />, value: "6+", label: "Years Experience" },
    { icon: <FaGraduationCap className="text-highlight" />, value: "BSc", label: "Computer Science" }
  ];

  const approaches = [
    {
      icon: <FaLightbulb className="text-2xl text-cyber-lime" />,
      title: "Business First",
      description: "Understanding business needs before applying technology",
      delay: 0.2
    },
    {
      icon: <FaRocket className="text-2xl text-tech-blue" />,
      title: "Scalable Solutions",
      description: "Building systems that grow with your business",
      delay: 0.3
    },
    {
      icon: <FaUsers className="text-2xl text-highlight" />,
      title: "User Experience",
      description: "Creating intuitive and engaging interfaces",
      delay: 0.4
    },
    {
      icon: <FaCode className="text-2xl text-cyber-lime" />,
      title: "Clean Code",
      description: "Writing maintainable, well-documented code",
      delay: 0.5
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #1a1a1a, #121212)' }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Animated particles - Using static values instead of random to avoid hydration issues */}
        <div className="absolute inset-0">
          {[
            { top: '10%', left: '20%', color: 'rgba(45, 156, 219, 0.4)', shadow: '0 0 10px rgba(45, 156, 219, 0.6)', size: 5, yMove: -80, xMove: 20, duration: 15 },
            { top: '30%', left: '70%', color: 'rgba(0, 255, 171, 0.4)', shadow: '0 0 10px rgba(0, 255, 171, 0.6)', size: 4, yMove: -60, xMove: -15, duration: 18 },
            { top: '50%', left: '30%', color: 'rgba(155, 81, 224, 0.4)', shadow: '0 0 10px rgba(155, 81, 224, 0.6)', size: 6, yMove: -90, xMove: 10, duration: 20 },
            { top: '70%', left: '80%', color: 'rgba(45, 156, 219, 0.4)', shadow: '0 0 10px rgba(45, 156, 219, 0.6)', size: 3, yMove: -70, xMove: -20, duration: 12 },
            { top: '90%', left: '40%', color: 'rgba(0, 255, 171, 0.4)', shadow: '0 0 10px rgba(0, 255, 171, 0.6)', size: 5, yMove: -100, xMove: 5, duration: 16 },
            { top: '20%', left: '90%', color: 'rgba(155, 81, 224, 0.4)', shadow: '0 0 10px rgba(155, 81, 224, 0.6)', size: 4, yMove: -65, xMove: -10, duration: 14 },
            { top: '40%', left: '10%', color: 'rgba(45, 156, 219, 0.4)', shadow: '0 0 10px rgba(45, 156, 219, 0.6)', size: 6, yMove: -85, xMove: 15, duration: 19 },
            { top: '60%', left: '60%', color: 'rgba(0, 255, 171, 0.4)', shadow: '0 0 10px rgba(0, 255, 171, 0.6)', size: 3, yMove: -75, xMove: -5, duration: 13 },
            { top: '80%', left: '20%', color: 'rgba(155, 81, 224, 0.4)', shadow: '0 0 10px rgba(155, 81, 224, 0.6)', size: 5, yMove: -95, xMove: 10, duration: 17 },
            { top: '15%', left: '50%', color: 'rgba(45, 156, 219, 0.4)', shadow: '0 0 10px rgba(45, 156, 219, 0.6)', size: 4, yMove: -55, xMove: -15, duration: 15 }
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                top: particle.top,
                left: particle.left,
                background: particle.color,
                boxShadow: particle.shadow
              }}
              animate={{
                y: [0, particle.yMove],
                x: [0, particle.xMove],
                opacity: [0.7, 0],
                scale: [1, 0.7]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Enhanced gradient shapes */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-tech-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 15]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: 'translate(25%, -25%)'
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-cyber-lime/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -20]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            transform: 'translate(-25%, 25%)'
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-highlight/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 30]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Decorative code lines */}
      <div className="absolute left-0 top-1/4 w-[150px] h-[300px] opacity-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full flex flex-col justify-center"
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="h-[1px] bg-tech-blue my-6"
              style={{ width: Math.random() * 80 + 20 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute right-0 bottom-1/4 w-[150px] h-[300px] opacity-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full flex flex-col justify-center"
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="h-[1px] bg-cyber-lime ml-auto my-6"
              style={{ width: Math.random() * 80 + 20 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-tech-blue/30 to-cyber-lime/30 text-white text-sm font-bold mb-6 border border-tech-blue/30 backdrop-blur-sm shadow-lg shadow-tech-blue/10"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10 flex items-center">
              <HiOutlineSparkles className="mr-2 text-tech-blue" />
              About Me
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 to-cyber-lime/10 rounded-full"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
            />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate <span className="bg-clip-text text-transparent bg-gradient-to-r from-highlight to-highlight/80">Developer</span> & <span className="text-cyber-lime font-bold">Problem Solver</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 text-center max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Transforming complex challenges into elegant, user-focused solutions with AI and modern web technologies.
          </motion.p>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-tech-blue via-cyber-lime to-highlight rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 128, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              ref={sectionRef}
              onMouseMove={handleMouseMove}
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
              }}
            >
              <div className="relative z-10 bg-gradient-to-br from-[#1F1F1F] to-[#252525] p-10 rounded-2xl border border-[#333333] shadow-2xl backdrop-blur-sm">
                <motion.div
                  className="absolute -top-6 -right-6 bg-tech-blue/80 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg shadow-tech-blue/30 border-2 border-[#1F1F1F]"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  6+
                </motion.div>

                <motion.p
                  className="text-xl mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Hi there! I'm <span className="text-tech-blue font-bold">Rahees</span>, a passionate developer with over <span className="text-cyber-lime font-bold">6 years of experience</span> in building scalable, user-focused solutions. I specialize in Full Stack Development and AI-driven technologies, turning complex problems into elegant, impactful applications.
                </motion.p>

                <motion.p
                  className="text-xl mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  As a <span className="text-cyber-lime font-bold">Top Rated Upwork Freelancer</span> with a 5-star track record, I've helped clients worldwide achieve their goals with custom solutions that deliver results.
                </motion.p>

                <motion.p
                  className="text-xl mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  I believe great tech starts with understanding the <span className="text-highlight font-bold">why</span> behind a project. I blend technical expertise with a focus on business outcomes, delivering solutions that don't just work—they win.
                </motion.p>

                {/* Skills section */}
                <motion.div
                  className="mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-cyber-lime">My Skills</span>
                    <div className="h-px bg-gradient-to-r from-tech-blue to-transparent flex-grow ml-4"></div>
                  </h3>

                  <div className="space-y-5">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className={`text-${skill.color} font-bold`}>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333333] hover:border-tech-blue/50 transition-all group text-center"
                      whileHover={{ y: -5, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        className="text-3xl mb-2 flex justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-tech-blue/15 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyber-lime/15 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-highlight/5 rounded-full blur-3xl -z-10"></div>

              {/* Enhanced code snippet decoration */}
              <motion.div
                className="absolute -bottom-12 -left-12 bg-[#1A1A1A] p-4 rounded-lg border border-tech-blue/30 shadow-xl transform rotate-6 hidden md:block"
                initial={{ opacity: 0, x: -30, rotate: -10 }}
                animate={isInView ? { opacity: 0.8, x: 0, rotate: 6 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.05, rotate: 0, opacity: 1 }}
              >
                <pre className="text-xs text-tech-blue font-mono">
                  <code>{`const ai = new AIAgent({
  model: "gpt-4-turbo",
  tools: [search, analyze, generate],
  memory: new VectorMemory()
});

await ai.solve(complexProblem);`}</code>
                </pre>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Enhanced profile image with 3D effect */}
              <div className="relative mx-auto max-w-md">
                <motion.div
                  className="relative z-10 rounded-2xl overflow-hidden border-2 border-tech-blue/60 shadow-2xl shadow-tech-blue/30"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="aspect-square relative bg-gradient-to-br from-[#1F1F1F] to-[#252525]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/raheesahmed.png"
                        alt="Rahees Ahmed"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>

                    {/* Enhanced animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-tech-blue/15 to-cyber-lime/15 mix-blend-overlay"
                      animate={{
                        background: [
                          'linear-gradient(135deg, rgba(45, 156, 219, 0.15) 0%, rgba(0, 255, 171, 0.15) 100%)',
                          'linear-gradient(225deg, rgba(45, 156, 219, 0.15) 0%, rgba(155, 81, 224, 0.15) 100%)',
                          'linear-gradient(315deg, rgba(0, 255, 171, 0.15) 0%, rgba(155, 81, 224, 0.15) 100%)',
                          'linear-gradient(45deg, rgba(45, 156, 219, 0.15) 0%, rgba(0, 255, 171, 0.15) 100%)'
                        ]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 bg-gradient-to-tr from-transparent via-white to-transparent"
                      animate={{
                        opacity: [0, 0.1, 0],
                        left: ['-100%', '100%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut"
                      }}
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  </div>
                </motion.div>

                {/* Enhanced animated borders */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-tech-blue/40 z-0"
                  animate={{ rotate: [3, 5, 3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-cyber-lime/30 z-0"
                  animate={{ rotate: [-3, -6, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-highlight/20 z-0"
                  animate={{ rotate: [1, -1, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Floating tech icons */}
                <div className="absolute -right-8 top-10 hidden lg:block">
                  <motion.div
                    className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-lg border border-[#333]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-tech-blue text-2xl">AI</span>
                  </motion.div>
                </div>

                <div className="absolute -left-6 bottom-20 hidden lg:block">
                  <motion.div
                    className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-lg border border-[#333]"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    <span className="text-cyber-lime text-xl">JS</span>
                  </motion.div>
                </div>

                {/* Enhanced approach cards */}
                <div className="mt-16">
                  <motion.h3
                    className="text-2xl mb-8 font-bold flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-cyber-lime">My Approach</span>
                    <div className="h-px bg-gradient-to-r from-tech-blue to-transparent flex-grow ml-4"></div>
                  </motion.h3>

                  <div className="space-y-5">
                    {approaches.map((approach, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-r from-[#1A1A1A] to-[#252525] p-5 rounded-xl border border-[#333] hover:border-tech-blue/50 transition-all flex items-start gap-5 group"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: approach.delay }}
                        whileHover={{ x: 8, scale: 1.02 }}
                      >
                        <motion.div
                          className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#333] shadow-lg group-hover:shadow-tech-blue/20 transition-all overflow-hidden"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                            className="text-2xl"
                          >
                            {approach.icon}
                          </motion.div>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-tech-blue/0 via-tech-blue/10 to-tech-blue/0"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                          />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-white text-lg mb-2 group-hover:text-tech-blue transition-colors">{approach.title}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{approach.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}