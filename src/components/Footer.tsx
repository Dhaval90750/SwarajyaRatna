import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Navigation');
  const tHome = useTranslations('HomePage');

  return (
    <footer className="bg-orange-50 border-t border-primary/20 text-foreground py-16 px-6 mt-auto w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary font-devanagari mb-3 tracking-tight">{tHome('title')}</h2>
          <p className="text-base md:text-lg font-medium opacity-70 font-sans max-w-md mx-auto">{tHome('tagline')}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center text-sm md:text-base font-bold">
          <Link href="/about" className="px-4 py-2 hover:text-primary transition-colors hover:bg-white/50 rounded-lg">{t('about')}</Link>
          <Link href="/contact" className="px-4 py-2 hover:text-primary transition-colors hover:bg-white/50 rounded-lg">{t('contact')}</Link>
          
          <div className="w-full h-px bg-primary/10 md:hidden my-2" />
          
          <a href="https://www.youtube.com/@SwarajyaRatna" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform bg-primary/10 px-5 py-2.5 rounded-full text-primary flex items-center gap-2">
            YouTube
          </a>
          <a href="https://www.instagram.com/swarajyaratna" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform bg-pink-500/10 px-5 py-2.5 rounded-full text-pink-600 flex items-center gap-2">
            Instagram
          </a>
          <a href="https://chat.whatsapp.com/FT7Te9tfUe69MZlKaZxec8" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform bg-green-500/10 px-5 py-2.5 rounded-full text-green-600 flex items-center gap-2">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="text-center text-xs md:text-sm font-medium opacity-40 mt-16 pt-8 border-t border-primary/10">
        &copy; {new Date().getFullYear()} SwarajyaRatna. Crafted with pride in Pune.
      </div>
    </footer>
  );
}
