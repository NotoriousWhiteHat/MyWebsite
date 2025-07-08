
import React, { useRef, useEffect } from 'react';

interface GameCardProps {
  game: any;
  index: number;
  onClick: () => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const lightOverlay = card.querySelector('.light-overlay') as HTMLElement;
      if (lightOverlay) {
        lightOverlay.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 255, 136, 0.3) 0%, transparent 70%)`;
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full max-w-sm h-96 relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:-translate-y-2"
      style={{
        opacity: 0,
        animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.2}s forwards`
      }}
      onClick={onClick}
    >
      <div className="w-full h-full bg-green-500/5 border border-green-500/20 rounded-2xl backdrop-blur-xl overflow-hidden relative group-hover:bg-green-500/10 group-hover:border-green-500/40 transition-all duration-300">
        
        {/* Light overlay effect */}
        <div className="light-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
        
        {/* Image */}
        <div className="w-full h-3/5 overflow-hidden rounded-t-2xl">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover filter brightness-75 contrast-110 group-hover:brightness-100 group-hover:contrast-125 group-hover:scale-110 transition-all duration-300"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 h-2/5 flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-xl font-semibold text-green-300 mb-2">{game.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2">{game.description}</p>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {game.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
