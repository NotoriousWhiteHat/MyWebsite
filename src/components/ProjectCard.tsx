import { useRobloxStats, formatNumber } from "@/hooks/useRobloxStats";

interface ProjectCardProps {
  title: string;
  image: string;
  visits: string;
  ccu: string;
  role?: string;
  gameLink: string;
  groupLink?: string;
  universeId?: number;
}

const PeopleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const VisitsIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CrownIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2h14v2H5v-2z" />
  </svg>
);

const ProjectCard = ({ title, image, visits, ccu, role, gameLink, groupLink, universeId }: ProjectCardProps) => {
  const { stats } = useRobloxStats();
  const live = universeId ? stats?.games?.[String(universeId)] : undefined;

  const livePlaying = live ? formatNumber(live.playing) : null;
  const liveVisits = live ? formatNumber(live.visits) : visits;

  return (
    <div className="group relative rounded-3xl bg-white/[0.03] border border-white/[0.06] p-2.5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:-translate-y-1">
      {/* Image / hero area (links to game) */}
      <a
        href={gameLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden rounded-[18px] aspect-[16/10]"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Live badge */}
        {livePlaying && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/10 px-2.5 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-white text-[11px] font-semibold tracking-wide">LIVE</span>
          </div>
        )}

        {/* Title + stats overlaid at the bottom */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-white font-bold text-lg sm:text-xl leading-tight drop-shadow mb-2.5">{title}</h3>
          <div className="flex items-center gap-3.5 text-white/90">
            <span className="flex items-center gap-1.5 text-sm font-semibold tabular-nums" title="Live players">
              <PeopleIcon className="w-4 h-4 text-emerald-400" />
              {livePlaying ?? "—"}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold tabular-nums" title="Visits">
              <VisitsIcon className="w-3.5 h-3.5 text-blue-400" />
              {liveVisits}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold tabular-nums" title="Peak CCU">
              <CrownIcon className="w-4 h-4 text-amber-300" />
              {ccu}
            </span>
          </div>
        </div>
      </a>

      {/* Footer: role + group link */}
      <div className="flex items-center justify-between gap-3 px-2.5 pt-3 pb-1.5">
        <p className="text-zinc-500 text-xs leading-snug line-clamp-2 flex-1">{role}</p>
        {groupLink && (
          <a
            href={groupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            Group
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3" aria-hidden="true">
              <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
