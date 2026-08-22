import { useState, useEffect } from "react";

export interface GameLiveStats {
  playing: number;
  visits: number;
}

export interface RobloxProfile {
  followers: number;
  friends: number;
  following: number;
  avatarUrl: string | null;
}

interface RobloxStats {
  games: Record<string, GameLiveStats>;
  profile: RobloxProfile | null;
  currentlyPlaying: number;
  playSessions: number;
  peakCCU: number;
}

// Format large numbers nicely (1234567 -> "1.2M")
export const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "B+";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M+";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K+";
  }
  return num.toLocaleString();
};

// Compact number without the "+" suffix (for exact live values).
// e.g. 195440352 -> "195.4M", 172 -> "172"
export const formatCompact = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  }
  return num.toLocaleString();
};

export const useRobloxStats = () => {
  const [stats, setStats] = useState<RobloxStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/.netlify/functions/roblox-stats");
        
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        
        const data = await response.json();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching Roblox stats:", err);
        setError("Failed to load stats");
        // Set fallback values
        setStats({
          games: {},
          profile: null,
          currentlyPlaying: 0,
          playSessions: 0,
          peakCCU: 0,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
    
    // Refresh every 60 seconds
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  return { stats, isLoading, error };
};

export default useRobloxStats;