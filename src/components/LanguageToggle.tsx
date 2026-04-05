'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useLocale } from 'next-intl';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const locale = useLocale();

  return (
    <div className="flex bg-[#FFF7E6]/10 backdrop-blur-md rounded-full p-1 border border-[#D4AF37]/30 shadow-inner h-[40px]">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 flex items-center text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-500 ${
          language === 'en' 
            ? 'bg-[#FFF7E6] text-[#C2410C] shadow-md border border-[#C2410C]/20' 
            : 'text-parchment/60 hover:text-parchment hover:bg-white/5'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('mr')}
        className={`px-4 flex items-center text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-500 ${
          language === 'mr' 
            ? 'bg-[#C2410C] text-[#FFF7E6] shadow-[0_0_15px_rgba(194,65,12,0.4)]' 
            : 'text-parchment/60 hover:text-primary hover:bg-white/5'
        }`}
      >
        मराठी
      </button>
    </div>
  );
}
