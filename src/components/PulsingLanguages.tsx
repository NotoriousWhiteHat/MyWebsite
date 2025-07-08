
import React from 'react';

const languages = [
  { name: 'Lua', delay: '0s' },
  { name: 'JavaScript', delay: '0.6s' },
  { name: 'HTML', delay: '1.2s' },
  { name: 'CSS', delay: '1.8s' },
  { name: 'Python', delay: '2.4s' },
];

export const PulsingLanguages = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap mb-16">
      {languages.map((lang, index) => (
        <div
          key={lang.name}
          className="relative px-5 py-3 bg-green-500/10 border border-green-500/30 rounded-lg backdrop-blur-sm hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
          style={{
            animation: `pulse-glow 3s ease-in-out infinite`,
            animationDelay: lang.delay
          }}
        >
          <span className="text-white font-semibold uppercase tracking-wider text-sm">
            {lang.name}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </div>
      ))}
    </div>
  );
};
