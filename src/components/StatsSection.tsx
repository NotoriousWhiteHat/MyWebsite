import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import { fetchAllStats } from "@/lib/robloxApi";
import { formatNumber } from "@/lib/formatNumber";

const StatsSection = () => {
  const [stats, setStats] = useState({
    currentlyPlaying: 0,
    playSessions: 0,
    communityReach: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      setIsLoading(true);
      const data = await fetchAllStats();
      setStats(data);
      setIsLoading(false);
    };

    loadStats();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center max-w-4xl mx-auto mb-8">
      <div className="flex-1">
        <StatCard
          title="Currently Playing"
          value={isLoading ? "..." : formatNumber(stats.currentlyPlaying)}
          isLoading={isLoading}
        />
      </div>
      <div className="flex-1">
        <StatCard
          title="Play Sessions"
          value={isLoading ? "..." : formatNumber(stats.playSessions)}
          isLoading={isLoading}
        />
      </div>
      <div className="flex-1">
        <StatCard
          title="Community Reach"
          value={isLoading ? "..." : formatNumber(stats.communityReach)}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default StatsSection;
