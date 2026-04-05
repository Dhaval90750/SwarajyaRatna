'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ShieldButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function ShieldButton({ children, variant = 'primary', className, onClick }: ShieldButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative px-12 h-16 rounded-[2rem] font-black text-xl transition-all duration-300 overflow-hidden cursor-pointer flex items-center justify-center",
        variant === 'primary' 
          ? "text-white border border-[#D4AF37]/40 shadow-[0_6px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] bg-gradient-to-br from-[#C2410C] to-[#9A3412]" 
          : "border-2 border-accent text-white bg-transparent hover:bg-accent/10 shadow-[0_4px_15px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {/* Golden Glow Layer (Primary only) */}
      {variant === 'primary' && (
        <div className="absolute inset-x-0 bottom-0 h-1 bg-accent group-hover:h-2 transition-all" />
      )}
      
      {/* Stone Texture Reflection (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
      
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
    </motion.button>
  );
}
