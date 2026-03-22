'use client';

import { useTranslations } from 'next-intl';
import { MotionDiv } from '@/components/animations/MotionElements';
import MeherabDivider from '@/components/MeherabDivider';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <main className="flex-grow flex flex-col w-full overflow-x-hidden pt-28">
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-orange-50/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-light.png')] bg-cover bg-center opacity-5 blur-[4px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-primary font-devanagari mb-6 drop-shadow-sm">
              {t('visionHeading')}
            </h1>
            <p className="text-xl md:text-3xl text-foreground/80 font-info italic leading-relaxed">
              "{t('visionText')}"
            </p>
          </MotionDiv>
        </div>
      </section>

      <MeherabDivider type="bottom" color="fill-white" />

      {/* Mission & Journey */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-32">
          
          <div className="flex flex-col md:flex-row items-center gap-16">
            <MotionDiv 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-8 font-devanagari">{t('missionHeading')}</h2>
              <div className="p-8 bg-orange-50 border-l-8 border-primary rounded-2xl shadow-lg">
                <p className="text-xl text-foreground/80 leading-relaxed font-sans font-medium">
                  {t('missionText')}
                </p>
              </div>
            </MotionDiv>
            <div className="md:w-1/2 relative">
               <div className="aspect-video bg-primary/5 rounded-[3rem] border-4 border-dashed border-primary/20 flex items-center justify-center text-primary/20 italic font-bold">
                 [Visual Representation]
               </div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>

          <MeherabDivider type="top" color="fill-orange-50/30" />

          <section className="py-20 px-8 bg-orange-50/30 rounded-[4rem] border border-primary/10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-8 font-devanagari">{t('journeyHeading')}</h2>
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-foreground font-info font-bold leading-loose"
              >
                {t('journeyText')}
              </MotionDiv>
            </div>
          </section>

        </div>
      </section>

    </main>
  );
}

