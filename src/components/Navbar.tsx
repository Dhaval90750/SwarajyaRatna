'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useSound } from '@/context/SoundContext';
import Image from 'next/image';
import { IMAGES } from '@/data/assets';

import { AnimatePresence, motion } from 'framer-motion';

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
      <Link href="/" className="flex items-center gap-[8px] md:gap-[10px] pl-2 md:pl-4 text-xl md:text-3xl font-extrabold font-devanagari group whitespace-nowrap">
        <div className="relative w-8 h-8 md:w-10 md:h-10 shadow-lg border border-[#D4AF37]/30 rounded-lg overflow-hidden bg-stone-900/10 p-1">
          <Image 
            src={IMAGES.logo.transparent} 
            alt="SwarajyaRatna Logo" 
            fill 
            className="object-contain drop-shadow-[0_0_8px_rgba(194,65,12,0.3)] group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        <div className="flex flex-col leading-tight pt-1">
          <span className="text-primary tracking-tighter text-lg md:text-2xl drop-shadow-sm font-black">स्वराज्यरत्न</span>
          <span className="text-[8px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-[-2px]">SwarajyaRatna</span>
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
        <div className="hidden md:block">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-primary hover:bg-stone-100 rounded-full transition-colors z-[120]" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[110] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[115] lg:hidden flex flex-col p-8 pt-24"
          >
            <div className="flex flex-col gap-2">
              {links.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="block text-2xl font-black font-devanagari text-stone-800 hover:text-primary transition-colors py-3 border-b border-stone-100"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto pt-10 flex flex-col gap-6">
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-2xl">
                <span className="font-bold text-stone-600">Language / भाषा</span>
                <LanguageToggle />
              </div>
              
              <div className="text-center text-stone-400 text-xs font-bold uppercase tracking-widest">
                SwarajyaRatna Cultural Movement
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
