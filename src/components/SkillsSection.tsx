
import React, { useRef, useEffect } from 'react';
import { SkillCard } from './SkillCard';

const skillCategories = [
  {
    title: 'Security & Hacking',
    skills: [
      { name: 'Penetration Testing', percentage: 95 },
      { name: 'Vulnerability Assessment', percentage: 90 },
      { name: 'Ethical Hacking', percentage: 88 },
    ]
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Python', percentage: 92 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'Lua', percentage: 90 },
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML/CSS', percentage: 88 },
      { name: 'Web Security', percentage: 93 },
      { name: 'API Development', percentage: 80 },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Roblox Studio', percentage: 95 },
      { name: 'Git/GitHub', percentage: 85 },
      { name: 'Linux/Terminal', percentage: 87 },
    ]
  },
];

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar) => {
              const progressBar = bar.querySelector('.skill-progress') as HTMLElement;
              if (progressBar) {
                progressBar.style.animation = 'none';
                progressBar.offsetHeight; // Trigger reflow
                progressBar.style.animation = 'fillBar 2s ease-out forwards';
              }
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
