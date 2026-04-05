import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Navigation');
  const tHome = useTranslations('HomePage');

  return (
    <footer className="bg-orange-50 border-t border-primary/20 text-foreground py-12 px-6 mt-auto w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black text-primary font-devanagari mb-2 tracking-tight">{tHome('title')}</h2>
          <p className="text-base font-medium opacity-70 font-sans">{tHome('tagline')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 items-center text-base font-bold text-foreground/80">
          <Link href="/about" className="hover:text-primary transition-colors underline-offset-4 hover:underline">{t('about')}</Link>
          <Link href="/contact" className="hover:text-primary transition-colors underline-offset-4 hover:underline">{t('contact')}</Link>
          <a href="https://www.youtube.com/@SwarajyaRatna" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors bg-primary/10 px-4 py-2 rounded-full text-primary">YouTube</a>
          <a href="https://www.instagram.com/swarjyaratna" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors bg-pink-500/10 px-4 py-2 rounded-full text-pink-600">Instagram</a>
        </div>
      </div>
      <div className="text-center text-sm font-medium opacity-40 mt-12 pt-6 border-t border-primary/10">
        &copy; {new Date().getFullYear()} SwarajyaRatna. Crafted with pride in Pune.
      </div>
    </footer>
  );
}
