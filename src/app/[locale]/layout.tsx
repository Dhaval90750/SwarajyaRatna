import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Eczar, Gotu, Kalam, Yatra_One, Tiro_Devanagari_Marathi } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import LoadingScreen from '@/components/LoadingScreen';
import { SoundProvider } from '@/context/SoundContext';
import { LanguageProvider } from '@/context/LanguageContext';

const eczar = Eczar({
  subsets: ['devanagari', 'latin'],
  variable: '--font-eczar',
  weight: ['400', '600', '700', '800'],
});

const gotu = Gotu({
  subsets: ['devanagari', 'latin'],
  variable: '--font-gotu',
  weight: ['400'],
});

const kalam = Kalam({
  subsets: ['devanagari', 'latin'],
  variable: '--font-kalam',
  weight: ['400', '700'],
});

const yatraOne = Yatra_One({
  subsets: ['devanagari', 'latin'],
  variable: '--font-yatra',
  weight: ['400'],
});

const tiroDevanagari = Tiro_Devanagari_Marathi({
  subsets: ['devanagari'],
  variable: '--font-tiro',
  weight: ['400'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    template: '%s | SwarajyaRatna',
    default: 'SwarajyaRatna - Cultural Movement',
  },
  description: 'Swarajyacha Dhyas, Ratnancha Gaurav. A premier youth-driven cultural movement in Maharashtra promoting Maratha history, arts, and community engagement.',
  openGraph: {
    title: 'SwarajyaRatna - Cultural Movement',
    description: 'Swarajyacha Dhyas, Ratnancha Gaurav. Joining generations through Marathi culture and heritage.',
    url: 'https://github.com/Dhaval90750/SwarajyaRatna',
    siteName: 'SwarajyaRatna',
    locale: 'mr_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwarajyaRatna - Cultural Movement',
    description: 'A premier youth-driven cultural movement in Maharashtra promoting Maratha history.',
  },
};

export default async function LocaleLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${eczar.variable} ${gotu.variable} ${kalam.variable} ${yatraOne.variable} ${tiroDevanagari.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col font-sans overflow-x-hidden p-0 m-0">
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            <SoundProvider>
              <LoadingScreen />
              <Navbar />
              <div className="flex-grow pt-16">
                {props.children}
              </div>
              <Footer />
              <FloatingActionButton />
            </SoundProvider>
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
