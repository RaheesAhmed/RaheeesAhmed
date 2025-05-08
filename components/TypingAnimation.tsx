'use client';

import { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
  text: string[];
  className?: string;
  typingSpeed?: number;
  eraseSpeed?: number;
  eraseDelay?: number;
  startDelay?: number;
}

export default function TypingAnimation({
  text,
  className = '',
  typingSpeed = 50,
  eraseSpeed = 30,
  eraseDelay = 2000,
  startDelay = 1000
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (text.length === 0) return;

    const startTyping = () => {
      setIsTyping(true);
      const currentText = text[currentIndex];
      let charIndex = 0;

      const type = () => {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          charIndex++;
          timeoutRef.current = setTimeout(type, typingSpeed);
        } else {
          // Finished typing current text
          timeoutRef.current = setTimeout(startErasing, eraseDelay);
        }
      };

      const startErasing = () => {
        let currentLength = currentText.length;

        const erase = () => {
          if (currentLength > 0) {
            setDisplayText(currentText.substring(0, currentLength - 1));
            currentLength--;
            timeoutRef.current = setTimeout(erase, eraseSpeed);
          } else {
            // Move to next text
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
            timeoutRef.current = setTimeout(startTyping, typingSpeed * 2);
          }
        };

        timeoutRef.current = setTimeout(erase, eraseSpeed);
      };

      timeoutRef.current = setTimeout(type, typingSpeed);
    };

    // Initial delay before starting the animation
    timeoutRef.current = setTimeout(startTyping, startDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, text, typingSpeed, eraseSpeed, eraseDelay, startDelay]);

  return (
    <div className={`inline-block ${className}`}>
      <span>{displayText}</span>
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </div>
  );
}
