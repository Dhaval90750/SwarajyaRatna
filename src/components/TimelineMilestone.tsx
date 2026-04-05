'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TimelineMilestoneProps {
  year: string;
  marathiTitle?: string;
  englishTitle?: string;
  desc: string;
  delay?: number;
}

export default function TimelineMilestone({ year, marathiTitle, englishTitle, desc, delay = 0 }: TimelineMilestoneProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center w-24 md:w-48 h-24 z-30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* Central Axis Seal (The Trigger) */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.5, delay }}
        className={`relative z-40 w-20 h-20 bg-[#C2410C] shadow-[0_0_0_6px_rgba(194,65,12,0.15),0_4px_15px_rgba(0,0,0,0.4)] rounded-full flex items-center justify-center text-white border-4 border-[#D4AF37]/30 cursor-pointer transition-all duration-500 ${isHovered ? 'scale-110 shadow-[0_0_40px_rgba(194,65,12,0.6)]' : ''}`}
      >
        <span className="text-2xl font-black drop-shadow-md select-none">ॐ</span>
      </motion.div>

      {/* The Rajmudra Reveal (The Information) */}
      <motion.div
        initial={false}
        animate={{ 
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -220 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute z-[100] pointer-events-none w-[300px] md:w-[380px] aspect-square flex items-center justify-center"
      >
        {/* Octagonal Heritage Frame (SVG Border) */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            <path 
              d="M 30 2 L 70 2 L 98 30 L 98 70 L 70 98 L 30 98 L 2 70 L 2 30 Z" 
              fill="#FFF7E6"
              stroke="#D4AF37"
              strokeWidth="1.5"
              className="opacity-100"
            />
            <path 
              d="M 32 5 L 68 5 L 95 32 L 95 68 L 68 95 L 32 95 L 5 68 L 5 32 Z" 
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.5"
              className="opacity-30"
            />
          </svg>
        </div>

        {/* Parchment Background Texture (Clipped) */}
        <div 
          className="absolute inset-[3px] opacity-10 bg-[url('/images/hero-light.png')] bg-cover mix-blend-multiply z-1"
          style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
        />
        
        {/* Centered Content */}
        <div className="relative z-10 w-full px-12 text-center flex flex-col items-center">
          <span className="text-[#C2410C] font-black text-3xl mb-1 border-b-2 border-[#C2410C]/20 pb-1 w-20">
            {year}
          </span>
          <div className="space-y-1 mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-stone-800 font-devanagari leading-tight">{marathiTitle}</h3>
            <p className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-widest">{englishTitle}</p>
          </div>
          <p className="text-stone-700 text-sm md:text-base font-medium leading-relaxed italic px-2">
            "{desc}"
          </p>
        </div>

        {/* Removed Bottom Accent per User Request */}
      </motion.div>
    </div>
  );
}
