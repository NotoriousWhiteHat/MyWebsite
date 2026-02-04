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

interface GlowButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const GlowButton = ({ children, onClick }: GlowButtonProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative bg-black/80 px-5 py-2.5 rounded-lg text-base font-semibold text-foreground overflow-hidden transition-all duration-200 active:scale-[0.98]"
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.3), transparent 40%)',
            inset: 0,
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          } as React.CSSProperties}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

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
      className="relative bg-black border border-white rounded-xl overflow-hidden h-full"
    >
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

      <div className="aspect-video overflow-hidden bg-black relative z-10">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 relative z-10">
        <div className="mb-4">
          <h3 className="text-3xl font-black text-foreground text-center mb-3">
            {title}
          </h3>
          <p className="text-lg font-bold text-muted-foreground text-center">
            {role}
          </p>
        </div>
        
        <div className="flex justify-center gap-16 mt-6">
          <div className="text-center flex-1">
            <p className="text-5xl font-black text-foreground tabular-nums tracking-tight">
              {visits}
            </p>
            <p className="text-base text-muted-foreground mt-2 uppercase tracking-wider font-bold">
              Visits
            </p>
          </div>
          
          <div className="text-center flex-1">
            <p className="text-5xl font-black text-foreground tabular-nums tracking-tight">
              {ccu}
            </p>
            <p className="text-base text-muted-foreground mt-2 uppercase tracking-wider font-bold">
              Peak CCU
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 mt-6 justify-center">
          <GlowButton onClick={() => window.open(gameLink, '_blank')}>View Project</GlowButton>
          <GlowButton onClick={() => window.open(groupLink, '_blank')}>Group</GlowButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;