'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { submitRegistration } from '@/app/actions/forms';

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
    <main className="flex-grow pt-24 pb-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center font-devanagari relative inline-block left-1/2 -translate-x-1/2">
          {t('pageHeading')}
          <div className="h-1 w-1/2 bg-primary mt-2 absolute rounded-full left-1/4"></div>
        </h1>

        {status === "success" ? (
          <div className="bg-primary/10 border border-primary/20 text-center p-12 rounded-3xl animate-in fade-in zoom-in duration-500">
            <span className="text-5xl mb-6 block">✨</span>
            <h2 className="text-3xl font-black text-primary font-eczar mb-4">{t('success')}</h2>
          </div>
        ) : (
          <form action={actionHandler} className="bg-orange-50/50 p-8 rounded-3xl border border-primary/20 shadow-xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground font-sans">{t('name')} *</label>
                <input name="fullName" required type="text" className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground font-sans">{t('age')} *</label>
                <input name="age" required type="number" className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground font-sans">{t('gender')} *</label>
                <select name="gender" required className="w-full p-4 rounded-xl border bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans text-black">
                  <option value="" className="text-black bg-white">--</option>
                  <option value="male" className="text-black bg-white">Male</option>
                  <option value="female" className="text-black bg-white">Female</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground font-sans">{t('contact')} *</label>
                <input name="phone" required type="tel" className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground font-sans">{t('email')} *</label>
                <input name="email" required type="email" className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground font-sans">{t('city')} *</label>
                <input name="city" required type="text" className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground font-sans">{t('interest')} *</label>
                <select name="interests" required className="w-full p-4 rounded-xl border bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans text-black">
                  <option value="drama" className="text-black bg-white">{t('interests.drama')}</option>
                  <option value="dance" className="text-black bg-white">{t('interests.dance')}</option>
                  <option value="tech" className="text-black bg-white">{t('interests.tech')}</option>
                  <option value="management" className="text-black bg-white">{t('interests.management')}</option>
                  <option value="history" className="text-black bg-white">{t('interests.history')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground font-sans">{t('experience')}</label>
                <input name="experience" type="text" className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground font-sans">{t('whyJoin')} *</label>
              <textarea name="reason" required rows={4} className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans resize-none"></textarea>
            </div>
            <Button type="submit" size="lg" disabled={status === "loading"} className="w-full h-14 text-xl">
              {status === "loading" ? "Registering..." : t('submit')}
            </Button>
            {status === "error" && <p className="text-red-500 font-bold text-center mt-2">Error connecting to database.</p>}
          </form>
        )}
      </div>
    </main>
  );
}
