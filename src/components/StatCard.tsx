import { useState, useRef } from "react";

interface StatCardProps {
  title: string;
  value: string;
  isLoading?: boolean;
}

const StatCard = ({ title, value, isLoading = false }: StatCardProps) => {
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
      className="relative bg-black border border-zinc-800 rounded-xl overflow-hidden p-6 min-h-[140px] flex flex-col items-center justify-center"
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
          <>
            <div className="h-12 w-24 bg-zinc-800 animate-pulse rounded-md mb-2 mx-auto" />
            <div className="h-4 w-32 bg-zinc-800 animate-pulse rounded-md mx-auto" />
          </>
        ) : (
          <>
            <p className="text-5xl font-bold text-foreground tabular-nums tracking-tight mb-2">
              {value}
            </p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              {title}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default StatCard;
