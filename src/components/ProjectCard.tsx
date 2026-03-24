import { useState, useRef, useEffect, useCallback } from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  visits: string;
  ccu: string;
  role?: string;
  gameLink: string;
  groupLink?: string;
}

const ProjectCard = ({ title, image, visits, ccu, role, gameLink, groupLink }: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setIsTouchDevice(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouchDevice(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isTouchDevice) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as Node | null;
    if (cardRef.current && relatedTarget && cardRef.current.contains(relatedTarget)) {
      return;
    }
    setIsHovered(false);
    if (!isTouchDevice) {
      setIsFlipped(false);
    }
  };

  const handleCardClick = () => {
    if (isTouchDevice && !isFlipped) {
      setIsFlipped(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isFlipped) setIsFlipped(true);
    }
    if (e.key === "Escape") {
      setIsFlipped(false);
    }
  };

  const handleClose = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFlipped(false);
  }, []);

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={title}
      className="card-perspective relative group w-full aspect-[4/3] md:aspect-video transition-all duration-500 ease-out transform-gpu hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(87,237,135,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#57ED87]/60 rounded-2xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      {/* Inner flip container */}
      <div
        className="card-preserve-3d relative w-full h-full"
        style={{
          transition: "transform 0.7s ease-out",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          willChange: "transform",
        }}
      >
        {/* ===================== FRONT FACE ===================== */}
        <div className="card-backface-hidden absolute inset-0 overflow-hidden rounded-2xl border bg-white/[0.02] border-zinc-700/50 group-hover:border-white/20 transition-colors duration-500">
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
                "--mouse-y": `${mousePosition.y}px`,
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

        {/* ===================== BACK FACE ===================== */}
        <div
          className="card-backface-hidden card-rotate-y-180 absolute inset-0 overflow-hidden rounded-2xl border border-zinc-700/50 backdrop-blur-md"
          style={{ background: "linear-gradient(135deg, #18181b 80%, #1a2a1f 100%)" }}
        >
          {/* Subtle green glow accents */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 bg-[#57ED87] rounded-full blur-[70px] opacity-10 z-0" />
          <div className="pointer-events-none absolute -top-8 -left-8 w-32 h-32 bg-[#57ED87] rounded-full blur-[60px] opacity-5 z-0" />

          <div className="relative z-10 h-full w-full p-4 md:p-5 flex flex-col">
            {/* Header: Title + Close button */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-white font-bold text-base md:text-xl leading-tight truncate flex-1">{title}</h3>
              {isTouchDevice && (
                <button
                  onClick={handleClose}
                  className="shrink-0 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 text-sm font-bold"
                  aria-label="Close"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Role description */}
            {role && (
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-2 mb-auto">{role}</p>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2" aria-label={`Peak CCU: ${ccu}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5 text-[#57ED87] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div>
                  <div className="text-white font-bold text-sm md:text-base leading-none">{ccu}</div>
                  <div className="text-zinc-500 text-[10px] mt-0.5">Peak CCU</div>
                </div>
              </div>

              <div className="w-px h-8 bg-zinc-700/80" />

              <div className="flex items-center gap-2" aria-label={`Visits: ${visits}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5 text-[#57ED87] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <div>
                  <div className="text-white font-bold text-sm md:text-base leading-none">{visits}</div>
                  <div className="text-zinc-500 text-[10px] mt-0.5">Visits</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 mt-3">
              {/* Game button */}
              <a
                href={gameLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                className="relative z-20 flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#57ED87] hover:bg-[#6af09a] text-zinc-900 font-bold text-xs md:text-sm transition-all duration-200 hover:shadow-[0_0_18px_rgba(87,237,135,0.45)] cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Game
              </a>

              {/* Group button */}
              {groupLink && (
                <a
                  href={groupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="relative z-20 flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[#57ED87]/50 hover:border-[#57ED87] text-[#57ED87] font-bold text-xs md:text-sm transition-all duration-200 hover:bg-[#57ED87]/10 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" aria-hidden="true">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  Group
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
