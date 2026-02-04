import { useState, useRef } from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const GlowButton = ({ children, onClick, className = "" }: GlowButtonProps) => {
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
      className={`relative bg-black/80 border border-zinc-800 px-6 py-3 rounded-lg text-sm 
                 font-medium text-foreground overflow-hidden
                 transition-all duration-200 active:scale-[0.98] ${className}`}
    >
      {/* Blue gradient glow that follows mouse */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.4), transparent 40%)',
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

export default GlowButton;