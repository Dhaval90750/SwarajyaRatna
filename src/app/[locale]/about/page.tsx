'use client';

import { useTranslations } from 'next-intl';
import { MotionDiv } from '@/components/animations/MotionElements';
import MeherabDivider from '@/components/MeherabDivider';
import { teamMembers, TeamMember } from '@/data/team';
import RoyalTeamCard from '@/components/RoyalTeamCard';
import GauravPatra from '@/components/GauravPatra';
import { useState } from 'react';
import { IMAGES } from '@/data/assets';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const teamT = useTranslations('TeamPage');
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <main className="flex-grow flex flex-col w-full overflow-x-hidden pt-20 md:pt-28">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-orange-50/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-light.png')] bg-cover bg-center opacity-5 blur-[4px]" style={{ backgroundImage: `url(${IMAGES.backgrounds.light})` }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-black text-primary font-devanagari mb-6 drop-shadow-sm leading-tight">
              {t('visionHeading')}
            </h1>
            <p className="text-lg md:text-3xl text-foreground/80 font-info italic leading-relaxed">
              "{t('visionText')}"
            </p>
          </MotionDiv>
        </div>
      </section>

      <MeherabDivider type="bottom" color="fill-white" />

      {/* Mission & Journey */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-20 md:space-y-32">
          
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <MotionDiv 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 md:mb-8 font-devanagari">{t('missionHeading')}</h2>
              <div className="p-6 md:p-8 bg-orange-50 border-l-4 md:border-l-8 border-primary rounded-2xl shadow-lg">
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-sans font-medium">
                  {t('missionText')}
                </p>
              </div>
            </MotionDiv>
            <div className="md:w-1/2 relative group w-full">
               <div className="aspect-video bg-primary/5 rounded-[2rem] md:rounded-[3rem] border border-primary/20 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group-hover:shadow-[0_0_40px_rgba(194,65,12,0.3)] transition-all duration-500">
                  <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${IMAGES.backgrounds.hero})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
                  <div className="relative z-10 flex flex-col items-center p-6 md:p-8 text-center mt-auto w-full">
                    <span className="text-[#D4AF37] text-3xl md:text-4xl mb-2 drop-shadow-md">⚔️</span>
                    <h3 className="text-white font-devanagari text-xl md:text-2xl font-bold tracking-wider">SwarajyaRatna</h3>
                    <p className="text-white/80 font-info text-[10px] md:text-sm uppercase tracking-[0.2em] mt-2">Cultural Movement</p>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-primary/20 rounded-full blur-3xl opacity-50" />
            </div>
          </div>

          <MeherabDivider type="top" color="fill-orange-50/30" />

          <section className="py-12 md:py-20 px-6 md:px-8 bg-orange-50/30 rounded-[2rem] md:rounded-[4rem] border border-primary/10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 md:mb-8 font-devanagari">{t('journeyHeading')}</h2>
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-lg md:text-2xl text-foreground font-info font-bold leading-relaxed md:leading-loose"
              >
                {t('journeyText')}
              </MotionDiv>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 bg-white border border-primary/10 rounded-[2rem] md:rounded-[3rem] shadow-sm"
            >
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 md:mb-6 font-devanagari">{t('focusHeading')}</h3>
              <p className="text-base md:text-lg text-foreground/70 font-medium leading-relaxed italic border-l-4 border-primary pl-4 md:pl-6">
                "{t('focusText')}"
              </p>
            </MotionDiv>
            
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10 bg-primary/5 border border-primary/10 rounded-[2rem] md:rounded-[3rem] shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-primary/10 rounded-full blur-3xl" />
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 md:mb-6 font-devanagari">{t('affiliationsHeading')}</h3>
              <p className="text-base md:text-lg text-foreground/80 font-bold leading-relaxed">
                {t('affiliationsText')}
              </p>
            </MotionDiv>
          </div>

        </div>
      </section>

      {/* Royal Archive: Team Section */}
      <section className="py-20 md:py-32 px-4 bg-orange-50/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/hero-light.png')] bg-cover mix-blend-multiply grayscale" style={{ backgroundImage: `url(${IMAGES.backgrounds.light})` }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-primary font-devanagari mb-4 drop-shadow-sm">
              {teamT('coreHeading')}
            </h2>
            <div className="h-1.5 w-24 md:w-32 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <RoyalTeamCard 
                key={member.id} 
                member={member} 
                onClick={() => setActiveMember(member)} 
              />
            ))}
          </div>
        </div>

        {/* The Honor Scroll Component (Modal) */}
        <GauravPatra 
          member={activeMember} 
          onClose={() => setActiveMember(null)} 
        />
      </section>

    </main>
  );
}

