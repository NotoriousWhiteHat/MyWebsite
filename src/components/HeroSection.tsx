
import React, { useState, useEffect } from 'react';
import { TypeWriter } from './TypeWriter';
import { PulsingLanguages } from './PulsingLanguages';

export const HeroSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 2000);
    const languagesTimer = setTimeout(() => setShowLanguages(true), 3500);
    
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(languagesTimer);
    };
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4">
      <div className="text-center">
        <TypeWriter
          text="NOTORIOUS"
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
          speed={100}
          showCursor={true}
        />
        
        {showSubtitle && (
          <div className="animate-fade-in">
            <TypeWriter
              text="Whitehat Hacker | Programmer of 5+ Years"
              className="text-lg md:text-xl text-green-300 mb-8 tracking-wide"
              speed={50}
              delay={500}
            />
          </div>
        )}

        {showLanguages && (
          <div className="animate-fade-in animation-delay-1000">
            <PulsingLanguages />
          </div>
        )}

        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hover:text-green-400 transition-colors"
          onClick={scrollToPortfolio}
        >
          <div className="text-sm uppercase tracking-wider mb-2">View Portfolio</div>
          <div className="text-xl">▼</div>
        </div>
      </div>
    </section>
  );
};
