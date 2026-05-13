'use client';

import { motion } from 'framer-motion';

interface TimelineMilestoneProps {
  year: string;
  marathiTitle?: string;
  englishTitle?: string;
  desc: string;
  delay?: number;
}

export default function TimelineMilestone({ year, marathiTitle, englishTitle, desc, delay = 0 }: TimelineMilestoneProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative flex items-center justify-center w-[280px] md:w-[320px] aspect-square z-30"
    >
      {/* Octagonal Heritage Frame (SVG Border) */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl hover:drop-shadow-2xl transition-shadow duration-300">
          <path 
            d="M 30 2 L 70 2 L 98 30 L 98 70 L 70 98 L 30 98 L 2 70 L 2 30 Z" 
            fill="#FFF7E6"
            stroke="#D4AF37"
            strokeWidth="1.5"
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
      <div className="relative z-10 w-full px-8 text-center flex flex-col items-center">
        <div className="mb-4">
          <div className="w-12 h-12 bg-[#C2410C] rounded-full flex items-center justify-center text-white border-2 border-[#D4AF37]/30 shadow-md mx-auto mb-2">
            <span className="text-xl font-black">ॐ</span>
          </div>
          <span className="text-[#C2410C] font-black text-2xl border-b-2 border-[#C2410C]/20 pb-1 px-4 inline-block">
            {year}
          </span>
        </div>
        
        <div className="space-y-1 mb-3">
          <h3 className="text-lg md:text-xl font-bold text-stone-800 font-devanagari leading-tight">{marathiTitle}</h3>
          <p className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-widest">{englishTitle}</p>
        </div>
        <p className="text-stone-700 text-xs md:text-sm font-medium leading-relaxed italic px-2">
          "{desc}"
        </p>
      </div>
    </motion.div>
  );
}

