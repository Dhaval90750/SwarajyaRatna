'use client';

import { motion } from 'framer-motion';

interface StoneEtchedTextProps {
  text: string;
  className?: string;
}

export default function StoneEtchedText({ text, className }: StoneEtchedTextProps) {
  return (
    <motion.h1 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`${className} font-yatra tracking-normal relative text-metallic-gold shadow-engraved drop-shadow-[0_5px_15px_rgba(194,65,12,0.2)]`}
    >
      {text}
    </motion.h1>
  );
}
