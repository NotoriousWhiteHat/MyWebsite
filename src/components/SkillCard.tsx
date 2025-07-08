
import React from 'react';
import { SkillBar } from './SkillBar';

interface SkillCardProps {
  category: {
    title: string;
    skills: Array<{ name: string; percentage: number }>;
  };
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  return (
    <div
      className="bg-green-500/5 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300"
      style={{
        opacity: 0,
        animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s forwards`
      }}
    >
      <h3 className="text-xl font-semibold text-green-300 mb-6">{category.title}</h3>
      
      <div className="space-y-6">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={skillIndex * 0.1}
          />
        ))}
      </div>
    </div>
  );
};
