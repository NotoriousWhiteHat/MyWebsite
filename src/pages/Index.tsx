
import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from '../components/HeroSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { SkillsSection } from '../components/SkillsSection';
import { ContactSection } from '../components/ContactSection';
import { DiscordCard } from '../components/DiscordCard';
import { TerminalWidget } from '../components/TerminalWidget';
import { MatrixRain } from '../components/MatrixRain';
import { SoundManager } from '../components/SoundManager';

const Index = () => {
  const [fogLoaded, setFogLoaded] = useState(false);
  const fogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lazy load Vanta fog effect
    const loadFog = async () => {
      try {
        // Simulate loading delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));
        setFogLoaded(true);
      } catch (error) {
        console.error('Failed to load fog effect:', error);
      }
    };

    loadFog();

    // Scroll-based fog opacity
    const handleScroll = () => {
      if (fogRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.001;
        const opacity = Math.max(0.3, 1 + rate);
        fogRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Fog Background */}
      <div 
        ref={fogRef}
        className="fixed inset-0 z-0 opacity-100 transition-opacity duration-1000"
        style={{
          background: fogLoaded ? 
            'radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(0,17,34,0.3) 50%, rgba(0,0,0,1) 100%)' :
            'linear-gradient(135deg, #0a0a0a 0%, #001122 100%)'
        }}
      />

      {/* Sound Manager */}
      <SoundManager />

      {/* Terminal Widget */}
      <TerminalWidget />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </div>

      {/* Discord Card */}
      <DiscordCard />
    </div>
  );
};

export default Index;
