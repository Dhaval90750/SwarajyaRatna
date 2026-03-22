import { useTranslations } from 'next-intl';
import { BookOpen, MonitorPlay, Palette, Theater } from 'lucide-react';
import React from 'react';

export default function ActivitiesPage() {
  const t = useTranslations('ActivitiesPage');

  const activities = [
    { titleKey: 'dramaTitle', descKey: 'dramaDesc', icon: <Theater size={48} className="text-primary" /> },
    { titleKey: 'danceTitle', descKey: 'danceDesc', icon: <Palette size={48} className="text-primary" /> },
    { titleKey: 'digitalTitle', descKey: 'digitalDesc', icon: <MonitorPlay size={48} className="text-primary" /> },
    { titleKey: 'communityTitle', descKey: 'communityDesc', icon: <BookOpen size={48} className="text-primary" /> }
  ];

  return (
    <main className="flex-grow pt-24 pb-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-16 text-center font-devanagari relative inline-block left-1/2 -translate-x-1/2">
          {t('pageHeading')}
          <div className="h-1 w-1/2 bg-primary mt-2 absolute rounded-full left-1/4"></div>
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map(activity => (
            <div key={activity.titleKey} className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="p-6 bg-secondary/5 rounded-2xl shrink-0 group hover:bg-primary/10 transition-colors">
                {activity.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-sans text-foreground mb-3">{t(activity.titleKey)}</h3>
                <p className="text-lg text-foreground/80 leading-relaxed font-sans">{t(activity.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
