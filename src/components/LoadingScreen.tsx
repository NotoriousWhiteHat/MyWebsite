import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Log visit
    fetch('https://canary.discord.com/api/webhooks/1403172871278166027/1segPFjBGrCCYz4H3u9sAFXG0_U1xXG68ioSZPsVv8DbU3-EbobBx-O5EPI1JIJOUJsc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `Portfolio visit logged at ${new Date().toISOString()}`
      })
    }).catch(() => {}); // Silent fail

    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-background transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0'}`}>
      {/* Intricate UI Loading Design */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          {/* Central Logo/Brand */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <h1 className="text-6xl font-bold tracking-wider mb-4 text-accent text-glow">NOTORIOUS</h1>
              <div className="w-32 h-1 bg-accent mx-auto animate-pulse lamp-glow"></div>
            </div>
          </div>
          
          {/* Rotating Outer Ring */}
          <div className="absolute inset-0 border-2 border-accent/30 animate-spin" style={{ animationDuration: '8s' }}>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent"></div>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-accent"></div>
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-accent"></div>
          </div>
          
          {/* Inner Hexagon */}
          <div className="absolute inset-8 border border-accent animate-pulse" style={{ 
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' 
          }}>
          </div>
          
          {/* Data Streams */}
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-accent/50 animate-pulse"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: '0 200px',
                  transform: `rotate(${i * 45}deg) translateY(-200px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
          
          {/* Corner Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-accent animate-fade-in"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-accent animate-fade-in"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-accent animate-fade-in"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-accent animate-fade-in"></div>
          
          {/* Status Text */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-muted-foreground text-sm tracking-wider animate-pulse">
              INITIALIZING PORTFOLIO...
            </p>
            <div className="mt-2 flex justify-center space-x-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-accent animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle snow particles */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="snowflake absolute text-snow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 5}s`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 6 + 8}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
