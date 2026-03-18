import { useState, useRef } from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  visits: string;
  ccu: string;
  role?: string;
  gameLink: string;
  groupLink?: string;
}

const ProjectCard = ({ title, image, visits, ccu, gameLink }: ProjectCardProps) => {
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

  const handleClick = () => {
    window.open(gameLink, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      className="relative group overflow-hidden rounded-2xl w-full aspect-[4/3] md:aspect-video border bg-white/[0.02] border-zinc-700/50 hover:border-white/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#57ED87]/60 transition-all duration-500 ease-out transform-gpu hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(87,237,135,0.15)]"
    >
      {/* Green glow blob */}
      <div
        className="pointer-events-none absolute w-[300px] h-[300px] bg-[#57ED87] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-out z-0"
        style={{
          left: isHovered ? mousePosition.x - 150 : "50%",
          top: isHovered ? mousePosition.y - 150 : "50%",
          transform: isHovered ? "none" : "translate(-50%, -50%)",
        }}
      />

      {/* White glow blob */}
      <div
        className="pointer-events-none absolute w-32 h-32 bg-white rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"
        style={{
          left: isHovered ? mousePosition.x - 64 : "50%",
          top: isHovered ? mousePosition.y - 64 : "50%",
          transform: isHovered ? "none" : "translate(-50%, -50%)",
        }}
      />

      {/* Mouse-following radial gradient */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(87, 237, 135, 0.12), transparent 60%)",
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px",
          } as React.CSSProperties}
        />
      )}

      {/* Card content */}
      <div className="relative z-10 h-full w-full">
        <div className="relative w-full h-full p-3 md:p-4 flex flex-col justify-end">
          {/* Background image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt={title}
              src={image}
              className="object-cover absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Dark overlay that lightens on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          </div>

          {/* Bottom glassmorphism info bar */}
          <div className="relative z-10 w-full bg-black/25 backdrop-blur-[2px] border border-white/10 rounded-xl p-3 md:p-4 flex items-center justify-between transition-all duration-500 ease-out group-hover:bg-black/35 group-hover:border-white/20 group-hover:translate-y-0 translate-y-1 group-hover:shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
            <div className="min-w-0 flex-1 mr-3">
              <h3 className="text-white font-bold text-sm md:text-lg truncate">{title}</h3>
            </div>

            <div className="flex items-center gap-2.5 md:gap-4 shrink-0">
              {/* Peak CCU */}
              <div className="flex items-center gap-1" aria-label={`Peak CCU: ${ccu}`}>  
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5 md:w-5 md:h-5 text-white"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="text-white font-bold text-[10px] md:text-sm">{ccu}</span>
              </div>

              {/* Visits */}
              <div className="flex items-center gap-1" aria-label={`Visits: ${visits}`}>  
                <svg  
                  viewBox="0 0 24 24"  
                  fill="currentColor"  
                  className="w-3.5 h-3.5 md:w-5 md:h-5 text-white"  
                  aria-hidden="true"  
                >  
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <span className="text-white font-bold text-[10px] md:text-sm">{visits}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;