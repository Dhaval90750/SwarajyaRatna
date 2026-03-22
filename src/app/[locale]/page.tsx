'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { VideoCard } from '@/components/VideoCard';
import { BookOpen, MonitorPlay, Palette, Theater, Flag, Users, Award } from 'lucide-react';
import { MotionDiv } from '@/components/animations/MotionElements';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import MeherabDivider from '@/components/MeherabDivider';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const timelineData = [
    { year: "2022", icon: <Flag />, title: "The Foundation", desc: "Started with 7 dedicated members in Pune." },
    { year: "2023", icon: <Users />, title: "Community Growth", desc: "Expanded to 50+ members across cultural and technical domains." },
    { year: "2024", icon: <Award />, title: "Cultural Excellence", desc: "100+ active members today, reaching thousands through digital media." }
  ];

  return (
    <main className="flex-grow flex flex-col w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/40 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 blur-[5px] scale-105 opacity-95" 
          style={{ backgroundImage: "url('/images/hero-light.png')" }} 
        />
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-20 md:pt-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-primary mb-4 md:mb-6 font-manthan drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-foreground font-bold font-info mb-8 md:mb-12 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] max-w-2xl px-4 italic">
            {t('tagline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0 mt-4">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-lg md:text-xl h-14 md:h-16 px-8 md:px-12 rounded-full font-black shadow-[0_10px_30px_rgba(255,153,51,0.3)] hover:shadow-[0_15px_50px_rgba(255,153,51,0.5)] transition-all bg-primary text-white border-none">{t('heroCtaJoin')}</Button>
            </Link>
            <Link href="https://www.youtube.com/@SwarajyaRatna" target="_blank" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full text-lg md:text-xl h-14 md:h-16 px-8 md:px-12 rounded-full font-bold border-primary text-primary hover:bg-primary/5 bg-white/40 backdrop-blur-md transition-all">{t('heroCtaWatch')}</Button>
            </Link>
          </div>
        </MotionDiv>
      </section>

      <MeherabDivider type="bottom" color="fill-orange-50/20" />

      {/* Journey Timeline */}
      <section ref={scrollRef} className="py-24 bg-orange-50/20 px-4 overflow-hidden relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-devanagari text-center mb-24">Our Cultural Journey</h2>
          
          <div className="relative">
            {/* Center Line */}
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="absolute left-1/2 -translate-x-1/2 w-1 bg-primary/20 h-full origin-top hidden md:block"
            />
            
            <div className="space-y-24">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center md:block">
                    <MotionDiv 
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={`p-8 bg-white rounded-[2rem] shadow-xl border border-primary/10 max-w-md ${index % 2 === 1 ? 'md:text-right ml-auto' : 'mr-auto'}`}
                    >
                      <span className="text-primary font-black text-4xl mb-4 block">{item.year}</span>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-foreground/70 font-medium">{item.desc}</p>
                    </MotionDiv>
                  </div>
                  
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,153,51,0.3)] border-4 border-white">
                    {item.icon}
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-devanagari">{t('aboutHeading')}</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-info font-bold">{t('aboutText')}</p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
             <MotionDiv 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
               className="p-8 bg-white border border-primary/10 hover:border-primary/30 transition-colors rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-5xl md:text-6xl font-extrabold text-primary mb-3">
                  <AnimatedCounter from={2020} to={2022} />
                </span>
                <span className="text-base font-bold text-foreground opacity-80 uppercase tracking-widest">{t('statsFounded')}</span>
             </MotionDiv>
             <MotionDiv 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
               className="p-8 bg-orange-50 border border-primary/20 hover:border-primary/50 transition-colors rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-5xl md:text-6xl font-extrabold text-primary mb-3">
                  <AnimatedCounter from={0} to={100} />+
                </span>
                <span className="text-base font-bold text-foreground opacity-80 uppercase tracking-widest">{t('statsMembers')}</span>
             </MotionDiv>
             <MotionDiv 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
               className="p-8 bg-white border border-primary/10 hover:border-primary/30 transition-colors rounded-3xl flex flex-col items-center justify-center text-center shadow-sm col-span-2">
                <span className="text-5xl md:text-6xl font-extrabold text-primary mb-3">
                  <AnimatedCounter from={0} to={7} />
                </span>
                <span className="text-base font-bold text-foreground opacity-80 uppercase tracking-widest">{t('statsTeam')}</span>
             </MotionDiv>
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-devanagari mb-4">{t('videosHeading')}</h2>
              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>
            <Link href="https://www.youtube.com/@SwarajyaRatna" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">{t('videosMore')}</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <VideoCard videoId="IPS9QY4RqVI" title="|| छाव्याचा अग्निदिव्य || - Act by SwarajyaRatna Team" />
            <VideoCard videoId="lcOQD_0EP6I" title="'Raja ShivChhatrapati' - Epic Act by SwarajyaRatna" />
          </div>
        </div>
      </section>

      <MeherabDivider type="top" color="fill-orange-50/30" />

      {/* Core Activities */}
      <section className="py-24 px-4 bg-orange-50/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-devanagari mb-16">{t('activitiesHeading')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ActivityCard delay={0.1} icon={<Theater size={40} className="text-primary"/>} title={t('activityDrama')} />
            <ActivityCard delay={0.25} icon={<Palette size={40} className="text-primary"/>} title={t('activityDance')} />
            <ActivityCard delay={0.4} icon={<MonitorPlay size={40} className="text-primary"/>} title={t('activityDigital')} />
            <ActivityCard delay={0.55} icon={<BookOpen size={40} className="text-primary"/>} title={t('activityEdu')} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 text-center rounded-t-[3rem] shadow-2xl relative overflow-hidden mt-12 bg-orange-50 border-t border-primary/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 blur-[2px]" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary font-devanagari mb-8 drop-shadow-sm">{t('ctaHeading')}</h2>
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto text-xl h-16 px-12 bg-primary hover:bg-primary/80 border-none text-white rounded-full font-black shadow-[0_0_40px_rgba(255,153,51,0.3)] hover:shadow-[0_0_60px_rgba(255,153,51,0.6)] hover:-translate-y-1 transition-all">
              {t('ctaButton')}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ActivityCard({ icon, title, delay }: { icon: React.ReactNode, title: string, delay: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="bg-white border border-primary/10 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(255,153,51,0.15)] transition-all duration-300 p-8 rounded-3xl flex flex-col items-center text-center gap-6 group cursor-default h-full"
      >
        <div className="p-6 bg-orange-50 rounded-full group-hover:bg-primary/10 transition-colors duration-300 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-info text-foreground">{title}</h3>
      </div>
    </motion.div>
  );
}
