'use client';

import { cn } from "@/lib/utils";

interface BilingualHeaderProps {
  marathi: string;
  english: string;
  className?: string;
}

import { useLanguage } from "@/context/LanguageContext";

export default function BilingualHeader({ marathi, english, className }: BilingualHeaderProps) {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <div className={cn("flex flex-col gap-1 transition-all duration-500", className)}>
      <h2 className={cn(
        "text-4xl md:text-6xl font-black text-primary font-devanagari tracking-tight leading-tight uppercase transition-all duration-500",
        isMarathi ? "opacity-100 scale-100" : "opacity-60 scale-90"
      )}>
        {marathi}
      </h2>
      <p className={cn(
        "text-lg md:text-xl font-bold text-foreground/75 italic font-info tracking-wider transition-all duration-500",
        isMarathi ? "opacity-60 scale-90" : "opacity-100 scale-100"
      )}>
        {english}
      </p>
    </div>
  );
}
