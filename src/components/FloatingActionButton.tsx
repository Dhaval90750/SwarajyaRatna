'use client';

import { motion } from 'framer-motion';
import { MessageCircle, UserPlus, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from '@/i18n/routing';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150] flex flex-col items-center gap-4">
      {/* Expanded Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="flex flex-col gap-4 mb-2"
        >
          <Link href="https://wa.me/9190750" target="_blank" className="group relative">
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/10">
              WhatsApp Support
            </div>
            <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <MessageCircle size={28} />
            </div>
          </Link>

          <Link href="/register" className="group relative">
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/10">
              Register Now
            </div>
            <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <UserPlus size={28} />
            </div>
          </Link>

          <button onClick={scrollToTop} className="group relative">
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/10">
              Back to Top
            </div>
            <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <ArrowUp size={28} />
            </div>
          </button>
        </motion.div>
      )}

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(255,153,51,0.4)] transition-all duration-500 ${isOpen ? 'bg-secondary rotate-45' : 'bg-primary hover:scale-110'}`}
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
             <span className={`absolute w-8 h-1 bg-white rounded-full transition-all ${isOpen ? 'rotate-90' : 'translate-y-[-8px]'}`}></span>
             <span className="absolute w-8 h-1 bg-white rounded-full"></span>
             <span className={`absolute w-8 h-1 bg-white rounded-full transition-all ${isOpen ? 'rotate-90' : 'translate-y-[8px]'}`}></span>
        </div>
      </button>
    </div>
  );
}
