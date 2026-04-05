'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TeamMember } from '@/data/team';
import { useLocale } from 'next-intl';
import { Linkedin } from 'lucide-react';

interface RoyalTeamCardProps {
  member: TeamMember;
  onClick: () => void;
}

export default function RoyalTeamCard({ member, onClick }: RoyalTeamCardProps) {
  const locale = useLocale();
  const isMarathi = locale === 'mr';

  const handleLinkedinClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (member.linkedin && member.linkedin !== '#') {
      window.open(member.linkedin, '_blank');
    }
  };

  return (
    <motion.div
      layoutId={`card-${member.id}`}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative bg-[#FFF7E6] p-4 rounded-2xl cursor-pointer overflow-hidden transition-all animate-in fade-in zoom-in duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.1)] will-change-transform [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:translateZ(0)]"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('/images/hero-light.png')] mix-blend-multiply grayscale bg-cover" />
      
      {/* Official Logo Seal */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-white/95 rounded-full flex items-center justify-center border-2 border-accent/40 shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20 group-hover:scale-110 transition-transform p-1">
        <Image 
          src="/images/logo-transparent.png" 
          alt="SwarajyaRatna" 
          width={32} 
          height={32} 
          className="object-contain"
        />
      </div>

      {/* Portrait Image Container */}
      <div className="relative w-full aspect-[4/5] mb-5 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
        <Image
          src={member.image}
          alt={member.nameEn}
          fill
          priority
          unoptimized
          className="object-cover contrast-[1.05] brightness-[1.1] transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B2F2F]/30 to-transparent opacity-60" />
      </div>

      {/* Member Info */}
      <div className="relative z-10 space-y-1">
        <h3 className="text-xl md:text-2xl font-black text-[#C2410C] font-devanagari tracking-wider drop-shadow-sm leading-tight">
          {isMarathi ? member.name : member.nameEn}
        </h3>
        
        <p className="text-[10px] font-bold text-[#3B2F2F]/50 uppercase tracking-[0.2em] font-sans">
          {isMarathi ? member.nameEn : member.name}
        </p>
        
        <div className="pt-2">
          <span className="inline-block px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-black text-primary italic">
            {isMarathi ? member.role : member.roleEn}
          </span>
        </div>
      </div>

      {/* Decorative Divider & Social */}
      <div className="mt-5 pt-4 border-t border-[#3B2F2F]/10 flex items-center justify-between relative z-20">
        <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">Archive Record</span>
        
        {member.linkedin ? (
          <button 
            onClick={handleLinkedinClick}
            className="flex items-center gap-2 group/link"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-primary group-hover/link:bg-primary group-hover/link:text-white transition-all shadow-sm border border-primary/10">
              <Linkedin size={14} />
            </div>
            <span className="text-[10px] font-black text-primary underline underline-offset-2 opacity-60 group-hover/link:opacity-100 transition-opacity uppercase tracking-widest">View Identity</span>
          </button>
        ) : (
          <div className="w-8 h-8 flex items-center justify-center opacity-20 grayscale">
            <Linkedin size={14} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
