'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-20 bg-white/70 backdrop-blur-xl border border-primary/20 rounded-[2rem] flex items-center justify-between px-6 md:px-10 z-[100] shadow-[0_10px_40px_rgba(255,153,51,0.1)]">
      <Link href="/" className="flex items-center gap-3 text-xl md:text-2xl font-extrabold text-primary font-devanagari group whitespace-nowrap">
        <Image src="/images/logo.png" alt="SwarajyaRatna Logo" width={40} height={40} className="object-contain drop-shadow-[0_0_10px_rgba(255,153,51,0.4)] group-hover:scale-110 transition-transform duration-500" />
        <span className="hidden sm:inline">SwarajyaRatna</span>
      </Link>

      <div className="hidden lg:flex items-center gap-2">
        {links.map(link => (
          <Link key={link.href} href={link.href} className="px-4 py-2 hover:bg-primary/10 rounded-full transition-all font-manoja text-lg tracking-wide hover:text-primary relative group">
            {link.label}
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all"></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white/95 backdrop-blur-2xl border border-primary/20 flex flex-col p-6 rounded-[2rem] lg:hidden gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-extrabold font-devanagari text-foreground hover:text-primary transition-colors text-center py-2">
              {link.label}
            </Link>
          ))}
          <div className="flex justify-center pt-4 border-t border-primary/10">
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
