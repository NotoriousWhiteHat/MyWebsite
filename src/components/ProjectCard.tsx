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

const StatBlock = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className="flex flex-col items-center justify-center px-2 py-3 text-center">
    <span
      className={`text-base sm:text-lg font-black tabular-nums ${
        highlight ? "text-emerald-400" : "text-white"
      }`}
    >
      {value}
    </span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">{label}</span>
  </div>
);

const ProjectCard = ({ title, image, visits, ccu, role, gameLink, groupLink, universeId }: ProjectCardProps) => {
  const { stats } = useRobloxStats();
  const live = universeId ? stats?.games?.[String(universeId)] : undefined;

  const livePlaying = live ? formatNumber(live.playing) : null;
  const liveVisits = live ? formatNumber(live.visits) : visits;

  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        {livePlaying && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-300 text-xs font-bold">{livePlaying} playing</span>
          </div>
        )}

        <h3 className="absolute bottom-3 left-4 right-4 text-white font-bold text-lg sm:text-xl">{title}</h3>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        {role && <p className="text-zinc-400 text-sm leading-relaxed mb-4">{role}</p>}

        <div className="grid grid-cols-3 divide-x divide-zinc-800 bg-black/40 border border-zinc-800 rounded-xl mb-4">
          <StatBlock label="Peak CCU" value={ccu} />
          <StatBlock label="Visits" value={liveVisits} />
          <StatBlock label="Live" value={livePlaying ?? "—"} highlight={!!livePlaying} />
        </div>

        <div className="flex items-center gap-2">
          <a
            href={gameLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#4a9eff] hover:bg-[#6aaeff] text-white font-bold text-sm transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </a>
          {groupLink && (
            <a
              href={groupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#4a9eff]/50 hover:border-[#4a9eff] text-[#4a9eff] font-bold text-sm transition-colors duration-200 hover:bg-[#4a9eff]/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
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
