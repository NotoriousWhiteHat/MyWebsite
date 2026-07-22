import { useState, useRef } from "react";
import StatCard from "./StatCard";
import { useRobloxStats, formatNumber } from "@/hooks/useRobloxStats";

const StatsSection = () => {
  const { stats, isLoading } = useRobloxStats();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex justify-center mt-8 mb-10 px-2">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex flex-wrap justify-center divide-x divide-zinc-800 bg-black/70 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden shadow-[0_0_40px_-15px_rgba(59,130,246,0.4)]"
      >
        {isHovered && (
          <div
            className="absolute pointer-events-none z-0 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)',
              inset: 0,
              '--mouse-x': `${mousePosition.x}px`,
              '--mouse-y': `${mousePosition.y}px`,
            } as React.CSSProperties}
          />
        )}
        <div className="relative z-10 flex flex-wrap justify-center divide-x divide-zinc-800">
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
      </div>
    </div>
  );
};

export default StatsSection;
