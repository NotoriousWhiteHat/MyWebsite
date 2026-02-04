import StatCard from "./StatCard";
import { useRobloxStats, formatNumber } from "@/hooks/useRobloxStats";

const StatsSection = () => {
  const { stats, isLoading } = useRobloxStats();

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8 mb-10">
      <StatCard
        value={isLoading ? "..." : formatNumber(stats?.currentlyPlaying || 0)}
        label="Currently Playing"
        isLoading={isLoading}
      />
      <StatCard
        value={isLoading ? "..." : formatNumber(stats?.playSessions || 0)}
        label="Play Sessions"
        isLoading={isLoading}
      />
      <StatCard
        value={isLoading ? "..." : formatNumber(stats?.peakCCU || 0)}
        label="Peak CCU"
        isLoading={isLoading}
      />
    </div>
  );
};

export default StatsSection;