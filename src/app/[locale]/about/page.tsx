import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <main className="flex-grow pt-24 pb-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-16 mt-8 text-center">
        
        <section className="bg-secondary/5 p-10 rounded-3xl border border-black/5 hover:border-primary/30 transition-colors shadow-sm">
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6 font-devanagari">{t('visionHeading')}</h2>
          <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed font-sans">{t('visionText')}</p>
        </section>

        <section className="bg-primary/10 p-10 rounded-3xl border border-primary/20 hover:border-primary/50 transition-colors shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full opacity-50"></div>
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6 font-devanagari relative z-10">{t('missionHeading')}</h2>
          <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed font-sans relative z-10">{t('missionText')}</p>
        </section>

        <section className="bg-secondary/5 p-10 rounded-3xl border border-black/5 hover:border-primary/30 transition-colors shadow-sm">
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6 font-devanagari">{t('journeyHeading')}</h2>
          <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed font-sans">{t('journeyText')}</p>
        </section>
        
      </div>
    </main>
  );
}
