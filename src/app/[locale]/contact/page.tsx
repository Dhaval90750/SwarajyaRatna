"use client";
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { submitContact } from '@/app/actions/forms';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function actionHandler(formData: FormData) {
    setStatus("loading");
    const res = await submitContact(formData);
    if(res.success) setStatus("success");
    else setStatus("error");
  }

  return (
    <main className="flex-grow pt-24 pb-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center font-devanagari relative inline-block left-1/2 -translate-x-1/2">
          {t('pageHeading')}
          <div className="h-1 w-1/2 bg-primary mt-2 absolute rounded-full left-1/4"></div>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 bg-orange-50/50 border border-primary/20 p-8 rounded-3xl shadow-xl">
          <div>
            <h2 className="text-3xl font-black text-primary mb-6 font-devanagari">Get in Touch</h2>
            <p className="text-foreground/80 font-sans mb-8 leading-relaxed">
              Reach out to us for collaborations, sponsorships, or any inquiries. Our team is always ready to connect. <strong className="text-primary italic block mt-2">We are ready to perform in your Cultural events!</strong>
            </p>
            <div className="space-y-6">
               <div className="bg-secondary/5 p-4 rounded-xl border">
                 <span className="font-bold font-sans text-primary block mb-1">Email</span>
                 <a href="mailto:swarajyaratna@gmail.com" className="block text-foreground hover:text-primary transition-colors font-medium">swarajyaratna@gmail.com</a>
               </div>
               
               <div className="bg-secondary/5 p-4 rounded-xl border">
                 <span className="font-bold font-sans text-primary block mb-1">YouTube</span>
                 <a href="https://www.youtube.com/@SwarajyaRatna" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-primary transition-colors font-medium">@SwarajyaRatna</a>
               </div>

               <div className="bg-secondary/5 p-4 rounded-xl border">
                 <span className="font-bold font-sans text-primary block mb-1">Instagram</span>
                 <a href="https://www.instagram.com/swarjyaratna" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-primary transition-colors font-medium">@swarjyaratna</a>
               </div>
               
               {/* Embed Static Image for Location */}
               <div className="w-full h-56 rounded-2xl flex items-center justify-center border border-primary/20 overflow-hidden relative shadow-lg">
                 <div className="absolute inset-0 bg-cover bg-center brightness-50 hover:brightness-75 transition-all duration-500" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
                 <div className="relative z-10 flex flex-col items-center">
                    <span className="text-white text-xl font-extrabold font-sans tracking-widest uppercase drop-shadow-lg mb-2">SwarajyaRatna</span>
                    <span className="text-white/80 text-sm font-medium font-info">Pune, Maharashtra</span>
                 </div>
               </div>
            </div>
          </div>
          
          {status === "success" ? (
             <div className="flex flex-col items-center justify-center p-8 bg-primary/10 rounded-3xl border border-primary/20 h-full w-full col-span-1">
               <span className="text-5xl mb-4">📮</span>
               <h3 className="text-2xl font-black text-primary mb-2 font-eczar">Message Sent!</h3>
               <p className="text-foreground/80 font-medium">Our team will get back to you shortly.</p>
             </div>
          ) : (
             <form action={actionHandler} className="space-y-6 flex flex-col justify-between">
               <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground font-sans">{t('name')} *</label>
                    <input name="name" required type="text" className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground font-sans">{t('email')} *</label>
                    <input name="email" required type="email" className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground font-sans">{t('message')} *</label>
                    <textarea name="message" required rows={5} className="w-full p-4 rounded-xl border bg-secondary/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans resize-none"></textarea>
                  </div>
               </div>
               <Button type="submit" size="lg" disabled={status === "loading"} className="w-full h-14 mt-4 text-xl duration-200">
                 {status === "loading" ? "Sending..." : t('send')}
               </Button>
               {status === "error" && <p className="text-red-500 font-bold text-center mt-2">Error connecting to database.</p>}
             </form>
          )}
        </div>
      </div>
    </main>
  );
}
