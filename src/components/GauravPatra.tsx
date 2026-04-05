'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { TeamMember } from '@/data/team';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Linkedin, X } from 'lucide-react';
import { useSound } from '@/context/SoundContext';
import { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

interface GauravPatraProps {
  member?: TeamMember | null;
  name?: string;
  role?: string;
  mavalaId?: string;
  onClose?: () => void;
  isStatic?: boolean; // For display without modal logic
}

export default function GauravPatra({ member, name, role, mavalaId, onClose, isStatic }: GauravPatraProps) {
  const locale = useLocale();
  const isMarathi = locale === 'mr';
  const { playSound } = useSound();

  const displayName = member ? (isMarathi ? member.name : member.nameEn) : name;
  const displayRole = member ? (isMarathi ? member.role : member.roleEn) : role;
  const displayHonor = member ? (isMarathi ? member.honorText : member.honorTextEn) : null;
  const displayImage = member ? member.image : "/images/logo-transparent.png";
  const displaySubName = member ? (isMarathi ? member.nameEn : member.name) : (mavalaId ? "Swarajya Mavala" : null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const downloadCertificate = async () => {
    if (scrollRef.current) {
      // Small delay to ensure all assets are rendered
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(scrollRef.current, {
        scale: 4, // 4K quality for printing
        useCORS: true,
        backgroundColor: '#FFF7E6',
        logging: false,
        onclone: (clonedDoc) => {
          // Adjust any elements on clone if needed
        }
      });
      
      const link = document.createElement('a');
      link.download = `SwarajyaRatna_Proclamation_${displayName?.replace(/\s+/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
      
      if (playSound) playSound('seal-break');
    }
  };

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Sound triggers
  useEffect(() => {
    if (member && !isStatic && playSound) {
      playSound('seal-break');
      setTimeout(() => playSound('scroll-unfold'), 400);
    }
  }, [member, playSound, isStatic]);

  if (!member && !name) return null;

  return (
    <AnimatePresence>
      {((!isStatic && member) || (isStatic && name)) && (
        <div 
          className={isStatic ? "relative w-full max-w-2xl mx-auto" : "fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-[6px] bg-black/70"}
          onClick={!isStatic ? onClose : undefined}
        >
          <motion.div
            ref={scrollRef}
            layoutId={!isStatic ? `card-${member?.id}` : undefined}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#FFF7E6] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_80px_rgba(194,65,12,0.05)] border-x-[12px] border-y-[6px] border-[#3B2F2F]/20 rounded-2xl overflow-y-auto max-h-[90vh] scrollbar-hide"
            style={{ transformOrigin: "top" }}
            initial={!isStatic ? { scaleY: 0.2, opacity: 0 } : { opacity: 1 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={!isStatic ? { scaleY: 0.2, opacity: 0 } : undefined}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[url('/images/hero-light.png')] mix-blend-multiply grayscale bg-cover" />
            
            {/* Modal Exit Button */}
            {!isStatic && (
              <button 
                onClick={onClose}
                className="absolute top-10 left-10 z-50 p-2 bg-[#3B2F2F]/10 hover:bg-[#3B2F2F]/20 rounded-full transition-colors text-[#3B2F2F]"
              >
                <X size={24} />
              </button>
            )}

            {/* Gaurav Patra Content */}
            <div className="p-12 md:p-16 md:py-14 relative z-10 text-center flex flex-col items-center">
              
              {/* Royal Banner Header */}
              <div className="w-full mb-6 space-y-2 mt-4">
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-primary/80">
                  || {mavalaId ? "मावळा गौरव" : "गौरव पत्र"} ||
                </h4>
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>

              {/* Portrait Frame - Rajmudra Octagon */}
              <div className="relative w-44 h-44 mb-6 transition-transform duration-500 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-accent/30 z-10" 
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                />
                <div 
                  className="absolute inset-[3px] bg-[#FFF7E6] z-20" 
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                />
                <div 
                  className="absolute inset-[6px] z-30" 
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                >
                  <Image
                    src={displayImage}
                    alt={displayName || "Member"}
                    fill
                    priority
                    unoptimized
                    className="object-cover contrast-[1.05] brightness-[1.05] scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/logo-transparent.png";
                      target.className = "p-4 object-contain opacity-50";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2F2F]/30 to-transparent opacity-60" />
                </div>
              </div>

              {/* Name & Title */}
              <div className="space-y-2 mb-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl font-black text-primary font-devanagari drop-shadow-sm leading-tight"
                >
                  {displayName}
                </motion.h2>
                {displaySubName && (
                  <p className="text-base md:text-lg font-bold text-stone-500 uppercase tracking-[0.3em]">
                    {displaySubName}
                  </p>
                )}
                <div className="inline-block px-10 py-2.5 bg-primary/5 border-2 border-primary/20 rounded-xl text-primary font-black uppercase tracking-[0.2em] mt-6 shadow-sm">
                  {displayRole}
                </div>
                
                {mavalaId && (
                  <div className="mt-6 flex flex-col items-center">
                    <div className="h-0.5 w-12 bg-accent/20 mb-3" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-1">Mavala Identity Code</span>
                    <div className="px-6 py-2 bg-accent/10 border-2 border-accent/20 rounded-lg">
                      <span className="text-xl font-black text-accent tracking-widest">{mavalaId}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Certificate Citation */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="max-w-xl mx-auto space-y-6 mb-10"
              >
                {displayHonor ? (
                  <p className="text-lg md:text-xl text-stone-800 font-info leading-loose italic font-bold">
                    "{displayHonor}"
                  </p>
                ) : (
                  <div className="space-y-4">
                    <p className="text-lg md:text-xl text-stone-800 font-info leading-loose italic font-bold">
                      स्वराज्यरत्न परिवारात आपले सहर्ष स्वागत आहे!
                    </p>
                    <p className="text-sm font-black uppercase tracking-widest text-primary">
                      Registrant of {displayRole}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Download CTA - Pro-Badge Style */}
              <div className="mb-12 no-download-exclude" data-html2canvas-ignore="true">
                <button 
                  onClick={downloadCertificate}
                  className="group relative px-10 py-5 bg-gradient-to-br from-accent to-primary rounded-2xl text-white font-black uppercase tracking-[0.3em] shadow-[0_15px_40px_rgba(194,65,12,0.3)] hover:shadow-[0_20px_50px_rgba(194,65,12,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-xl">📜</span> SAVE PROCLAMATION
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                </button>
                <p className="mt-4 text-[10px] font-bold text-stone-400 uppercase tracking-widest animate-pulse">Ready for Sharing</p>
              </div>

              {/* Verified Archive Footer - Restored Identity Links */}
              <div className="w-full flex flex-col items-center border-t border-stone-200 pt-8 mt-4 gap-4">
                {member?.linkedin && member.linkedin !== '#' ? (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    className="flex flex-col items-center gap-3 group transition-all"
                  >
                    <div className="w-11 h-11 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-primary/10">
                      <Linkedin size={18} />
                    </div>
                    <div className="text-center">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-stone-400 group-hover:text-primary transition-colors">
                        Verified Legacy Identity
                      </span>
                      <span className="block text-xs font-black uppercase tracking-widest text-primary underline underline-offset-4">
                        VERIFY PROFILE
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-white/50 rounded-full flex items-center justify-center p-3 border border-primary/10 shadow-inner opacity-30">
                       <Image src="/images/logo-transparent.png" alt="Seal" width={100} height={100} className="object-contain grayscale contrast-[2]" />
                    </div>
                    <div className="text-center">
                      <span className="block text-[8px] font-black uppercase tracking-[0.4em] text-stone-300 italic">Official Swarajya Archive</span>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <div className="h-[1px] w-4 bg-stone-200" />
                        <span className="block text-[10px] font-black uppercase tracking-widest text-primary/30">Verified Identity</span>
                        <div className="h-[1px] w-4 bg-stone-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
