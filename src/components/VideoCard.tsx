export function VideoCard({ title, videoId }: { title?: string; videoId: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-secondary/10 border border-primary/20 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group">
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title || 'YouTube Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {title && (
        <div className="p-4 bg-transparent">
          <h3 className="font-sans font-bold text-foreground text-lg line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
        </div>
      )}
    </div>
  );
}
