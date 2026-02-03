import { useState, useRef } from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  visits: string;
  ccu: string;
  role: string;
  gameLink: string;
  groupLink: string;
}

const ProjectCard = ({ title, image, visits, ccu, role, gameLink, groupLink }: ProjectCardProps) => {
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
      className="relative bg-black border border-zinc-800 rounded-xl overflow-hidden h-full"
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

      {/* Image Section */}
      <div className="aspect-video overflow-hidden bg-black relative z-10">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground text-center mb-1.5">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground text-center">
            {role}
          </p>
        </div>
        
        {/* Stats */}
        <div className="flex gap-10 justify-center mt-6 pt-5 border-t border-zinc-800">
          <div className="text-center">
            <p className="text-[28px] font-bold text-foreground tabular-nums tracking-tight">
              {visits}
            </p>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
              Visits
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-[28px] font-bold text-foreground tabular-nums tracking-tight">
              {ccu}
            </p>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
              Peak CCU
            </p>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 mt-6 pt-5 border-t border-zinc-800 justify-center">
          <button 
            className="bg-foreground text-background px-4 py-2 rounded-lg text-sm 
                       font-medium hover:bg-zinc-200 dark:hover:bg-zinc-300 
                       transition-all duration-200 active:scale-[0.98]"
            onClick={() => window.open(gameLink, '_blank')}
          >
            View Project
          </button>
          
          <button 
            className="bg-transparent text-muted-foreground border border-zinc-800 px-4 py-2 
                       rounded-lg text-sm font-medium hover:border-zinc-600 hover:text-foreground 
                       transition-all duration-200 active:scale-[0.98]"
            onClick={() => window.open(groupLink, '_blank')}
          >
            Group
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;