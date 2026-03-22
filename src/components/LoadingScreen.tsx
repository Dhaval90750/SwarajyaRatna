'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for cinematic effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-8"
        >
          <div className="relative">
             {/* Saffron Pulse */}
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150"
             />
             
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="relative w-32 h-32 md:w-48 md:h-48"
             >
                <img src="/images/logo-transparent.png" alt="Loading Logo" className="w-full h-full object-contain" />
             </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="h-1 w-24 md:w-32 bg-primary/20 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-primary"
               />
            </div>
            <span className="text-primary font-black tracking-[0.2em] font-devanagari text-lg uppercase animate-pulse">SwarajyaRatna</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
