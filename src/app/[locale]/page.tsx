'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { VideoCard } from '@/components/VideoCard';
import { Button } from '@/components/ui/Button';
import MeherabDivider from '@/components/MeherabDivider';
import { BookOpen, MonitorPlay, Palette, Theater } from 'lucide-react';
import { MotionDiv } from '@/components/animations/MotionElements';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import FortRampart from '@/components/FortRampart';
import BilingualHeader from '@/components/BilingualHeader';
import StoneEtchedText from '@/components/animations/StoneEtchedText';
import ShieldButton from '@/components/ShieldButton';
import TimelineMilestone from '@/components/TimelineMilestone';
import { useSound } from '@/context/SoundContext';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const scrollRef = useRef(null);
  const { playSound } = useSound();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const { scrollY } = useScroll();
  const yFort = useTransform(scrollY, [0, 800], [0, 150]); 
  const yMist = useTransform(scrollY, [0, 800], [0, 300]);

  const timelinePathLength = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  // Sound Triggers
  useEffect(() => {
    playSound('fort_bg'); // Base layer
  }, []);

  useEffect(() => {
    if (scrollYProgress.get() > 0.1 && scrollYProgress.get() < 0.9) {
      playSound('marching_rhythm');
    }
  }, [scrollYProgress]);

  const timelineData = [
    { year: "2022", marathiTitle: "पायाभरणी", englishTitle: "The Foundation", desc: "Started with 7 dedicated members in Pune, laying the cornerstone of the SwarajyaRatna movement." },
    { year: "2023", marathiTitle: "सामाजिक विस्तार", englishTitle: "Community Growth", desc: "Expanded to 50+ members across cultural and technical domains, reaching local colleges." },
    { year: "2024", marathiTitle: "सांस्कृतिक उत्कृष्टता", englishTitle: "Cultural Excellence", desc: "100+ active members today, redefining historical storytelling for the digital age." }
  ];

  return (
    <main className="flex-grow flex flex-col w-full overflow-x-hidden pt-0">
      {/* Section 1: The Grand Gateway (Sunlit Proclamation) */}
      <section className="relative w-full min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-white max-w-full">
        {/* Subtle Solar Radial Gradient Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_20%,_#FFF7E6_60%,_rgba(255,153,51,0.1)_100%)] z-0" />
        <div className="absolute inset-0 bg-[url('/images/hero-light.png')] opacity-10 bg-cover bg-center mix-blend-multiply z-0 pointer-events-none" />
        
        {/* Layer 2: Main Proclamation Content */}
        <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
          <StoneEtchedText 
            text="स्वराज्यरत्न" 
            className="text-[clamp(64px,14vw,160px)] leading-[0.8] mb-8" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col items-center w-full"
          >
            {/* Tagline */}
            <div className="mb-10">
              <BilingualHeader 
                marathi="स्वराज्याचा ध्यास, रत्नांचा गौरव" 
                english="Swarajyacha Dhyas, Ratnancha Gaurav"
                className="text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
              />
              <div className="h-1 w-32 bg-primary mt-6 mx-auto rounded-full shadow-[0_2px_10px_rgba(194,65,12,0.3)]" />
            </div>
            
            <p className="max-w-2xl text-lg md:text-2xl uppercase tracking-[0.3em] text-primary font-black mb-16 drop-shadow-sm font-yatra leading-relaxed opacity-90">
              {t('taglineSub')}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
              <Link href="/register">
                <ShieldButton className="w-full sm:w-auto h-20 text-3xl px-12 bg-primary hover:bg-primary/90 text-white shadow-xl">{t('heroCtaJoin')}</ShieldButton>
              </Link>
              <Link href="https://www.youtube.com/@SwarajyaRatna" target="_blank">
                <ShieldButton variant="outline" className="w-full sm:w-auto h-20 text-3xl px-12 border-primary/30 text-primary hover:bg-primary/5">{t('heroCtaWatch')}</ShieldButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transition: Heritage Rampart (Animated) */}
      <motion.div 
        animate={{ backgroundPositionX: ["0px", "1000px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="w-full h-10 bg-[url('/images/fort-wall-pattern.png')] bg-repeat-x bg-contain relative z-0 opacity-40 grayscale"
      />

      {/* Section 2: The Campaign Trail (Timeline) */}
      <section ref={scrollRef} className="py-10 bg-[#FFF7E6] px-4 overflow-visible relative z-20">
        {/* Parchment Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/hero-light.png')] mix-blend-overlay grayscale bg-cover" />
        <div className="max-w-6xl mx-auto relative border-b border-stone-200/60 pb-10">
          <div className="text-center mb-8">
            <BilingualHeader 
              marathi="आमचा सांस्कृतिक प्रवास" 
              english="Our Cultural Journey"
              className="mb-4"
            />
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="relative">
            {/* The Drawn Campaign Path (Heritage Axis) */}
            <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 hidden md:block z-0 pointer-events-none">
              <div className="w-full h-0.5 bg-stone-300/20 border-t border-dashed border-stone-400/40 shadow-inner" />
              <motion.div 
                style={{ scaleX: timelinePathLength }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] via-[#C2410C] to-[#D4AF37] origin-left shadow-[0_0_20px_rgba(194,65,12,0.6)] rounded-full" 
              />
            </div>
            
            {/* Balanced Horizontal Timeline Path */}
            <div className="flex flex-row items-center justify-center relative w-full overflow-x-auto md:overflow-x-visible py-20 no-scrollbar px-4 md:px-0 gap-8 md:gap-16">
              {timelineData.map((item, index) => (
                <div key={index} className="shrink-0">
                  <TimelineMilestone 
                    year={item.year}
                    marathiTitle={item.marathiTitle}
                    englishTitle={item.englishTitle}
                    desc={item.desc}
                    delay={0.2 * index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-background px-4 border-b border-stone-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-devanagari">{t('aboutHeading')}</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-info font-bold">{t('aboutText')}</p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
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
               className="p-6 bg-white border border-primary/10 hover:border-primary/30 transition-colors rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  <AnimatedCounter from={0} to={7} />
                </span>
                <span className="text-[10px] font-bold text-foreground opacity-80 uppercase tracking-[0.15em]">{t('statsTeam')}</span>
             </MotionDiv>
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-12 px-4 bg-background relative overflow-hidden">
        {/* Separation Divider (Animated) */}
        <motion.div 
          animate={{ backgroundPositionX: ["0px", "-1000px"] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="w-full h-8 bg-[url('/images/fort-wall-pattern.png')] bg-repeat-x bg-contain opacity-30 mb-20" 
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
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
      <section className="py-12 px-4 bg-orange-50/30 border-t border-primary/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-devanagari mb-8">{t('activitiesHeading')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ActivityCard delay={0.1} icon={<Theater size={40} className="text-primary"/>} title={t('activityDrama')} />
            <ActivityCard delay={0.25} icon={<Palette size={40} className="text-primary"/>} title={t('activityDance')} />
            <ActivityCard delay={0.4} icon={<MonitorPlay size={40} className="text-primary"/>} title={t('activityDigital')} />
            <ActivityCard delay={0.55} icon={<BookOpen size={40} className="text-primary"/>} title={t('activityEdu')} />
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-24 px-4 text-center rounded-t-[3rem] shadow-2xl relative overflow-hidden mt-0 bg-orange-50 border-t border-primary/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 blur-[2px]" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary font-devanagari mb-8 drop-shadow-sm">{t('ctaHeading')}</h2>
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto text-xl h-16 px-12 bg-primary hover:bg-primary/80 border-none text-white rounded-full font-black shadow-[0_0_40px_rgba(255,153,51,0.3)] hover:shadow-[0_0_60px_rgba(255,153,51,0.6)] hover:-translate-y-1 transition-all">
              {t('ctaButton')}
            </Button>
          </Link>
          <p className="mt-8 text-primary font-bold italic text-lg lg:text-xl opacity-90">{t('serviceTagline')}</p>
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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

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
