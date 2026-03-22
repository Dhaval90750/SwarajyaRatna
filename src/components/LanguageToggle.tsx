'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLanguage(nextLocale: string) {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex bg-secondary/10 rounded-full p-1 overflow-hidden pointer-events-auto border">
      <button
        onClick={() => switchLanguage('en')}
        disabled={isPending}
        className={`px-3 py-1 text-sm rounded-full transition-all duration-300 font-sans ${locale === 'en' ? 'bg-primary text-white font-bold' : 'text-foreground hover:bg-secondary/20'}`}
      >
        🇬🇧 English
      </button>
      <button
        onClick={() => switchLanguage('mr')}
        disabled={isPending}
        className={`px-3 py-1 text-sm rounded-full transition-all duration-300 font-sans ${locale === 'mr' ? 'bg-primary text-white font-bold' : 'text-foreground hover:bg-secondary/20'}`}
      >
        🇮🇳 मराठी
      </button>
    </div>
  );
}
