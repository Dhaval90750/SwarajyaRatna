'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { submitRegistration } from '@/app/actions/forms';
import { MotionDiv } from '@/components/animations/MotionElements';
import MeherabDivider from '@/components/MeherabDivider';

export default function RegisterPage() {
  const t = useTranslations('RegisterPage');
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function actionHandler(formData: FormData) {
    setStatus("loading");
    const res = await submitRegistration(formData);
    if(res.success) setStatus("success");
    else setStatus("error");
  }

  return (
    <main className="flex-grow flex flex-col w-full overflow-x-hidden pt-28 bg-orange-50/10">
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-primary font-devanagari mb-4 leading-tight">
              {t('pageHeading')}
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </MotionDiv>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          {status === "success" ? (
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-2 border-primary/20 text-center p-12 rounded-[3rem] shadow-2xl"
            >
              <span className="text-6xl mb-6 block">🚩</span>
              <h2 className="text-3xl font-black text-primary font-devanagari mb-4">{t('success')}</h2>
              <p className="text-lg text-foreground/70 font-medium">Swarajyacha Dhyas, Ratna cha Gaurav. Our team will contact you soon!</p>
            </MotionDiv>
          ) : (
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-primary/20 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -z-10" />
              
              <form action={actionHandler} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('name')} *</label>
                    <input name="fullName" required type="text" className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('age')} *</label>
                    <input name="age" required type="number" className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('gender')} *</label>
                    <select name="gender" required className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg appearance-none cursor-pointer">
                      <option value="">--</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('contact')} *</label>
                    <input name="phone" required type="tel" className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('email')} *</label>
                    <input name="email" required type="email" className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('city')} *</label>
                    <input name="city" required type="text" placeholder="e.g. Pune" className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('interest')} *</label>
                    <select name="interests" required className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg appearance-none cursor-pointer">
                      <option value="drama">{t('interests.drama')}</option>
                      <option value="dance">{t('interests.dance')}</option>
                      <option value="tech">{t('interests.tech')}</option>
                      <option value="management">{t('interests.management')}</option>
                      <option value="history">{t('interests.history')}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('experience')}</label>
                    <input name="experience" type="text" className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-primary uppercase tracking-widest px-1">{t('whyJoin')} *</label>
                  <textarea name="reason" required rows={4} className="w-full p-4 rounded-2xl border border-primary/10 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-sans text-lg resize-none font-medium"></textarea>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" size="lg" disabled={status === "loading"} className="w-full h-16 text-xl rounded-2xl bg-primary hover:bg-primary/90 text-white font-black shadow-[0_10px_40px_rgba(255,153,51,0.2)] hover:shadow-[0_15px_50px_rgba(255,153,51,0.4)] transition-all transform hover:-translate-y-1">
                    {status === "loading" ? "Registering..." : t('submit')}
                  </Button>
                </div>
                
                {status === "error" && (
                  <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 font-bold text-center mt-4 p-4 bg-red-50 rounded-xl border border-red-100 italic">
                    {t('error') || "Unable to send. Please check your connection or contact us via WhatsApp."}
                  </MotionDiv>
                )}
              </form>
            </MotionDiv>
          )}
        </div>
      </section>

      <MeherabDivider type="top" color="fill-white" />
    </main>
  );
}

