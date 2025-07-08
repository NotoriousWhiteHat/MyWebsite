
import React from 'react';

interface SkillBarProps {
  skill: { name: string; percentage: number };
  delay: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, delay }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-green-300 font-semibold">{skill.percentage}%</span>
      </div>
      
      <div className="skill-bar h-2 bg-green-500/15 rounded-full overflow-hidden shadow-inner">
        <div
          className="skill-progress h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 rounded-full relative shadow-lg"
          style={{
            width: '0%',
            '--width': `${skill.percentage}%`,
            animationDelay: `${delay}s`
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};
