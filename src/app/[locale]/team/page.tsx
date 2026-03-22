import { useTranslations } from 'next-intl';

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
    <main className="flex-grow pt-24 pb-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto mt-8">
        
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center font-devanagari relative inline-block left-1/2 -translate-x-1/2">
            {t('coreHeading')}
            <div className="h-1 w-1/2 bg-primary mt-2 absolute rounded-full left-1/4"></div>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map(member => (
              <div key={member.name} className="bg-white border border-black/5 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-8 text-center group cursor-default">
                <div className="w-24 h-24 mx-auto bg-secondary/5 group-hover:bg-primary/10 transition-colors duration-300 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-4xl font-black text-primary/50 group-hover:text-primary transition-colors">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-3xl font-calligraphy text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-bold font-info text-lg">{t(`roles.${member.roleKey}`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center font-devanagari relative inline-block left-1/2 -translate-x-1/2">
            {t('advisorsHeading')}
            <div className="h-1 w-1/2 bg-primary mt-2 absolute rounded-full left-1/4"></div>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map(advisor => (
              <div key={advisor.name} className="bg-white border border-black/5 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-8 text-center group cursor-default">
                <div className="w-24 h-24 mx-auto bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-4xl font-black text-primary/50 group-hover:text-primary transition-colors">{advisor.name.charAt(0)}</span>
                </div>
                <h3 className="text-3xl font-calligraphy text-foreground mb-2">{advisor.name}</h3>
                <p className="text-secondary font-bold font-info text-lg">{t(`roles.${advisor.roleKey}`)}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
