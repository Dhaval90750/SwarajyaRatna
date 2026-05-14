export function VideoCard({ title, videoId }: { title?: string; videoId: string }) {
  return (
    <div className="w-full aspect-video group">
      <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.25)] transition-all duration-700 group-hover:scale-[1.01] group-hover:shadow-[0_50px_120px_rgba(194,65,12,0.15)] backdrop-blur-sm">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title || 'YouTube Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] rounded-[inherit]" />
        {/* Title Overlay - Soft Blend */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <h3 className="font-sans font-bold text-white text-xl md:text-2xl text-center drop-shadow-md">
              {title}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
