'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoCard } from './VideoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

interface Video {
  videoId: string;
  title: string;
}

export function VideoCarousel({ videos }: { videos: Video[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextVideo = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl border border-primary/20">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <VideoCard 
              videoId={videos[currentIndex].videoId} 
              title={videos[currentIndex].title} 
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4 z-20 pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevVideo}
            className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all border border-white/30"
          >
            <ChevronLeft size={32} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextVideo}
            className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all border border-white/30"
          >
            <ChevronRight size={32} />
          </Button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "w-10 bg-primary shadow-[0_0_10px_rgba(194,65,12,0.5)]" 
                : "w-3 bg-primary/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
      
      {/* Mobile Swipe Hint */}
      <p className="text-center text-stone-400 text-xs mt-4 uppercase tracking-[0.2em] font-bold md:hidden">
        Swipe or use arrows to explore
      </p>
    </div>
  );
}
