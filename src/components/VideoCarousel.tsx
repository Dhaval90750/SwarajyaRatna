'use client';

import { useState, useRef, useEffect } from 'react';
import { VideoCard } from './VideoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  videoId: string;
  title: string;
}

export function VideoCarousel({ videos }: { videos: Video[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Triple the videos for infinite effect
  const extendedVideos = [...videos, ...videos, ...videos];
  const initialOffset = videos.length;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const itemWidth = scrollWidth / extendedVideos.length;
      
      // Infinite scroll logic: jump back to middle set if reaching ends
      if (scrollLeft < itemWidth * (initialOffset - 1)) {
        scrollRef.current.scrollLeft = scrollLeft + itemWidth * videos.length;
      } else if (scrollLeft > itemWidth * (initialOffset + videos.length + 1)) {
        scrollRef.current.scrollLeft = scrollLeft - itemWidth * videos.length;
      }

      // Update active index for pagination (relative to original videos)
      const currentRelativeIndex = Math.round(scrollLeft / itemWidth) % videos.length;
      setActiveIndex(currentRelativeIndex);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      const itemWidth = scrollWidth / extendedVideos.length;
      // Start in the middle set
      scrollRef.current.scrollLeft = itemWidth * initialOffset;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.querySelector('div')?.clientWidth || 0;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -itemWidth : itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full py-12 group">
      {/* Navigation Buttons */}
      <div className="absolute top-[45%] -translate-y-1/2 left-4 right-4 flex justify-between z-40 pointer-events-none">
        <button
          onClick={() => scroll('left')}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-95 border border-primary/10"
        >
          <ChevronLeft size={32} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-95 border border-primary/10"
        >
          <ChevronRight size={32} strokeWidth={2.5} />
        </button>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-10"
      >
        {extendedVideos.map((video, index) => (
          <div 
            key={`${video.videoId}-${index}`} 
            className="flex-shrink-0 w-full md:w-1/2 snap-center px-4 flex justify-center"
          >
             <div className="w-full aspect-video relative group/card transition-all duration-500">
                <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full opacity-0 group-hover/card:opacity-30 -z-10 transition-opacity" />
                <div className="h-full w-full">
                  <VideoCard videoId={video.videoId} title={video.title} />
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Edge Fades for Blending */}
      <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      {/* Pagination Indicators (Original count) */}
      <div className="flex justify-center gap-3 mt-8">
        {videos.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-16 bg-primary' : 'w-8 bg-primary/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
