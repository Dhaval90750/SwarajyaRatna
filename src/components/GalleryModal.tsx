'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface GalleryModalProps {
  images: string[];
  initialIndex: number | null;
  onClose: () => void;
}

export default function GalleryModal({ images, initialIndex, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialIndex !== null) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (initialIndex === null) return null;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] flex items-center justify-center bg-[#FFF7E6]/95 backdrop-blur-2xl p-4 md:p-8"
        onClick={onClose}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[310] p-3 bg-primary/10 hover:bg-primary/20 rounded-full text-primary transition-all hover:scale-110"
        >
          <X size={28} />
        </button>

        {/* Main Image View */}
        <div 
          className="relative max-w-[90vw] max-h-[70vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] bg-white"
          >
            <img 
              src={images[currentIndex]} 
              alt={`Gallery Image ${currentIndex + 1}`}
              className="max-w-full max-h-[70vh] object-contain block"
            />
            
            {/* Overlay Info - Light Theme */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white/40 to-transparent">
               <p className="text-primary/60 text-xs font-black uppercase tracking-[0.4em] mb-1">Event Showcase</p>
               <h3 className="text-stone-800 text-2xl md:text-3xl font-black font-devanagari">स्वराज्यरत्न उपक्रम - {currentIndex + 1}</h3>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:-left-20 p-4 bg-white shadow-xl hover:bg-primary hover:text-white rounded-full text-primary transition-all hover:scale-110 active:scale-95 border border-primary/10"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:-right-20 p-4 bg-white shadow-xl hover:bg-primary hover:text-white rounded-full text-primary transition-all hover:scale-110 active:scale-95 border border-primary/10"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        </div>

        {/* Bottom Thumbnail Strip - Reduced Dimension & White Theme */}
        <div className="absolute bottom-6 left-0 right-0 px-4 flex justify-center overflow-hidden">
           <div 
             className="flex gap-3 overflow-x-auto scrollbar-hide py-3 px-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-primary/10 shadow-2xl max-w-[80vw]"
             onClick={(e) => e.stopPropagation()}
           >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${idx === currentIndex ? 'border-primary scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
           </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
