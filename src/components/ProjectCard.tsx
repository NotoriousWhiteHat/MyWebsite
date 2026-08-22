import { useState, useRef } from "react";
import { formatCompact, type GameLiveStats } from "@/hooks/useRobloxStats";

interface ProjectCardProps {
  title: string;
  image: string;
  /** Static fallback for visits, e.g. "69.0M" */
  visits: string;
  /** Static fallback / peak CCU as a number */
  peakCcu: number;
  /** Live stats from the Roblox API, when available */
  live?: GameLiveStats;
  role?: string;
  gameLink: string;
  groupLink?: string;
}

const ProjectCard = ({ title, image, visits, peakCcu, live, role, gameLink, groupLink }: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isLive = !!live;
  const playingLabel = isLive ? formatCompact(live!.playing) : formatCompact(peakCcu);
  const peakLabel = formatCompact(peakCcu);
  const visitsLabel = isLive ? formatCompact(live!.visits) : visits;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/60 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1"
    >
      {/* Mouse-following glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(74, 158, 255, 0.10), transparent 45%)",
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          } as React.CSSProperties}
        />
      )}

      {/* Cover image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          alt={title}
          src={image}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/10 to-transparent" />

        {/* Live stats badges over the image */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
          {/* Live CCU */}
          <div className="flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 backdrop-blur-sm border border-white/10">
            <span className="relative flex h-2 w-2">
              {isLive && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              )}
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${isLive ? "bg-green-400" : "bg-zinc-500"}`}
              />
            </span>
            <span className="text-sm font-bold tabular-nums text-white">{playingLabel}</span>
            <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-300">playing</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="relative z-10 flex flex-1 flex-col p-5">
        <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>

        {role && (
          <p className="mt-2 mb-4 text-sm leading-relaxed text-zinc-400">{role}</p>
        )}

        {/* Stats row */}
        <div className="mt-auto flex items-center gap-5 border-t border-zinc-700/50 pt-4">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-zinc-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              Peak CCU
            </div>
            <div className="mt-0.5 text-lg font-bold tabular-nums text-white">{peakLabel}</div>
          </div>

          <div className="h-9 w-px bg-zinc-700/60" />

          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-zinc-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              Visits
            </div>
            <div className="mt-0.5 text-lg font-bold tabular-nums text-white">{visitsLabel}</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex items-center gap-2">
          <a
            href={gameLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#4a9eff] px-3 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#6aaeff] hover:shadow-[0_0_18px_rgba(74,158,255,0.45)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Game
          </a>

          {groupLink && (
            <a
              href={groupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#4a9eff]/50 px-3 py-2.5 text-sm font-bold text-[#4a9eff] transition-all duration-200 hover:border-[#4a9eff] hover:bg-[#4a9eff]/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              Group
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
