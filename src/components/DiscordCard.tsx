
import React, { useState, useEffect } from 'react';

export const DiscordCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open('https://discord.com/users/959238547133595648', '_blank');
  };

  return (
    <div
      className={`fixed bottom-8 right-8 w-80 bg-slate-900/95 backdrop-blur-xl border border-green-500/30 rounded-xl p-5 cursor-pointer transition-all duration-1000 hover:scale-105 hover:border-green-500/50 z-50 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      onClick={handleClick}
    >
      {/* Live Tag */}
      <div className="absolute -top-2 left-5 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
        Live
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src="https://i.imgur.com/buCdIMJ.jpeg"
            alt="Jarmy05"
            className="w-16 h-16 rounded-full border-2 border-green-400"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg">Jarmy05</h4>
          <p className="text-green-300 text-sm">Online</p>
        </div>
      </div>

      {/* Custom Status */}
      <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-500/20">
        <span className="text-lg">🔐</span>
        <span className="text-gray-300 text-sm">Breaking code, not laws</span>
      </div>
    </div>
  );
};
