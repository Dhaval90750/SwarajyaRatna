'use client';

import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MotionDiv } from '@/components/animations/MotionElements';
import MeherabDivider from '@/components/MeherabDivider';

export default function TeamPage() {
  const t = useTranslations('TeamPage');

  const coreTeam = [
    { name: 'Hrishikesh Tambe', roleKey: 'overall' },
    { name: 'Dhaval Thaware', roleKey: 'backstage' },
    { name: 'Prathamesh Shivpuje', roleKey: 'community' },
    { name: 'Sahil Bhame', roleKey: 'history' },
    { name: 'Sarthak Mali', roleKey: 'expense' },
    { name: 'Ninad Chavan', roleKey: 'dance' },
    { name: 'Tejas Chikane', roleKey: 'tech' }
  ];

  const advisors = [
    { name: 'J. J. Dhule Sir', roleKey: 'mainGuide' },
    { name: 'Rutvik Kulkarni', roleKey: 'history' }
  ];

  return (
    <main className="flex-grow flex flex-col w-full overflow-x-hidden pt-28 bg-orange-50/10">
      
      <section className="py-20 px-4 text-center">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black text-primary font-devanagari mb-4 leading-tight">
            {t('coreHeading')}
          </h1>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-12" />
        </MotionDiv>
        
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {coreTeam.map((member, index) => (
            <TeamCard key={member.name} member={member} t={t} delay={index * 0.1} />
          ))}
        </div>
      </section>

      <MeherabDivider type="top" color="fill-white" />

      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary font-devanagari mb-4">{t('advisorsHeading')}</h2>
          <div className="h-1 w-16 bg-primary/30 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 px-4">
          {advisors.map((advisor, index) => (
            <TeamCard key={advisor.name} member={advisor} t={t} delay={index * 0.2} variant="secondary" />
          ))}
        </div>
      </section>

    </main>
  );
}

function TeamCard({ member, t, delay, variant = 'primary' }: { member: any, t: any, delay: number, variant?: 'primary' | 'secondary' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group perspective-1000"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`p-10 rounded-[2.5rem] border transition-all duration-500 text-center flex flex-col items-center gap-6 h-full ${
          variant === 'primary' 
          ? 'bg-white border-primary/10 group-hover:border-primary/40 shadow-xl group-hover:shadow-primary/10' 
          : 'bg-orange-50 border-primary/20 group-hover:border-primary shadow-lg'
        }`}
      >
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-black text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
          {member.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1 font-sans">{member.name}</h3>
          <p className="text-primary font-bold font-info text-lg uppercase tracking-wider">{t(`roles.${member.roleKey}`)}</p>
        </div>
      </div>
    </motion.div>
  );
}

