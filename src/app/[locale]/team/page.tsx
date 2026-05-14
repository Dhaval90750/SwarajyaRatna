'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { MotionDiv } from '@/components/animations/MotionElements';
import MeherabDivider from '@/components/MeherabDivider';
import { teamMembers, TeamMember } from '@/data/team';
import RoyalTeamCard from '@/components/RoyalTeamCard';
import GauravPatra from '@/components/GauravPatra';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TeamPage() {
  const tHome = useTranslations('HomePage');
  const tTeam = useTranslations('TeamPage');
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRefAdvisors = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const coreMembers = teamMembers.filter(m => m.category === 'core');
  const advisorMembers = teamMembers.filter(m => m.category === 'advisor');

  // Triple the core members for infinite effect
  const coreExtended = [...coreMembers, ...coreMembers, ...coreMembers];
  const initialOffset = coreMembers.length;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth } = scrollRef.current;
      const itemWidth = scrollWidth / coreExtended.length;
      
      if (scrollLeft < itemWidth * (initialOffset - 1)) {
        scrollRef.current.scrollLeft = scrollLeft + itemWidth * coreMembers.length;
      } else if (scrollLeft > itemWidth * (initialOffset + coreMembers.length + 1)) {
        scrollRef.current.scrollLeft = scrollLeft - itemWidth * coreMembers.length;
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      const itemWidth = scrollWidth / coreExtended.length;
      scrollRef.current.scrollLeft = itemWidth * initialOffset;
    }
  }, []);

  // Auto-scroll logic (smooth and continuous)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const itemWidth = scrollRef.current.querySelector('div')?.clientWidth || 320;
        scrollRef.current.scrollBy({ left: itemWidth + 24, behavior: 'smooth' });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const itemWidth = ref.current.querySelector('div')?.clientWidth || 320;
      ref.current.scrollBy({ 
        left: direction === 'left' ? -(itemWidth + 24) : (itemWidth + 24), 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <main className="flex-grow flex flex-col w-full overflow-x-hidden bg-orange-50/5">

      {/* Advisor Section - Atop */}
      <section className="py-24 px-4 bg-white relative overflow-hidden group">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-devanagari mb-4 drop-shadow-sm leading-tight text-metallic-gold">{tTeam('advisorsHeading')}</h2>
          <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full mb-4" />
          <p className="text-stone-400 font-bold uppercase tracking-[0.2em] text-xs">Royal Proclamation Advisors</p>
        </div>

        <div ref={scrollRefAdvisors} className="max-w-5xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide flex justify-center gap-8 pb-10 px-4 md:px-0">
          {advisorMembers.map((member) => (
            <div key={member.id} className="flex-shrink-0 w-[280px] md:w-[320px] snap-center">
              <RoyalTeamCard member={member} onClick={() => setActiveMember(member)} />
            </div>
          ))}
        </div>
      </section>

      <MeherabDivider type="top" color="fill-white" />

      {/* Core Team Section - Now Infinite */}
      <section 
        className="py-12 px-4 md:px-8 relative overflow-hidden group" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-devanagari mb-4 drop-shadow-sm leading-tight">{tTeam('coreHeading')}</h2>
          <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full mb-4" />
          <p className="text-stone-400 font-bold uppercase tracking-[0.2em] text-xs">The Backbone of SwarajyaRatna</p>
        </div>

        <button 
          onClick={() => scroll('left', scrollRef)} 
          className="absolute left-6 top-1/2 translate-y-4 z-30 w-12 h-12 rounded-full bg-white/90 border border-primary/20 shadow-2xl flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={() => scroll('right', scrollRef)} 
          className="absolute right-6 top-1/2 translate-y-4 z-30 w-12 h-12 rounded-full bg-white/90 border border-primary/20 shadow-2xl flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll Right"
        >
          <ChevronRight size={28} />
        </button>

        <div 
          ref={scrollRef} 
          onScroll={checkScroll}
          className="max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-6 pb-10 px-4 md:px-0"
        >
          {coreExtended.map((member, idx) => (
            <div key={`${member.id}-${idx}`} className="flex-shrink-0 w-[280px] md:w-[320px] snap-center">
              <RoyalTeamCard member={member} onClick={() => setActiveMember(member)} />
            </div>
          ))}
        </div>
        
        {/* Edge Fades for Seamless Infinite Feel */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </section>

      {/* Modal */}
      <GauravPatra member={activeMember} onClose={() => setActiveMember(null)} />
    </main>
  );
}
