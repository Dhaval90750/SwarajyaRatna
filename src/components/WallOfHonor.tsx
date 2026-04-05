'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import BilingualHeader from '@/components/BilingualHeader';

import { useState, useEffect } from 'react';

interface Warrior {
  fullName: string;
  city?: string;
}

interface WallOfHonorProps {
  warriors: Warrior[];
}

export default function WallOfHonor({ warriors }: WallOfHonorProps) {
  const t = useTranslations('HomePage');
  const [liveWarriors, setLiveWarriors] = useState<Warrior[]>([]);

  useEffect(() => {
    const fetchWarriors = async () => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!supabaseUrl || !supabaseUrl.startsWith('http') || !supabaseKey) return;
      
      try {
        const res = await fetch(`${supabaseUrl}/rest/v1/registrations?select=fullName,city&limit=20&order=created_at.desc`, {
          method: 'GET',
          headers: {
            "apikey": supabaseKey,
            "Authorization": `Bearer ${supabaseKey}`,
            "Content-Type": "application/json"
          }
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) setLiveWarriors(data);
        }
      } catch (e) {
        // Failing silently to placeholders to avoid console noise for users
        console.warn("Supabase fetch unavailable, using placeholders.");
      }
    };
    fetchWarriors();
  }, []);

  const placeholders = [
    { fullName: "Hrishikesh Tambe", city: "Pune" },
    { fullName: "Dhaval Thaware", city: "Pune" },
    { fullName: "Sahil Bhame", city: "Pune" },
    { fullName: "Tejas Chikane", city: "Pune" },
    { fullName: "Prathamesh Shivpuje", city: "Pune" },
    { fullName: "Ninad Chavan", city: "Pune" },
    { fullName: "Sarthak Mali", city: "Pune" },
  ];

  const displayWarriors = warriors.length > 0 ? warriors : (liveWarriors.length > 0 ? liveWarriors : placeholders);

  return (
    <section className="py-[120px] bg-stone-900 border-y border-accent/20 relative overflow-hidden">
       {/* Stone Texture Background Layer */}
       <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-light.png')] bg-cover mix-blend-overlay grayscale" />

       <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <BilingualHeader 
              marathi="युगनिर्माते | सन्मान भिंती" 
              english="Wall of Honor | Modern Warriors"
              className="text-white"
            />
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {displayWarriors.map((warrior, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-stone-800/40 border border-stone-700/50 rounded-lg text-center backdrop-blur-sm group hover:border-accent/40 transition-all cursor-default"
              >
                <p className="text-stone-400 font-devanagari text-xl font-black group-hover:text-accent transition-colors drop-shadow-md">
                  {warrior.fullName}
                </p>
                <p className="text-[10px] text-stone-600 uppercase tracking-widest mt-1 font-bold group-hover:text-accent/50">
                  {warrior.city || "MAHARASHTRA"}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center text-stone-500 font-info text-sm italic">
            * Names appear here as they register for the mission.
          </div>
       </div>
    </section>
  );
}
