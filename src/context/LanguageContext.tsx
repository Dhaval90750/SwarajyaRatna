"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

type Language = "en" | "mr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const currentLocale = useLocale() as Language;
  const [language, setLangState] = useState<Language>(currentLocale);
  const router = useRouter();
  const pathname = usePathname();

  // Sync with next-intl locale if it changes via other means
  useEffect(() => {
    setLangState(currentLocale);
  }, [currentLocale]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    setLangState(lang);
    
    // Silently update the URL locale without a full reload for SEO/routing
    router.replace(pathname, { locale: lang });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={`transition-opacity duration-300`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
