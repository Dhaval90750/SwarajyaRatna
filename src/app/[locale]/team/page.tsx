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
  const t = useTranslations('TeamPage');
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRefAdvisors = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const coreMembers = teamMembers.filter(m => m.id !== 'jj-dhule' && m.id !== 'rutvik-kulkarni');
  const advisorMembers = teamMembers.filter(m => m.id === 'jj-dhule' || m.id === 'rutvik-kulkarni');

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-grow flex flex-col w-full overflow-x-hidden bg-orange-50/5">
      {/* Header Section */}
      <section className="py-20 px-4 text-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/hero-light.png')] grayscale" />
        <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-primary font-devanagari mb-4 leading-tight drop-shadow-sm">{t('coreHeading')}</h1>
          <div className="h-1.5 w-32 bg-primary mx-auto rounded-full mb-6 shadow-md" />
          <p className="text-stone-500 font-info text-xs md:text-sm uppercase tracking-[0.4em] font-bold">The Royal Archive of SwarajyaRatna</p>
        </MotionDiv>
      </section>

      {/* Core Team Section */}
      <section 
        className="py-12 px-4 md:px-8 relative overflow-hidden group" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={() => scroll('left', scrollRef)} 
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 border border-primary/20 shadow-2xl flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={() => scroll('right', scrollRef)} 
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 border border-primary/20 shadow-2xl flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll Right"
        >
          <ChevronRight size={28} />
        </button>

        <div ref={scrollRef} className="max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-6 pb-10 px-4 md:px-0">
          {coreMembers.map((member) => (
            <div key={member.id} className="flex-shrink-0 w-[280px] md:w-[320px] snap-center">
              <RoyalTeamCard member={member} onClick={() => setActiveMember(member)} />
            </div>
          ))}
          <div className="flex-shrink-0 w-10 h-1" />
        </div>
        
        {/* Fades */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-orange-50/50 to-transparent pointer-events-none z-10" />
      </section>

      <MeherabDivider type="top" color="fill-white" />

      {/* Advisor Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden group">
        <button 
          onClick={() => scroll('left', scrollRefAdvisors)} 
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 border border-primary/20 shadow-2xl flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={() => scroll('right', scrollRefAdvisors)} 
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 border border-primary/20 shadow-2xl flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll Right"
        >
          <ChevronRight size={28} />
        </button>

        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-devanagari mb-4 drop-shadow-sm leading-tight text-metallic-gold">{t('advisorsHeading')}</h2>
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

      {/* Modal */}
      <GauravPatra member={activeMember} onClose={() => setActiveMember(null)} />
    </main>
  );
}
