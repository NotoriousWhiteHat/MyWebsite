import StatCard from "./StatCard";
import { useRobloxStats, formatNumber } from "@/hooks/useRobloxStats";

const StatsSection = () => {
  const { stats, isLoading } = useRobloxStats();

  return (
    <div className="mx-auto mt-8 mb-10 grid max-w-xs grid-cols-1 items-start gap-3 sm:max-w-3xl sm:grid-cols-3 sm:gap-4">
      <div className="flex flex-col items-start gap-2">
        <StatCard
          className="w-full"
          value={isLoading ? "..." : formatNumber(stats?.currentlyPlaying || 0)}
          label="Currently Playing"
          isLoading={isLoading}
        />
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">Live</span>
        </div>
      </div>
      <StatCard
        className="w-full"
        value={isLoading ? "..." : formatNumber(stats?.playSessions || 0)}
        label="Play Sessions"
        isLoading={isLoading}
      />
      <StatCard
        className="w-full"
        value={isLoading ? "..." : formatNumber(stats?.peakCCU || 0)}
        label="Peak CCU"
        isLoading={isLoading}
      />
    </div>
  );
};

export default StatsSection;