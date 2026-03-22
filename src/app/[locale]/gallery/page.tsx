import { useTranslations } from 'next-intl';

export default function GalleryPage() {
  const t = useTranslations('GalleryPage');

  // Placeholders for Gallery
  const images = Array.from({ length: 9 }).map((_, i) => `/images/placeholder-${i + 1}.jpg`);

  return (
    <main className="flex-grow pt-24 pb-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center font-devanagari relative inline-block left-1/2 -translate-x-1/2">
          {t('pageHeading')}
          <div className="h-1 w-1/2 bg-primary mt-2 absolute rounded-full left-1/4"></div>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {images.map((src, idx) => (
             <div key={idx} className="aspect-square bg-secondary/5 border border-black/5 rounded-3xl overflow-hidden hover:opacity-80 transition-opacity hover:shadow-xl cursor-pointer flex flex-col items-center justify-center">
               <span className="text-primary/20 font-black text-4xl">Image {idx + 1}</span>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}
