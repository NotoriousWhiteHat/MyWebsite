import { useState, useRef } from "react";

interface StatCardProps {
  value: string;
  label: string;
  isLoading?: boolean;
}

const StatCard = ({ value, label, isLoading }: StatCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-black/80 border border-zinc-800 rounded-xl overflow-hidden px-8 py-6 min-w-[180px]"
      style={{ 
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* Blue gradient glow that follows mouse */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)',
            inset: 0,
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          } as React.CSSProperties}
        />
      )}

      {/* Content */}
      <div className="relative z-10 text-center">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-10 bg-zinc-800 rounded w-24 mx-auto mb-2"></div>
            <div className="h-4 bg-zinc-800 rounded w-20 mx-auto"></div>
          </div>
        ) : (
          <>
            <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums tracking-tight">
              {value}
            </p>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
              {label}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default StatCard;