'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useSound } from '@/context/SoundContext';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);
  const { isMuted, toggleMute } = useSound();

  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/team', label: t('team') },
    { href: '/activities', label: t('activities') },
    { href: '/gallery', label: t('gallery') },
    { href: '/register', label: t('register') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/95 backdrop-blur-md border-b-[1px] border-primary/10 flex items-center justify-between px-4 md:px-8 z-[100] transition-all duration-300">
      <Link href="/" className="flex items-center gap-[10px] pl-4 text-xl md:text-3xl font-extrabold font-devanagari group whitespace-nowrap">
        <div className="relative w-10 h-10 shadow-lg border border-[#D4AF37]/30 rounded-lg overflow-hidden bg-stone-900/10 p-1">
          <Image 
            src="/images/logo-transparent.png" 
            alt="SwarajyaRatna Logo" 
            fill 
            className="object-contain drop-shadow-[0_0_8px_rgba(194,65,12,0.3)] group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        <div className="flex flex-col leading-tight pt-1">
          <span className="text-primary tracking-tighter text-2xl drop-shadow-sm font-black">स्वराज्यरत्न</span>
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-[-2px]">SwarajyaRatna</span>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-2">
        {links.map(link => (
          <Link key={link.href} href={link.href} className="px-3 py-2 rounded-sm transition-all font-sans text-[14px] font-bold tracking-wide text-stone-600 hover:text-primary relative group">
            {link.label}
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all"></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative group/ambience">
          <button 
            onClick={toggleMute}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border-2 duration-500 group shadow-md ${
              !isMuted 
                ? "bg-white border-[#C2410C] text-[#C2410C] shadow-[0_0_15px_rgba(194,65,12,0.3)]" 
                : "bg-white border-stone-200 text-stone-400 hover:border-stone-300"
            }`}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="animate-pulse" />}
            <span className="hidden sm:inline text-[10px] font-black uppercase tracking-[0.2em]">Ambience</span>
            {!isMuted && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />}
          </button>
          
          {/* Concept Tooltip Badge */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-3 bg-stone-800 border border-[#D4AF37]/20 text-xs text-white rounded-xl opacity-0 group-hover/ambience:opacity-100 transition-opacity pointer-events-none shadow-2xl z-[101]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full border-8 border-transparent border-bottom-[#3B2F2F]" />
            <p className="font-devanagari font-bold text-center border-b border-[#D4AF37]/20 pb-1 mb-1 text-orange-200">किल्ल्याचा अनुभव</p>
            <p className="font-sans text-[9px] text-center opacity-80 uppercase tracking-widest leading-relaxed">
              Experience the echoes of history with authentic fort sounds & folk music.
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-1.5 text-primary hover:bg-stone-100 rounded transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 bg-white shadow-2xl border border-primary/20 flex flex-col p-8 rounded-[2.5rem] lg:hidden gap-6 animate-in slide-in-from-top-4 duration-300 z-[110]">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-extrabold font-devanagari text-stone-800 hover:text-primary transition-colors text-center py-2">
              {link.label}
            </Link>
          ))}
          <div className="flex justify-center pt-6 border-t border-primary/10">
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
