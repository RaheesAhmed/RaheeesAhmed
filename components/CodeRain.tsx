'use client';

import React, { useEffect, useRef } from 'react';

interface CodeRainProps {
  className?: string;
}

const CodeRain: React.FC<CodeRainProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Characters to display (mix of code-like characters)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>[]{}()=+-*/&|!?:;,.~`@#$%^_\\\'\"';
    
    // Create drops
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    
    // Initialize all drops to start at random positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }

    // Colors for the effect
    const colors = ['#2D9CDB', '#00FFAB', '#9B51E0'];

    // Drawing the characters
    const draw = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = 'rgba(18, 18, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set font and color
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Choose a random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Choose a color based on position (creates color bands)
        const colorIndex = Math.floor((i / columns) * colors.length) % colors.length;
        const baseColor = colors[colorIndex];
        
        // Calculate opacity based on position (head of the stream is brighter)
        const y = drops[i] * fontSize;
        const normalizedY = y / canvas.height;
        const opacity = Math.max(0.1, 1 - normalizedY);
        
        // Set the color with opacity
        ctx.fillStyle = baseColor + Math.floor(opacity * 255).toString(16).padStart(2, '0');
        
        // Draw the character
        ctx.fillText(text, i * fontSize, y);
        
        // Move the drop down
        drops[i]++;
        
        // Reset drop to top with random delay when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -20);
        }
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default CodeRain;
