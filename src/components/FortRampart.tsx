'use client';

interface FortRampartProps {
  type: 'top' | 'bottom';
  color?: string;
  className?: string;
}

export default function FortRampart({ type, color = 'bg-stone', className }: FortRampartProps) {
  return (
    <div 
      className={`absolute bottom-0 w-full h-[60px] md:h-[80px] z-30 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[url('/images/fort-wall-pattern.png')] bg-repeat-x bg-bottom bg-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" />
    </div>
  );
}
